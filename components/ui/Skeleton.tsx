import type { HTMLAttributes } from "preact/compat";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Sets Skeleton's style variation
   */
  variant: "rect" | "circle" | "text";
  /**
   * Sets the height of the Skeleton style
   */
  height: number;
  /**
   * Sets the width of the Skeleton style
   */
  width: number;
}

export default function Skeleton(props: SkeletonProps) {
  const style: React.CSSProperties = {};
  if (props.variant !== "text") {
    style.width = props.width;
    style.height = props.height;
  }

  const variants = {
    circle: `rounded-[100%]`,
    rect: `shadow rounded-md p-4 max-w-sm w-full mx-auto`,
    text: `rounded-[50%] shadow rounded-md p-4 max-w-sm w-full mx-auto `,
  };

  const variantClass = props.variant === "text"
    ? variants.text
    : variants[props.variant];

  return (
    <div
      className={`block animate-pulse space-x-4 bg-[rgba(0,0,0,0.11)] animate-[Skeleton-keyframes-pulse_1.5s_ease-in-out_0.5s_infinite] Skeleton-${props.variant} ${variantClass}`}
      style={style}
    />
  );
}
