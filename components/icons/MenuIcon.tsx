import type { h } from "preact";

export default function MenuIcon(
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
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
    </svg>
  );
}
