import useSWR from "swr";
import { useState } from "preact/hooks";
import { OrderForm } from "../clients/vtex/checkout.ts";

const CART_SWR_KEY = "cart";

export function useCart() {
  const cartFetcher = () => {
    return fetch("/api/cart").then((r) => r.json());
  };
  const { data, isLoading, mutate } = useSWR<OrderForm, Error>(
    CART_SWR_KEY,
    cartFetcher,
    {}
  );
  const [mutationLoading, setLoading] = useState(true);

  const updateItem = (uniqueId: string, quantity: number) => {
    setLoading(true);
    return fetch("/api/cart/items", {
      method: "PUT",
      body: JSON.stringify({ items: [{ uniqueId, quantity }] }),
    })
      .then((r) => r.json())
      .then((cart) => {
        mutate(cart);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addItems = (
    items: Array<{ skuId: string; quantity: number; seller: string }>
  ) => {
    return fetch("/api/cart/items", {
      method: "POST",
      body: JSON.stringify({
        items,
      }),
    })
      .then((r) => r.json())
      .then((cart) => mutate(cart));
  };

  const addItem = (skuId: string, seller: string) =>
    addItems([{ skuId, seller, quantity: 1 }]);

  return {
    cart: data,
    loading: isLoading,
    mutationLoading: mutationLoading || isLoading,
    updateItem,
    addItem,
  };
}
