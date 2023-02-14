import type { JSX } from "preact";

type IconWeight = "thin" | "light" | "regular" | "bold";

type AvailableIcons =
  | "Circle"
  | "ChevronLeft"
  | "ChevronRight"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "Search"
  | "XMark"
  | "Amex"
  | "Diners"
  | "Elo"
  | "Mastercard"
  | "Visa"
  | "Pix"
  | "Logo"
  | "Facebook"
  | "Instagram"
  | "Tiktok";

const mapWeightToValue: Record<IconWeight, number> = {
  bold: 24,
  regular: 16,
  light: 12,
  thin: 8,
};

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  /**
   * SVG weight.
   *
   * @default 'regular'
   */
  weight?: IconWeight;
}

function Icon({ id, weight = "regular", ...otherProps }: Props) {
  return (
    <svg {...otherProps} strokeWidth={mapWeightToValue[weight]}>
      <use href={`/sprites.svg#${id}`} />
    </svg>
  );
}

export default Icon;
