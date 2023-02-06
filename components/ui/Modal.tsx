import type { ComponentChildren, Ref, RefObject } from "preact";
import { useMemo } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { forwardRef } from "preact/compat";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

interface Props {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  children?: ComponentChildren;
}

const isRefObject = (
  ref: Ref<HTMLDialogElement>,
): ref is RefObject<HTMLDialogElement> => Boolean("current" in ref);

const styles = {
  "sidebar-right": {
    dialog: `sm:slide-left`,
    corners: `rounded-tl-2xl rounded-tr-2xl sm:rounded-none`,
  },
  "sidebar-left": {
    dialog: `sm:slide-right`,
    corners: `rounded-tr-2xl rounded-tl-2xl sm:rounded-none`,
  },
  center: {
    dialog: "",
    corners: `rounded-2xl`,
  },
};

// TODO: Right now, modal is a right-sidebar only
const Modal = forwardRef<HTMLDialogElement, Props>(({
  children,
  title,
  mode = "sidebar-right",
  onClose,
}, ref) => {
  const onDialogClick = (e: MouseEvent) => {
    if (!isRefObject(ref)) {
      return;
    }

    if ((e.target as HTMLDialogElement).tagName === "DIALOG") {
      onClose?.();
    }
  };

  const { dialog, corners } = useMemo(() => styles[mode], [mode]);

  return (
    <dialog
      ref={ref}
      class={`bg-transparent p-0 m-0 pt-[15%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full slide-bottom backdrop ${dialog}`}
      onClick={onDialogClick}
    >
      <div
        class={`py-8 px-6 h-full bg-white ${corners} flex flex-col justify-between divide-y`}
      >
        <>
          <div class="pb-4 flex justify-between">
            <h2 class="text-lg font-medium text-gray-900">{title}</h2>
            <button class="py-1" onClick={onClose}>
              <Icon id="XMark" class="w-6 h-6 fill-current text-gray-600" />
            </button>
          </div>
          {children}
        </>
      </div>
    </dialog>
  );
});

export default Modal;
