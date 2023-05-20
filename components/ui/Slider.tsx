import { Children } from "preact/compat";
import type { ComponentChildren, JSX, VNode } from "preact";
import { cloneElement } from "preact";

function Dot({ index, children }: {
  index: number;
  children: ComponentChildren;
}) {
  return (
    <button
      data-dot={index}
      aria-label={`go to slider item ${index}`}
      class="focus:outline-none group"
    >
      {children}
    </button>
  );
}

function Slider(
  { infinite, children, class: _class, ...props }:
    & JSX.IntrinsicElements["ul"]
    & {
      infinite?: boolean;
    },
) {
  return (
    <ul data-slider {...props} class={`overflow-hidden ${_class}`}>
      {infinite
        ? Children.toArray(children).map(
          (element: VNode) =>
            cloneElement(element, {
              "data-slider-clone-item": "prev",
            }),
        )
        : null}
      {children}
      {infinite
        ? Children.toArray(children).map(
          (element: VNode) =>
            cloneElement(element, {
              "data-slider-clone-item": "next",
            }),
        )
        : null}
    </ul>
  );
}

const ITEMS_PER_PAGE = [
  "",
  "w-full",
  "w-1/2",
  "w-1/3",
  "w-1/4",
  "w-1/5",
  "w-1/6",
] as const;
const SM_ITEMS_PER_PAGE = [
  "",
  "sm:w-full",
  "sm:w-1/2",
  "sm:w-1/3",
  "sm:w-1/4",
  "sm:w-1/5",
  "sm:w-1/6",
] as const;
const MD_ITEMS_PER_PAGE = [
  "",
  "md:w-full",
  "md:w-1/2",
  "md:w-1/3",
  "md:w-1/4",
  "md:w-1/5",
  "md:w-1/6",
] as const;
const LG_ITEMS_PER_PAGE = [
  "",
  "lg:w-full",
  "lg:w-1/2",
  "lg:w-1/3",
  "lg:w-1/4",
  "lg:w-1/5",
  "lg:w-1/6",
] as const;

export interface ItemsPerPage {
  /**
   * @title Small screens
   * @description Will apply for screens bigger than 640px
   */
  sm?: number;
  /**
   * @title Medium screens
   * @description Will apply for screens bigger than 768px
   */
  md?: number;
  /**
   * @title Large screens
   * @description Will apply for screens bigger than 1024px
   */
  lg?: number;
  /**
   * @description Will apply for screens smaller than 640px
   */
  default: number;
}

function Item({
  index,
  itemsPerPage = {
    sm: 0,
    md: 0,
    lg: 0,
    default: 1,
  },
  class: _class,
  ...props
}: JSX.IntrinsicElements["li"] & {
  index: number;
  itemsPerPage?: ItemsPerPage;
}) {
  const { sm = 0, md = 0, lg = 0, default: defaultValue } = itemsPerPage;

  const defaultW = ITEMS_PER_PAGE[defaultValue];
  const smW = SM_ITEMS_PER_PAGE[sm];
  const mdW = MD_ITEMS_PER_PAGE[md];
  const lgW = LG_ITEMS_PER_PAGE[lg];

  return (
    <li
      data-slider-item={index}
      {...props}
      class={`${defaultW} ${smW} ${mdW} ${lgW} ${_class}`}
    />
  );
}

function NextButton(props: JSX.IntrinsicElements["button"]) {
  return <button data-slide="next" aria-label="Next item" {...props} />;
}

function PrevButton(props: JSX.IntrinsicElements["button"]) {
  return <button data-slide="prev" aria-label="Previous item" {...props} />;
}

Slider.Dot = Dot;
Slider.Item = Item;
Slider.NextButton = NextButton;
Slider.PrevButton = PrevButton;

export default Slider;
