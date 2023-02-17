import { useRef } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";

import type { NavItem } from "./NavItem.ts";

function MenuButton({ items }: { items: NavItem[] }) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button
        aria-label="open menu"
        class="flex items-center justify-center h-12 w-12"
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        <Icon id="Bars3" className="w-8 h-8" />
      </button>
      <Modal
        title="Menu"
        ref={modalRef}
        onClose={() => {
          modalRef.current?.close();
        }}
      >
        <ul class="flex-grow flex flex-col gap-2 pt-2">
          {items.map((item) => (
            <li>
              <a class="text-black text-base" href={item.href}>{item.label}</a>
              <ul class="ml-0.5">
                {item.children.map((child) => (
                  <li>
                    <a class="text-gray-600 text-sm" href={child.href}>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}

export default MenuButton;
