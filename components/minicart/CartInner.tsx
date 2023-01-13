import { useCart } from "../../data/cartHooks.ts";
import { CHECKOUT_URL } from "../../islands/Minicart.tsx";
import CartItem, { formatPrice } from "./CartItem.tsx";

export default function CartInner() {
  const { cart, updateItem } = useCart();
  const isCartEmpty = cart.value === undefined ||
    cart.value.items?.length === 0;

  const remove = (itemId: string) => {
    updateItem(itemId, 0);
  };

  if (!cart.value) {
    return <div />;
  }

  return (
    <div>
      {cart.value && (
        <div class="flex-grow-1 my-4">
          {isCartEmpty
            ? <p class="text-gray-700">Não há itens no carrinho</p>
            : (
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                {cart?.value.items?.map((item) => (
                  <CartItem
                    key={item.uniqueId}
                    item={item}
                    onRemove={() => remove(item.uniqueId)}
                  />
                ))}
              </ul>
            )}
        </div>
      )}
      {cart.value && (
        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div class="flex justify-between text-lg font-medium">
            <p>Subtotal</p>
            <p>
              {formatPrice(
                cart.value.totalizers?.find(({ id }) => id === "Items")
                  ?.value ?? 0,
              )}
            </p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Frete será calculado no Checkout
          </p>
          <div class="mt-6">
            <a
              class="w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
              disabled={isCartEmpty}
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
      )}
    </div>
  );
}
