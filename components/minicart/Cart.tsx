import { useCart } from "../../sdk/cart/useCart.ts";
import { useUI } from "../../sdk/useUI.ts";
import CartItem, { formatPrice } from "./CartItem.tsx";

import Button from "../ui/Button.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading, updateItems } = useCart();
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
              {cart.value.items.map((item, index) => (
                <CartItem
                  index={index}
                  key={index}
                  item={item}
                  onRemove={() =>
                    updateItems({ orderItems: [{ index, quantity: 0 }] })}
                />
              ))}
            </ul>
          )}
      </div>
      <div class="pt-4 flex flex-col gap-2">
        <div class="flex justify-between text-lg font-medium">
          <p>Subtotal</p>
          <p>
            {formatPrice(
              cart.value.totalizers.find(({ id }) => id === "Items")?.value ??
                0,
            )}
          </p>
        </div>
        <p class="text-sm text-gray-500">
          Frete será calculado no Checkout
        </p>
        <div class="">
          <Button
            fit="container"
            onClick={() =>
              window.open(
                `${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`,
                "_blank",
              )}
            disabled={loading.value}
          >
            Finalizar Compra
          </Button>
        </div>
        <div class="flex justify-center text-center text-sm text-gray-500">
          <p>
            or&nbsp;
            <Button
              variant="tertiary"
              onClick={() => {
                displayCart.value = false;
              }}
            >
              Continue Comprando <span aria-hidden="true">&rarr;</span>
            </Button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
