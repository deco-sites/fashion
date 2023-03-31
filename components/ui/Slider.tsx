import { Children } from "preact/compat";
import type { JSX } from "preact";

type SliderProps = JSX.IntrinsicElements["ul"] & {
  snap?: string;
};

export function Slider({
  children,
  snap = "scroll-snap-center",
  class: _class = "gap-6 scrollbar-none",
  ...props
}: SliderProps) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li
          data-slider-item={index}
          class={snap}
        >
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
        <li class="scroll-snap-center">
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
