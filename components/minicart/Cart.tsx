import { useCart } from "../../sdk/cart/useCart.ts";
import CartItem, { formatPrice } from "./CartItem.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { cart, updateItems } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;

  if (cart.value === null) {
    return null;
  }

  return (
    <>
      <div class="flex-grow-1 my-4">
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
      <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div class="flex justify-between text-lg font-medium">
          <p>Subtotal</p>
          <p>
            {formatPrice(
              cart.value.totalizers.find(({ id }) => id === "Items")?.value ??
                0,
            )}
          </p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500">
          Frete será calculado no Checkout
        </p>
        <div class="mt-6">
          <a
            class="w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value.orderFormId}`}
          >
            Finalizar Compra
          </a>
        </div>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or&nbsp;
            <button
              type="button"
              class="font-medium"
              onClick={(e) => {
                (e.target as HTMLButtonElement).closest("dialog")!.close();
              }}
            >
              Continue Comprando <span aria-hidden="true">&rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cart;
