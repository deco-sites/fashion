import type { h } from "preact";

export default function SearchIcon(
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
        cx="116"
        cy="116"
        r="84"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </circle>
      <line
        x1="175.4"
        y1="175.4"
        x2="224"
        y2="224"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </line>
    </svg>
  );
}
