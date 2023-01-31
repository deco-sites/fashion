import type { ComponentChildren, Ref, RefObject } from "preact";
import { useMemo } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { forwardRef } from "preact/compat";
import { apply, tw } from "twind";
import { animation, css } from "twind/css";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

const slideRight = animation("0.4s ease normal", {
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const slideLeft = animation("0.4s ease normal", {
  from: { transform: "translateX(-100%)" },
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

interface Props {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  children?: ComponentChildren;
}

const isRefObject = (
  ref: Ref<HTMLDialogElement>,
): ref is RefObject<HTMLDialogElement> => Boolean("current" in ref);

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

  const { dialog: dialogClasses, corners } = useMemo(() => {
    switch (mode) {
      case "sidebar-right":
        return {
          dialog:
            tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideRight} ${backdrop}`,
          corners: tw(apply`rounded(tl-2xl tr-2xl sm:(tr-none bl-2xl))`),
        };
      default:
      case "sidebar-left": {
        return {
          dialog:
            tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:mr-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideLeft} ${backdrop}`,
          corners: tw(apply`rounded(tr-2xl tl-2xl sm:(tl-none br-2xl))`),
        };
      }
    }
  }, [mode]);

  return (
    <dialog ref={ref} class={dialogClasses} onClick={onDialogClick}>
      <div
        class={`py-8 px-6 h-full bg-white ${corners} flex flex-col justify-between`}
      >
        <>
          <div class="flex justify-between">
            <h2 class="text-lg font-medium text-gray-900">{title}</h2>
            <button class="py-1" onClick={onClose}>
              <Icon name="XMark" class="w-6 h-6 fill-current text-gray-600" />
            </button>
          </div>
          {children}
        </>
      </div>
    </dialog>
  );
});

export default Modal;
