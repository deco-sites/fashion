import type { h } from "preact";

export default function ChatIcon(
  { class: className, width = 20, height = 20 }: h.JSX.SVGAttributes<
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
      viewBox="0 0 20 20"
    >
      <title>Chat</title>
      <g id="Group_589" transform="translate(-921.627 -5930.043)">
        <path
          id="Path_542"
          d="M928.7,5947.3v-3.6c-3.5,0-6.4-2.9-6.4-6.4c0-3.5,2.9-6.4,6.4-6.4l0,0h5.8c3.5,0,6.4,2.9,6.4,6.4c0,3.5-2.9,6.4-6.4,6.4H933L928.7,5947.3z M928.7,5932c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3l0,0h1.2v2.3l2.7-2.3h2c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3H928.7z"
        >
        </path>
      </g>
    </svg>
  );
}
