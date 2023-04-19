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

const VARIANT_STYLES = {
  "heading-1": "font-heading-1 text-heading-1",
  "heading-2": "font-heading-2 text-heading-2",
  "heading-3": "font-heading-3 text-heading-3",
  "menu": "font-menu text-menu",
  "button": "font-button text-button",
  "body": "font-body text-body",
  "caption": "font-caption text-caption",
  "list-price": "font-list-price text-list-price",
};

const TONE_STYLES = {
  "primary": "text-primary",
  "primary-focus": "text-primary-focus",
  "primary-content": "text-primary-content",
  "secondary": "text-secondary",
  "secondary-focus": "text-secondary-focus",
  "secondary-content": "text-secondary-content",
  "accent": "text-accent",
  "accent-focus": "text-accent-focus",
  "accent-content": "text-accent-content",
  "neutral": "text-neutral",
  "neutral-focus": "text-neutral-focus",
  "neutral-content": "text-neutral-content",
  "base-100": "text-base-100",
  "base-200": "text-base-200",
  "base-300": "text-base-300",
  "base-content": "text-base-content",
  "success": "text-success",
  "success-content": "text-success-content",
  "warning": "text-warning",
  "warning-content": "text-warning-content",
  "error": "text-error",
  "error-content": "text-error-content",
  "info": "text-info",
  "info-content": "text-info-content",
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "base-content", variant = "body", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`${VARIANT_STYLES[variant]} ${TONE_STYLES[tone]} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
