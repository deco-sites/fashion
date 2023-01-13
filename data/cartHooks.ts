import { signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { OrderForm } from "../clients/vtex/checkout.ts";

const cartLoading = signal(false);
const setCartLoading = (v: boolean) => {
  cartLoading.value = v;
};
const cart = signal<OrderForm | undefined>(undefined);
const setCart = (newCart: OrderForm) => {
  cart.value = newCart;
};

// TODO: make the operations as a queue
const updateItem = (
  uniqueId: string,
  quantity: number,
) => {
  setCartLoading(true);
  fetch("/api/cart/items", {
    method: "PUT",
    body: JSON.stringify({ items: [{ uniqueId, quantity }] }),
  })
    .then((r) => r.json())
    .then(setCart)
    .finally(() => {
      setCartLoading(false);
    });
};

const addItems = (
  items: Array<{ skuId: string; quantity: number; seller: string }>,
) => {
  setCartLoading(true);
  return fetch("/api/cart/items", {
    method: "POST",
    body: JSON.stringify({
      items,
    }),
  })
    .then((r) => r.json())
    .then(setCart)
    .finally(() => {
      setCartLoading(false);
    });
};

const addItem = (skuId: string, seller: string) =>
  addItems([{ skuId, seller, quantity: 1 }]);

if (IS_BROWSER) {
  const cartFetcher = () => {
    if (cartLoading.value) {
      return;
    }

    setCartLoading(true);
    return fetch("/api/cart").then((r) => r.json()).then((_cart) =>
      cart.value = _cart
    ).finally(() => {
      setCartLoading(false);
    });
  };

  cartFetcher();
}

export function useCart() {
  return {
    cart,
    loading: cartLoading,
    updateItem,
    addItem,
  };
}
