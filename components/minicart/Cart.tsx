import { useComputed } from "@preact/signals";

import { useCart } from "../../sdk/cart/useCart.ts";
import { useUI } from "../../sdk/useUI.ts";
import CartItem, { formatPrice } from "./CartItem.tsx";

import Button from "../ui/Button.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;

  if (cart.value === null) {
    return null;
  }

  return (
    <>
      <div class="py-4 flex-grow-1 overflow-y-auto">
        {isCartEmpty
          ? <p class="text-gray-700">Não há itens no carrinho</p>
          : (
            <ul role="list" class="-my-6 divide-y divide-gray-200">
              {cart.value.items.map((_, index) => (
                <CartItem
                  index={index}
                  key={index}
                />
              ))}
            </ul>
          )}
      </div>
      <div class="pt-4 flex flex-col gap-2">
        {cart.value.totalizers.map(({ name, value }) => (
          <div class="flex justify-between text-lg font-medium">
            <p>{name}</p>
            <p>{formatPrice(value)}</p>
          </div>
        ))}
        <p class="text-sm text-gray-500">
          Taxas e frete serāo calculados no checkout
        </p>
        <div class="">
          <Button
            fit="container"
            onClick={() =>
              window.open(
                `${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`,
                "_blank",
              )}
            disabled={loading.value || cart.value.items.length === 0}
          >
            Finalizar Compra
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
