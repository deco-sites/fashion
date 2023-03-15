import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
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

const defaultAction = {
  href: "/feminino",
  title: "Nova coleçāo",
  subTitle: "Blooming",
  label: "Conferir agora",
};

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action = defaultAction,
  } = image;

  return (
    <div class="relative">
      <Picture class="w-screen block" preload={lcp}>
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
          width={1366}
          height={517}
        />
        <img
          class="object-cover w-full"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
      {action && (
        <div
          class="absolute top-0 bottom-0 m-auto left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[235px] flex flex-col gap-4 bg-hover-inverse p-4 rounded"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <Text variant="heading-1" tone="default-inverse">
            {action.title}
          </Text>
          <Text variant="heading-3" tone="default-inverse">
            {action.subTitle}
          </Text>
          <a href={action.href} aria-label={action.label}>
            <Button variant="secondary">{action.label}</Button>
          </a>
        </div>
      )}
    </div>
  );
}

function BannerCarousel({ images, preload, interval = 8 }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
    >
      <Slider style={{ gridRow: "1/-1", gridColumn: "1/-1" }}>
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      <>
        <div
          class="flex items-center justify-center z-10"
          style={{
            gridColumn: 1,
            gridRow: 2,
          }}
        >
          <Button
            class="h-12 w-12"
            variant="icon"
            data-slide="prev"
            aria-label="Previous item"
          >
            <Icon
              class="text-default-inverse"
              size={20}
              id="ChevronLeft"
              strokeWidth={3}
            />
          </Button>
        </div>
        <div
          class="flex items-center justify-center z-10"
          style={{
            gridColumn: 3,
            gridRow: 2,
          }}
        >
          <Button
            class="h-12 w-12"
            variant="icon"
            data-slide="next"
            aria-label="Next item"
          >
            <Icon
              class="text-default-inverse"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
          </Button>
        </div>
      </>

      <ol
        class="flex items-center justify-center col-span-full gap-2 z-10"
        style={{ gridRow: 4 }}
      >
        {images?.map((_, index) => (
          <li>
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="w-16 sm:w-20 h-1 rounded bg-hover-inverse disabled:bg-interactive-inverse"
            />
          </li>
        ))}
      </ol>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
