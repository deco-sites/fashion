import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"];

function Dots({ children, class: _class }: Props) {
  return (
    <ol class={`flex items-center justify-center ${_class}`}>
      {Children.map(children, (child, index) => (
        <li>
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

export default Dots;
