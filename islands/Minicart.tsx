import { useRef } from "preact/hooks";
import { ShoppingCartIcon } from "heroicons";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, tw } from "twind";
import { animation, css } from "twind/css";
import IconCart from "../components/icons/CartIcon.tsx";
import { useCart } from "../data/cartHooks.ts";
import { OrderForm } from "../clients/vtex/checkout.ts";
import QuantitySelector from "../components/QuantitySelector.tsx";
import Spinner from "../components/ui/Spinner.tsx";

const CHECKOUT_URL = "https://zeedog.com.br/checkout";
// Lazy load a <dialog> polyfill.
// @ts-expect-error HTMLDialogElement is not just a type!
if (IS_BROWSER && window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

declare global {
  interface HTMLDialogElement {
    showModal(): void;
    close(): void;
  }
}

const slideRight = animation("0.4s ease normal", {
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const slideBottom = animation("0.4s ease normal", {
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const backdrop = css({
  "&::backdrop": {
    background: "rgba(0, 0, 0, 0.5)",
  },
});

// TODO: Use Intl
const formatPrice = (cents: number) =>
  `R$ ${(cents / 100).toFixed(2).replace(".", ",")}`;

export default function Cart() {
  const { cart, loading, updateItem } = useCart();

  const ref = useRef<HTMLDialogElement | null>(null);

  const onDialogClick = (e: MouseEvent) => {
    if ((e.target as HTMLDialogElement).tagName === "DIALOG") {
      ref.current!.close();
    }
  };

  const cartItemsLengh = `${cart?.items?.length ?? 0}`;

  return (
    <div>
      <button
        onClick={() => ref.current!.showModal()}
        class={tw`h-full flex items-center gap-2 px-5 py-1`}
      >
        <ShoppingCartIcon className="w-8 h-8" />
      </button>
      <dialog
        ref={ref}
        class={tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideRight} ${backdrop}`}
        onClick={onDialogClick}
      >
        {cart && <CartInner cart={cart} updateItem={updateItem} />}
      </dialog>
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
  const corners = apply`rounded(tl-2xl tr-2xl sm:(tr-none bl-2xl))`;
  const card =
    tw`py-8 px-6 h-full bg-white ${corners} flex flex-col justify-between`;

  const isCartEmpty = cart?.items?.length === 0;

  const remove = (itemId: string) => {
    updateItem(itemId, 0);
  };

  return (
    <div class={card}>
      <div class={tw`flex justify-between`}>
        <h2 class={tw`text-lg font-medium text-gray-900`}>Seu Carrinho</h2>
        <button
          class={tw`py-1`}
          onClick={(e) => {
            (e.target as HTMLButtonElement).closest("dialog")!.close();
          }}
        >
          <svg
            class={tw`w-6 h-6 fill-current text-gray-600`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
      {cart && (
        <div class={tw`flex-grow-1 my-4`}>
          {isCartEmpty
            ? <p class={tw`text-gray-700`}>Não há itens no carrinho</p>
            : (
              <ul role="list" class={tw`-my-6 divide-y divide-gray-200`}>
                {cart?.items?.map(
                  ({
                    imageUrl,
                    name,
                    skuName,
                    quantity,
                    price,
                    detailUrl,
                    uniqueId,
                  }) => (
                    <li class={tw`flex py-6`}>
                      <div
                        class={tw`h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200`}
                      >
                        <img
                          src={imageUrl}
                          alt={skuName}
                          class={tw`h-full w-full object-cover object-center`}
                        />
                      </div>
                      <div class={tw`ml-4 flex flex-1 flex-col`}>
                        <div>
                          <div
                            class={tw`flex justify-between text-base font-medium text-gray-900`}
                          >
                            <a href={detailUrl}>
                              <h3>{name}</h3>
                            </a>
                            <p class={tw`ml-4`}>{formatPrice(price)}</p>
                          </div>
                          <p class={tw`mt-1 text-sm text-gray-500`}>
                            {skuName === name ? "" : skuName}
                          </p>
                        </div>
                        <div
                          class={tw`flex flex-1 items-end justify-between text-sm`}
                        >
                          <p class={tw`text-gray-500`}>
                            Quantidade:
                            <QuantitySelector
                              initialQuantity={quantity}
                              itemId={uniqueId}
                            />
                          </p>

                          <div class={tw`flex`}>
                            <button
                              type="button"
                              class={tw`font-medium`}
                              onClick={() => remove(uniqueId)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ),
                )}
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
              href={`https://www.zeedog.com.br/checkout?orderFormId=${cart.orderFormId}`}
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
    </div>
  );
}
