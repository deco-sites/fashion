import type { h } from "preact";

export default function CloseIcon(
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
        x1="200"
        y1="56"
        x2="56"
        y2="200"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
      <line
        x1="200"
        y1="200"
        x2="56"
        y2="56"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
    </svg>
  );
}
