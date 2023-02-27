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
  default:
    "py-2 px-3 text-body-strong font-body-strong text-interactive-default bg-interactive-default disabled:dark-interactive-default border-transparent",
  quiet:
    "py-2 px-3 text-body-regular font-body-regular text-default border-default",
  icon: "text-default border-transparent disabled:opacity-50 bg-transparent",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "default",
  as = "button",
  class: _class = "",
  children,
  loading,
  ...props
}, ref) => {
  const Component = as as ComponentType;
  const styles = variants[variant];

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-colors duration-150 ease-in rounded border-1 focus:outline-none ${styles} ${_class}`}
      {...props}
      ref={ref}
    >
      {loading === true ? <Spinner size={20} /> : children}
    </Component>
  );
});

export default Button;
