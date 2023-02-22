import { ComponentChildren } from "preact";

interface Props {
  class?: string;
  children: ComponentChildren;
}

function Container({ children, class: _class = "" }: Props) {
  return <div class={`max-w-[1280px] mx-auto ${_class}`}>{children}</div>;
}

export default Container;
