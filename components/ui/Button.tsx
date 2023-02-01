import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    size?: keyof typeof sizes;
    variant?: keyof typeof variants;
    fit?: keyof typeof fits;
    loading?: boolean;
  };

const variants = {
  primary: "text-white bg-primary-red rounded",
  secondary: "text-deco-black bg-custom-gray rounded",
  tertiary: "text-deco-black bg-transparent",
  danger: "text-white bg-primary-red-dark rounded",
};

const sizes = {
  small: "font-medium text-sm px-3 py-2 h-9",
  large: "font-medium text-lg px-4 py-3 h-12",
};

const fits = {
  container: "w-full",
  content: "",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  size = "small",
  fit = "content",
  as = "button",
  class: _class,
  children,
  loading,
  ...props
}, ref) => {
  const Component = as as ComponentType;

  return (
    <Component
      className={`inline-flex items-center justify-center cursor-pointer ${
        sizes[size]
      } ${variants[variant]} ${
        fits[fit]
      } flex items-center justify-center cursor-pointer transition-colors duration-150 ease-in hover:bg-opacity-80 disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-not-allowed focus:outline-none`}
      {...props}
      ref={ref}
    >
      {loading === true ? <Spinner /> : children}
    </Component>
  );
});

export default Button;
