import type { h } from "preact";

export default function FacebookIcon(
  { class: className, width = 16, height = 16 }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  return (
    <svg
      width={width}
      height={height}
      class={className}
      fill="#000000"
      viewBox="0 0 16 16"
    >
      <title>Facebook</title>
      <path
        d="M11.4 8.9l.4-2.6H9.3V4.5c-.1-.7.5-1.4 1.2-1.4H11.9V.9c-.7-.1-1.4-.2-2-.2-1.8-.1-3.3 1.2-3.4 3v2.6H4.1v2.6h2.3v6.4c.5.1.9.1 1.4.1.5 0 1 0 1.4-.1V8.9h2.2z"
        fill="#353535"
      >
      </path>ƒ
    </svg>
  );
}
