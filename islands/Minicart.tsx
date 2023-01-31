import { useEffect, useRef } from "preact/hooks";
import Icon from "$components/ui/Icon.tsx";
import { useCart } from "../sdk/cart/useCart.ts";
import Modal from "../components/ui/Modal.tsx";
import CartItem, { formatPrice } from "../components/minicart/CartItem.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

declare global {
  interface HTMLDialogElement {
    showModal(): void;
    close(): void;
  }
}
export const OPEN_CART_EVENT_NAME = "openCart";

// TODO: Figure out why effect is triggered twice (Preact's dev mode?)
let eventListenerAdded = false;

export default function Cart() {
  const { cart } = useCart();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!eventListenerAdded) {
      addEventListener(OPEN_CART_EVENT_NAME, (e) => {
        modalRef?.current?.showModal();
        e.stopPropagation();
      });
      eventListenerAdded = true;
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => modalRef.current!.showModal()}
        class="h-full flex items-center gap-2 p-2"
        aria-label="open cart"
      >
        <Icon name="ShoppingCart" className="w-8 h-8" />
      </button>
      <Modal title="Seu Carrinho" ref={modalRef}>
        <CartInner />
      </Modal>
    </div>
  );
}

function CartInner() {
  const { cart, updateItems } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;

  if (!cart.value) {
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
    </>
  );
}
