import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import {
  Slider,
  SliderDots,
} from "deco-sites/fashion/components/ui/Slider.tsx";
import SliderControllerJS from "deco-sites/fashion/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div class="relative h-[600px] min-w-[100vw] overflow-y-hidden">
      <a href={action?.href ?? "#"} aria-label={action?.label}>
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={360}
            height={600}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={1440}
            height={600}
          />
          <img
            class="object-cover w-full sm:h-full"
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
          />
        </Picture>
        {action && (
          <div class="absolute top-0 bottom-0 m-auto left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[235px] flex flex-col gap-4 p-4 rounded glass">
            <span class="text-6xl font-medium text-base-100">
              {action.title}
            </span>
            <span class="font-medium text-xl text-base-100">
              {action.subTitle}
            </span>
            <Button class="glass">{action.label}</Button>
          </div>
        )}
      </a>
    </div>
  );
}

function ProgressiveDots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      >
      </style>
      <SliderDots class="col-span-full gap-4 z-10 row-start-4">
        {images?.map((_) => (
          <div class="py-5">
            <div
              class="w-16 sm:w-20 h-0.5 rounded group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
              style={{ animationDuration: `${interval}s` }}
            />
          </div>
        ))}
      </SliderDots>
    </>
  );
}

function Controls() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Button
          class="btn-circle glass"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Button
          class="btn-circle glass"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-base-100"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]"
    >
      <Slider class="col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      <Controls />

      <ProgressiveDots images={images} interval={interval} />

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
