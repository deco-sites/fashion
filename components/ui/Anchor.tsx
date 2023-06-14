import { forwardRef } from "preact/compat";
import type { JSX } from "preact";

export type Props = Omit<JSX.IntrinsicElements["a"], "loading"> & {
  loading?: boolean;
  href?: string;
  title?: string;
  label?: string;
  target: string;
};

const Anchor = forwardRef<HTMLAnchorElement, Props>(
  (
    { type = "a", class: _class = "", loading, disabled, children, ...props },
    ref
  ) => (
    <a
      {...props}
      className={`hover:underline text-sm flex gap-4${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
    >
      {loading ? <span class="loading loading-spinner" /> : children}
    </a>
  )
);

export default Anchor;
