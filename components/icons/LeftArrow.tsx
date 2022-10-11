import type { h } from "preact";

export default function LeftArrow(
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
      <polyline
        points="160 208 80 128 160 48"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
      </polyline>
    </svg>
  );
}
