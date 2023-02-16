import { useEffect, useRef } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";

import { useUI } from "../../sdk/useUI.ts";
import Modal from "../ui/Modal.tsx";
import type { NavItem } from "./NavItem.ts";

const Menu = lazy(() => import("./Menu.tsx"));

function MenuModal({ items }: { items: NavItem[] }) {
  const { displayMenu } = useUI();
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (displayMenu.value === true && modalRef.current?.open === false) {
      modalRef.current?.showModal();
    } else if (displayMenu.value === false && modalRef.current?.open === true) {
      modalRef.current?.close();
    }
  }, [displayMenu.value]);

  return (
    <Modal
      title="Menu"
      ref={modalRef}
      onClose={() => {
        displayMenu.value = false;
      }}
    >
      {displayMenu.value && (
        <Suspense fallback={null}>
          <Menu items={items} />
        </Suspense>
      )}
    </Modal>
  );
}

export default MenuModal;
