import { Children } from "preact/compat";
import type { JSX } from "preact";

type SliderProps = JSX.IntrinsicElements["ul"] & {
  snap?: string;
};

export function Slider({
  children,
  class: _class = "scrollbar-none carousel-center",
  ...props
}: SliderProps) {
  return (
    <ul
      class={`carousel ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li class="carousel-item">
          {child}
        </li>
      ))}
    </ul>
  );
}

type SliderDotsProps = JSX.IntrinsicElements["ol"];

export function SliderDots({ children, class: _class }: SliderDotsProps) {
  return (
    <ol
      class={`flex items-center justify-center overflow-auto overscroll-contain snap-x snap-mandatory ${_class}`}
    >
      {Children.map(children, (child, index) => (
        <li class="snap-center">
          <button
            data-dot={index}
            aria-label={`go to slider item ${index}`}
            class="focus:outline-none group"
          >
            {child}
          </button>
        </li>
      ))}
    </ol>
  );
}
