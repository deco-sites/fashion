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
    "h-9 px-3 rounded bg-primary text-primary-content border-transparent hover:opacity-75 active:opacity-90 disabled:opacity-75 focus:outline-none ",
  outline:
    "h-9 px-3 rounded bg-base-100 text-primary border-primary hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none",
  ghost:
    "h-9 px-3 rounded bg-base-100 text-primary border-transparent hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none",
  icon:
    "h-9 w-9 rounded bg-transparent text-primary border-transparent hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none rounded-full",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  as = "button",
  type = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    {
      disabled?: boolean | JSX.SignalLike<boolean | undefined>;
      className: string;
      type: string | JSX.SignalLike<string | undefined>;
    }
  >;
  const styles = variants[variant];

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-all duration-150 ease-in border font-button text-button ${styles} ${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
