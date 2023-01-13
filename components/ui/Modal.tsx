import type { Ref, RefObject } from "preact";
import { useMemo } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { forwardRef, PropsWithChildren } from "preact/compat";
import { apply, tw } from "twind";
import { animation, css } from "twind/css";

// Lazy load a <dialog> polyfill.
// @ts-expect-error HTMLDialogElement is not just a type!
if (IS_BROWSER && window.HTMLDialogElement === "undefined") {
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
  "data-modal"?: string;
}

// TODO: Right now, modal is a right-sidebar only
const Modal = forwardRef(
  (
    { children, title, mode = "sidebar-right", "data-modal": dataModal }:
      PropsWithChildren<Props>,
    ref: Ref<HTMLDialogElement>,
  ) => {
    const onDialogClick = (e: MouseEvent) => {
      const isRefObject = (
        ref: Ref<HTMLDialogElement>,
      ): ref is RefObject<HTMLDialogElement> => Boolean("current" in ref);

      if (!isRefObject(ref)) {
        return;
      }

      if ((e.target as HTMLDialogElement).tagName === "DIALOG" && ref.current) {
        ref.current!.close();
      }
    };

    const { dialog: dialogClasses, corners } = useMemo(() => {
      switch (mode) {
        case "sidebar-right":
          return {
            dialog:
              tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:ml-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideRight} ${backdrop}`,
            corners: apply`rounded(tl-2xl tr-2xl sm:(tr-none bl-2xl))`,
          };
        default:
        case "sidebar-left": {
          return {
            dialog:
              tw`bg-transparent p-0 m-0 pt-[50%] sm:pt-0 sm:mr-auto max-w-full sm:max-w-lg w-full max-h-full h-full ${slideBottom} sm:${slideLeft} ${backdrop}`,
            corners: apply`rounded(tr-2xl tl-2xl sm:(tl-none br-2xl))`,
          };
        }
      }
    }, [mode]);

    const dialogContentClasses =
      tw`py-8 px-6 h-full bg-white ${corners} flex flex-col justify-between`;

    return (
      <dialog
        ref={ref}
        class={dialogClasses}
        onClick={onDialogClick}
        data-modal={dataModal}
      >
        <div class={dialogContentClasses}>
          <>
            <div class={tw`flex justify-between`}>
              <h2 class={tw`text-lg font-medium text-gray-900`}>{title}</h2>
              {/* create a hook to close this modal */}
              <button
                class={tw`py-1`}
                data-close-modal
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
            {children}
          </>
        </div>
      </dialog>
    );
  },
);

export default Modal;
