import { useEffect, useRef } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";

import { useUI } from "../../sdk/useUI.ts";
import Modal from "../ui/Modal.tsx";

const Cart = lazy(() => import("./Cart.tsx"));

function CartModal() {
  const { displayCart } = useUI();
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (displayCart.value === true && modalRef.current?.open === false) {
      modalRef.current?.showModal();
    } else if (displayCart.value === false && modalRef.current?.open === true) {
      modalRef.current?.close();
    }
  }, [displayCart.value]);

  return (
    <Modal
      title="Meu Carrinho"
      ref={modalRef}
      onClose={() => {
        displayCart.value = false;
      }}
    >
      {displayCart.value && (
        <Suspense fallback={null}>
          <Cart />
        </Suspense>
      )}
    </Modal>
  );
}

export default CartModal;
