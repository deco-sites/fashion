import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "Circle"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "XMark"
  | "Plus"
  | "Minus"
  | "MapPin"
  | "Phone"
  | "Elo"
  | "Mastercard"
  | "Visa"
  | "Pix"
  | "Logo"
  | "Facebook"
  | "Instagram"
  | "Tiktok"
  | "Truck"
  | "Discount"
  | "Return"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "Trash"
  | "FilterList";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
}

function Icon({ id, strokeWidth = 16, ...otherProps }: Props) {
  return (
    <svg {...otherProps} strokeWidth={strokeWidth}>
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
