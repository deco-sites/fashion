import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useCart } from "../../sdk/cart/useCart.ts";
import CartItem, { formatPrice } from "./CartItem.tsx";

import Button from "../ui/Button.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Coupon() {
  const { cart, loading, addCouponsToCart } = useCart();
  const ref = useRef<HTMLInputElement>(null);
  const displayInput = useSignal(false);
  const coupon = cart.value?.marketingData?.coupon;

  const onApply = () => {
    const text = ref.current?.value;

    if (typeof text === "string") {
      addCouponsToCart({ text });
    }
  };

  return (
    <>
      <div class="flex justify-between items-center text-lg font-medium">
        <p>
          Coupon {coupon ? ":" : ""} <span class="font-semibold">{coupon}</span>
        </p>
        {!displayInput.value && (
          <Button
            variant="tertiary"
            onClick={() => {
              displayInput.value = true;
            }}
          >
            <span class="underline">
              {coupon ? "Alterar Coupon" : "Adicionar Coupon"}
            </span>
          </Button>
        )}
        {displayInput.value && (
          <div class="flex gap-2">
            <Button
              variant="secondary"
              disabled={loading.value}
              onClick={() => {
                displayInput.value = false;
              }}
            >
              <span>Fechar</span>
            </Button>
            <Button
              loading={loading.value}
              variant="primary"
              onClick={onApply}
            >
              <span>Aplicar</span>
            </Button>
          </div>
        )}
      </div>
      {displayInput.value && (
        <div class="flex justify-between items-center gap-2">
          <input
            ref={ref}
            class="flex-grow border rounded p-2"
            type="text"
            value={coupon ?? ""}
            placeholder={"Entre com o seu coupon"}
          >
          </input>
        </div>
      )}
    </>
  );
}

function Cart() {
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
          <div class="flex justify-between items-center text-lg font-medium">
            <p>{name}</p>
            <p>{formatPrice(value)}</p>
          </div>
        ))}
        <Coupon />
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
