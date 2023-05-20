import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  /** @description when user clicks on the image, go to this link */
  link?: string;
}

export interface Props {
  /** @description Section text title */
  title?: string;
  /** @description Section text subtitle */
  subTitle?: string;
  images?: Banner[];
  /**
   * @default 'normal'
   * @description Images exhibition style
   */
  variant?: "normal" | "fancy-grid";
}

const MOBILE_ROW_START = [
  "row-start-1",
  "row-start-1",
  "row-start-2",
  "row-start-3",
];

const MOBILE_ROW_END = [
  "row-end-3",
  "row-end-2",
  "row-end-4",
  "row-end-4",
];

const MOBILE_COLUMN_START = [
  "col-start-1",
  "col-start-2",
  "col-start-2",
  "col-start-1",
];

const MOBILE_COLUMN_END = [
  "col-end-2",
  "col-end-3",
  "col-end-3",
  "col-end-2",
];

function ImageGallery(
  {
    title = "Image gallery",
    subTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images = [],
    variant = "normal",
  }: Props,
) {
  return (
    <div class="container px-4 max-w-[1360px]">
      <div class="flex flex-col text-center text-base-content text-4xl md:text-6xl gap-6">
        <h2>{title}</h2>
        <span class="block text-base-content text-2xl">{subTitle}</span>
      </div>

      <div
        class={`mt-11 md:mt-20 ${
          variant === "normal"
            ? "grid grid-cols-2 gap-4 md:flex"
            : "grid grid-cols-2 grid-rows-3 gap-4 md:grid-rows-[repeat(3,minmax(0,320px))]"
        }`}
      >
        {images.map(({ link, mobile, desktop, alt }, index) => (
          <a
            href={link}
            class={`block overflow-hidden ${
              variant === "fancy-grid" &&
              `${MOBILE_ROW_START[index]} ${MOBILE_ROW_END[index]} ${
                MOBILE_COLUMN_START[index]
              } ${MOBILE_COLUMN_END[index]}`
            }`}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={mobile}
                width={156}
                height={156}
              />
              <Source
                media="(min-width: 768px)"
                src={desktop ? desktop : mobile}
                width={316}
                height={316}
              />
              <img
                class={`w-full h-full object-cover`}
                src={mobile}
                alt={alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
