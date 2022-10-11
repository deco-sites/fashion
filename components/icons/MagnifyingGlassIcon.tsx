import type { h } from "preact";

export default function MagnifyingGlassIcon(
  { class: className }: h.JSX.SVGAttributes<SVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.2 16.2"
      width={15}
      height={15}
      class={className}
    >
      <path d="M16 14.9l-3.5-3.5c1-1.2 1.6-2.7 1.6-4.4 0-3.9-3.1-7-7-7C3.1 0 0 3.1 0 7c0 3.6 2.8 6.6 6.3 6.9h1.4c1.4-.1 2.6-.7 3.7-1.5l3.5 3.5c.1.1.3.2.5.2s.4-.1.5-.2c.4-.2.4-.7.1-1zm-9-2.4C4 12.5 1.5 10 1.5 7S4 1.5 7 1.5 12.5 4 12.5 7 10 12.5 7 12.5z">
      </path>
    </svg>
  );
}
