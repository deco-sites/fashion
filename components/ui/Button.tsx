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
    "h-[36px] px-3 rounded bg-primary font-button text-button text-primary-content border-transparent hover:opacity-75 active:opacity-90 disabled:opacity-75 focus:outline-none ",
  outline:
    "h-[36px] px-3 rounded bg-base-100 font-button text-button text-primary border-primary hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none",
  ghost:
    "h-[36px] px-3 rounded bg-base-100 font-button text-button text-primary border-transparent hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none",
  icon:
    "h-[36px] px-2 rounded bg-transparent font-button text-button text-primary border-transparent hover:bg-primary-content active:opacity-90 disabled:opacity-75 focus:outline-none rounded-full",
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
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-all duration-150 ease-in border-1 ${styles} ${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
