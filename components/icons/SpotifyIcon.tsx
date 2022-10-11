import type { h } from "preact";

export default function SpotifyIcon(
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
      <title>Spotify</title>
      <path
        d="M8 .9C4.1.9.9 4.1.9 8s3.2 7.1 7.1 7.1 7.1-3.2 7.1-7.1C15.1 4.1 11.9.9 8 .9zm3.2 10.2c-.1.2-.4.3-.6.1-1.9-1-4.1-1.3-6.2-.7-.2.1-.5-.1-.5-.3-.1-.2.1-.4.3-.5 2.3-.7 4.8-.4 6.9.8.2.1.3.4.1.6zm.9-1.9c-.2.3-.5.3-.8.2-2.1-1.2-4.7-1.5-7-.8-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 2.7-.8 5.5-.4 7.9.9.3.2.4.5.2.8zm.1-2C9.6 5.9 6.7 5.7 4 6.4c-.4.1-.8-.1-.9-.5-.1-.3.1-.7.5-.8 3.1-.8 6.4-.5 9.3.9.3.2.4.6.2.9-.2.4-.6.5-.9.3z"
        fill="#353535"
      >
      </path>
    </svg>
  );
}
