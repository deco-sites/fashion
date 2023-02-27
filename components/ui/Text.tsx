import { JSX } from "preact";
import { forwardRef } from "preact/compat";

type Props = JSX.IntrinsicElements["span"] & {
  tone?: "default" | "subdued" | "critical" | "interactive-default";
  variant?:
    | "body-regular"
    | "body-strong"
    | "heading-strong"
    | "heading-regular"
    | "subheading-strong"
    | "display-strong"
    | "caption-strong"
    | "caption-regular"
    | "subcaption-regular";
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "body-regular", class: _class = "", ...props },
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
