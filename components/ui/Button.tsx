import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    variant?: keyof typeof variants;
    loading?: boolean;
  };

const variants = {
  primary:
    "py-2 px-3 rounded bg-interactive text-default-inverse border-transparent active:bg-interactive-inverse active:text-default disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-interactive ",
  secondary:
    "py-2 px-3 rounded bg-interactive-inverse text-default border-default hover:bg-hover active:bg-interactive active:text-interactive-inverse disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-interactive ",
  tertiary:
    "py-2 px-3 rounded bg-interactive-inverse text-default border-transparent hover:bg-hover active:bg-interactive active:text-interactive-inverse disabled:border-transparent disabled:text-subdued disabled:bg-interactive-inverse focus:outline-interactive ",
  icon:
    "p-2 bg-transparent rounded-full text-default border-transparent active:bg-interactive active:text-default-inverse disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  as = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    { disabled?: boolean; className: string }
  >;
  const styles = variants[variant];

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in border ${styles} ${_class}`}
      disabled={disabled || loading}
      ref={ref}
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
