import { useEffect, useRef } from "preact/hooks";
import { ShoppingCartIcon } from "heroicons";
import { tw } from "twind";
import { useCart } from "../data/cartHooks.ts";
import { OrderForm } from "../clients/vtex/checkout.ts";
import Modal from "../components/ui/Modal.tsx";
import CartItem, { formatPrice } from "../components/minicart/CartItem.tsx";

const CHECKOUT_URL = "https://secure.offpremium.com.br/checkout";

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
  const { cart, updateItem } = useCart();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!eventListenerAdded) {
      addEventListener(OPEN_CART_EVENT_NAME, (e) => {
        console.log("showing modal");
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
        class={tw`h-full flex items-center gap-2 px-5 py-1`}
        aria-label="open cart"
      >
        <ShoppingCartIcon className="w-8 h-8" />
      </button>
      <Modal title="Seu Carrinho" ref={modalRef}>
        {cart && <CartInner cart={cart} updateItem={updateItem} />}
      </Modal>
    </div>
  );
}

function CartInner({
  cart,
  updateItem,
}: {
  cart: OrderForm | undefined;
  updateItem(u: string, q: number): void;
}) {
  const isCartEmpty = cart?.items?.length === 0;

  const remove = (itemId: string) => {
    updateItem(itemId, 0);
  };

  return (
    <>
      {cart && (
        <div class={tw`flex-grow-1 my-4`}>
          {isCartEmpty
            ? <p class={tw`text-gray-700`}>Não há itens no carrinho</p>
            : (
              <ul role="list" class={tw`-my-6 divide-y divide-gray-200`}>
                {cart?.items?.map((item) => (
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
      {cart && (
        <div class={tw`border-t border-gray-200 py-6 px-4 sm:px-6`}>
          <div class={tw`flex justify-between text-lg font-medium`}>
            <p>Subtotal</p>
            <p>
              {formatPrice(
                cart?.totalizers?.find(({ id }) => id === "Items")?.value ?? 0,
              )}
            </p>
          </div>
          <p class={tw`mt-0.5 text-sm text-gray-500`}>
            Frete será calculado no Checkout
          </p>
          <div class={tw`mt-6`}>
            <a
              class={tw`w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700`}
              disabled={isCartEmpty}
              target="_blank"
              href={`${CHECKOUT_URL}?orderFormId=${cart.orderFormId}`}
            >
              Finalizar Compra
            </a>
          </div>
          <div
            class={tw`mt-6 flex justify-center text-center text-sm text-gray-500`}
          >
            <p>
              or&nbsp;
              <button
                type="button"
                class={tw`font-medium`}
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
    </>
  );
}
