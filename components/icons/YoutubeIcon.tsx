import type { h } from "preact";

export default function YoutubeIcon(
  { class: className, width = 25, height = 16 }: h.JSX.SVGAttributes<
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
      <title>YouTube</title>
      <path
        d="M19.352 2.259c-.2-.8-.9-1.5-1.7-1.7-1.5-.4-7.6-.4-7.6-.4s-6.1 0-7.6.4c-.8.2-1.5.9-1.7 1.7-.5 3.1-.5 6.3 0 9.4.2.8.9 1.5 1.7 1.7 1.5.4 7.6.4 7.6.4s6.1 0 7.6-.4c.8-.2 1.5-.9 1.7-1.7.6-3.1.6-6.3 0-9.4zm-11.3 7.7v-5.9l5.1 2.9-5.1 3z"
        fill="#353535"
      >
      </path>
    </svg>
  );
}
