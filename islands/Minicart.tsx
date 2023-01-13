import { useEffect, useRef } from "preact/hooks";
import Icon from "$components/ui/Icon.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

export const CHECKOUT_URL = "https://secure.offpremium.com.br/checkout";

declare global {
  interface HTMLDialogElement {
    showModal(): void;
    close(): void;
  }
}
export const OPEN_CART_EVENT_NAME = "openCart";
export const CART_MODAL_NAME = "cart-dialog";

export default function Cart() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const cartModal: HTMLDialogElement | null = document.querySelector(
      `dialog[data-modal="${CART_MODAL_NAME}"]`,
    );
    if (!cartModal) {
      return;
    }

    modalRef.current = cartModal;
  }, []);

  return (
    <button
      disabled={!IS_BROWSER}
      onClick={() => {
        modalRef.current?.showModal();
      }}
      class="h-full flex items-center gap-2 p-2"
      aria-label="open cart"
    >
      <Icon name="ShoppingCart" className="w-8 h-8" />
    </button>
  );
}
