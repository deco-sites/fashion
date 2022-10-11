import type { h } from "preact";

export default function VisaIcon(
  { class: className, width = 50, height = 30 }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  return (
    <svg
      width={width}
      height={height}
      class={className}
      fill="#000000"
      viewBox="0 0 50 30"
    >
      <g id="Group_571" transform="translate(-743 291)">
        <path
          id="Rectangle_167"
          d="M747-291h47c2.2 0 4 1.8 4 4v27c0 2.2-1.8 4-4 4h-47c-2.2 0-4-1.8-4-4v-27c0-2.2 1.8-4 4-4z"
          fill="#fff"
        >
        </path>
        <g id="Group_544" transform="translate(754.577 -278.396)">
          <g id="Group_528" transform="translate(0 -.1)">
            <path
              id="Path_489"
              d="M8.8.1L6.4 6.8l-.3-1.4c-.6-1.5-1.8-2.7-3.3-3.3l2.1 7.8h2.6l4-9.8H8.8"
            >
            </path>
            <path id="Path_490" d="M11 9.9L12.5.1H15l-1.5 9.8H11"></path>
            <path
              id="Path_491"
              d="M22.7.4C22 .1 21.2 0 20.4 0c-2.5 0-4.3 1.4-4.3 3.3 0 1.4 1.3 2.2 2.2 2.6 1 .5 1.3.8 1.3 1.2 0 .6-.8.9-1.5.9-.8 0-1.6-.2-2.4-.5l-.4-.2-.3 2.1c.9.4 1.9.6 2.8.5 2.6 0 4.4-1.4 4.5-3.4 0-1.1-.6-2-2.1-2.6-.9-.5-1.5-.7-1.5-1.2s.5-.7 1.5-.7c.7 0 1.3.1 1.9.4l.3.1.3-2.1"
            >
            </path>
            <path
              id="Path_492"
              d="M29.2.1h-1.9c-.6-.1-1.2.3-1.4.8l-3.7 9h2.6s.5-1.2.5-1.5h3.3c.1.4.3 1.5.3 1.5h2.4L29.2.1m-3.1 6.3c.2-.5 1-2.7 1-2.7.1-.3.2-.6.4-.9l.2.8s.5 2.4.5 2.8h-2.1z"
            >
            </path>
            <path
              id="Path_493"
              d="M4.1.1H0v.2c2.8.5 5.1 2.5 6.2 5.1L5.3.8C5 .4 4.6.1 4.1.1z"
            >
            </path>
          </g>
        </g>
      </g>
    </svg>
  );
}
