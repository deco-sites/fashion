import type { h } from "preact";

export default function ChatIcon(
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
      <title>E-mail</title>

      <path
        d="M16,11.5v-10c0,0,0-0.1,0-0.1V1h-0.5c0,0,0,0-0.1,0h-15c0,0,0,0-0.1,0H0v0.5c0,0,0,0,0,0.1v10c0,0,0,0,0,0s0,0,0,0V12h15.5h0H16V11.5C16,11.5,16,11.5,16,11.5z M8,8.1L1.7,2h12.6L8,8.1z M4.8,6.4L1,10.3V2.7L4.8,6.4z M5.5,7.1L8,9.5l2.5-2.4l3.8,3.9H1.7L5.5,7.1z M11.2,6.4L15,2.7v7.6L11.2,6.4z"
      >
      </path>
    </svg>
  );
}
