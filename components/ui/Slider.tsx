import { Children } from "preact/compat";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

function Slider({ children }: Props) {
  return (
    <ul class="flex flex-nowrap justify-between overflow-x-auto max-w-full w-full scroll-x-mandatory scroll-smooth gap-10">
      {Children.map(
        children,
        (child) => <li class="scroll-snap-center">{child}</li>,
      )}
    </ul>
  );
}

export default Slider;
