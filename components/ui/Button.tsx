import type { h } from "preact";
import { PropsWithChildren } from "preact/compat";

interface Props extends h.JSX.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({
  isLoading,
  class: classes,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      class={`${
        isLoading ? " bg-gray-500! cursor-not-allowed " : "cursor-pointer"
      } inline-flex justify-center items-center text-sm font-light leading-6 text-white transition duration-150 ease-in-out rounded-md shadow 
       ${classes}`}
      {...props}
    >
      {isLoading ? (
        <svg
          class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        props.children
      )}
    </button>
  );
}
