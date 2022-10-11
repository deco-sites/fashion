import type { h } from "preact";

export default function CartIcon(
  { class: className, width = 20, height = 20 }: h.JSX.SVGAttributes<
    SVGElement
  >,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.1 15.9"
      width={width}
      height={height}
    >
      <path d="M17.5 3.2H4.8l-.4-1.8C4.2.8 3.6.3 2.9.3H.6C.3.3 0 .6 0 .9c0 .4.3.6.6.6h2.3c.1 0 .2.1.2.2L4.9 9c.3 1.1 1.2 1.8 2.3 1.8h7.3c1.1 0 2-.8 2.3-1.8L18 4c.1-.3-.1-.7-.5-.8.1 0 0 0 0 0zm-1.9 5.5c-.1.5-.5.8-1 .8H7.2c-.5 0-.9-.3-1-.8l-1-4.2h11.5l-1.1 4.2zm-8.9 6.9c.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7S5 13 5 13.9c0 .9.8 1.7 1.7 1.7zm7.8 0c.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7s-1.7.8-1.7 1.7c0 .9.8 1.7 1.7 1.7z">
      </path>
    </svg>
  );
}
