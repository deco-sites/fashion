import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "loading">
  & {
    loading?: boolean;
    wide?: boolean;
    square?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, Props>(({
  type = "button",
  class: _class = "",
  loading,
  disabled,
  square,
  wide,
  ...props
}, ref) => (
  <button
    {...props}
    className={`btn 
      ${wide ? "w-full" : ""}
      ${square ? "rounded-none" : ""}
    no-animation ${_class} ${loading ? "loading" : ""}`}
    disabled={disabled || loading}
    type={type}
    ref={ref}
  />
));

export default Button;
