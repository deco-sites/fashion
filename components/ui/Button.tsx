import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "loading">
  & {
    loading?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, Props>(({
  type = "button",
  class: _class = "",
  loading,
  disabled,
  ...props
}, ref) => (
  <button
    {...props}
    className={`btn no-animation ${_class} ${loading ? "loading" : ""}`}
    disabled={disabled || loading}
    type={type}
    ref={ref}
  />
));

export default Button;
