import Button from "$store/components/ui/Button.tsx";
import { useEffect, useRef } from "preact/hooks";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
};

const dialogStyles = {
  "sidebar-right": "animate-slide-left",
  "sidebar-left": "animate-slide-right",
  center: "animate-fade-in",
};

const sectionStyles = {
  "sidebar-right": "justify-end",
  "sidebar-left": "justify-start",
  center: "justify-center items-center",
};

const containerStyles = {
  "sidebar-right": "h-full w-full sm:max-w-lg",
  "sidebar-left": "h-full w-full sm:max-w-lg",
  center: "",
};

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);
  const { cart } = useCart();
  const itemsQuantity = cart?.value?.items?.length;

  useEffect(() => {
    if (open === false) {
      document.getElementsByTagName("body").item(0)?.classList.remove(
        "no-scroll",
      );
      ref.current?.open === true && ref.current.close();
    } else if (open === true) {
      document.getElementsByTagName("body").item(0)?.classList.add(
        "no-scroll",
      );
      ref.current?.open === false && ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full backdrop-opacity-50 ${
        dialogStyles[mode]
      } ${props.class ?? ""}`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "SECTION" && onClose?.()}
      // @ts-expect-error - This is a bug in types.
      onClose={onClose}
    >
      <section
        class={`w-full h-full flex bg-transparent ${sectionStyles[mode]}`}
      >
        <div
          class={`bg-base-100 flex flex-col max-h-full ${
            containerStyles[mode]
          }`}
        >
          <header class="flex px-4 py-6 justify-between items-center border-b border-base-200">
            <div class="flex gap-5 items-center">
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0002 5.99984H16.3335C16.3335 3.05317 13.9468 0.666504 11.0002 0.666504C8.0535 0.666504 5.66683 3.05317 5.66683 5.99984H3.00016C1.5335 5.99984 0.333496 7.19984 0.333496 8.66651V24.6665C0.333496 26.1332 1.5335 27.3332 3.00016 27.3332H19.0002C20.4668 27.3332 21.6668 26.1332 21.6668 24.6665V8.66651C21.6668 7.19984 20.4668 5.99984 19.0002 5.99984ZM11.0002 3.33317C12.4668 3.33317 13.6668 4.53317 13.6668 5.99984H8.3335C8.3335 4.53317 9.5335 3.33317 11.0002 3.33317ZM19.0002 24.6665H3.00016V8.66651H5.66683V11.3332C5.66683 12.0665 6.26683 12.6665 7.00016 12.6665C7.7335 12.6665 8.3335 12.0665 8.3335 11.3332V8.66651H13.6668V11.3332C13.6668 12.0665 14.2668 12.6665 15.0002 12.6665C15.7335 12.6665 16.3335 12.0665 16.3335 11.3332V8.66651H19.0002V24.6665Z"
                  fill="#292929"
                />
              </svg>
              <h1>
                <span class="font-medium text-2xl">{title}</span>
              </h1>
              <div
                class="w-8 h-8 flex justify-center items-center rounded-full"
                style={{ background: "#F0F5FF" }}
              >
                <span style={{ color: "#306ED9" }}>{itemsQuantity}</span>
              </div>
            </div>
            <Button class="btn btn-ghost" onClick={onClose}>
              <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </Button>
          </header>
          <div class="overflow-y-auto flex-grow flex flex-col">
            {loading === "lazy" ? lazy.value && children : children}
          </div>
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
