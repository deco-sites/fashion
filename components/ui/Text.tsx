import { JSX } from "preact";
import { forwardRef } from "preact/compat";
import type { Colors } from "deco-sites/fashion/sections/DesignSystem.tsx";

type Props = Omit<JSX.IntrinsicElements["span"], "aria-level"> & {
  tone?: keyof Colors;
  variant?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "menu"
    | "button"
    | "body"
    | "caption"
    | "list-price";
  "aria-level"?: number;
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "base-content", variant = "body", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`font-${variant} text-${variant} text-${tone} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
