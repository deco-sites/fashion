import type { h } from "preact";

export default function UserIcon(
  { class: className, width = 25, height = 25 }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      class={className}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="96"
        r="64"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="16"
      >
      </circle>
      <path
        d="M31,216a112,112,0,0,1,194,0"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </path>
    </svg>
  );
}
