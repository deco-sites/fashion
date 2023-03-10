import { ComponentChildren } from "preact";
import { Children } from "preact/compat";

interface Props {
  children?: ComponentChildren;
  class?: string;
}

function Slider({ children, class: _class = "" }: Props) {
  return (
    <ul
      class={`flex flex-nowrap justify-between overflow-x-auto max-w-full w-full snap-x snap-mandatory scroll-smooth scrollbar-none ${_class}`}
    >
      {Children.map(
        children,
        (child) => <li class="snap-center">{child}</li>,
      )}
    </ul>
  );
}

export default Slider;
