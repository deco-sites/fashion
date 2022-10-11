import type { h } from "preact";

export default function TwitterIcon(
  { class: className, width = 16, height = 16 }: h.JSX.SVGAttributes<
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
      viewBox="0 0 16 16"
    >
      <title>Twitter</title>
      <path
        d="M.2 13c.1 0 .1.1.2.1 2.1 1.2 4.5 1.6 6.9 1 4-1 6.9-4.6 6.9-8.8 0-.4.1-.7.4-1 .4-.3.7-.7 1-1.1 0-.1.1-.1.1-.2l-1.6.4v-.1c.6-.4 1.1-1 1.3-1.7-.1.3-.2.4-.3.4-.5.2-1 .4-1.4.6-.2.1-.4 0-.5-.1-.9-.9-2.2-1.1-3.3-.7-1.1.4-1.9 1.3-2.1 2.5v1.3c-2.6-.1-5-1.4-6.6-3.4-.8 1.5-.4 3.3.9 4.3v.1L.7 6.2c0 1.5 1 2.8 2.5 3.2H1.9c.4 1.3 1.6 2.2 3 2.3-1.4.9-3 1.4-4.7 1.3z"
        fill="#353535"
      >
      </path>
    </svg>
  );
}
