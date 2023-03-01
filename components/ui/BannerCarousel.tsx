import Icon from "$store/components/ui/Icon.tsx";
import Carousel from "$store/components/ui/Carousel.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
}

interface Dimension {
  width: number;
  height: number;
}

const aspectRatio = ({ width, height }: Dimension) =>
  ((height / width) * 100).toFixed(2);

export interface Props {
  images?: Image[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

function BannerCarousel({ images, preload }: Props) {
  const mobileDimension: Dimension = {
    width: 360,
    height: 331,
  };

  const desktopDimension: Dimension = {
    width: 1366,
    height: 517,
  };

  return (
    <Carousel
      // this padding top (pt) is the aspect-ratio (height/width) value from the image below for each viewport
      class={`w-full pt-[${aspectRatio(mobileDimension)}%] sm:pt-[${
        aspectRatio(desktopDimension)
      }%]`}
      animationDuration={5}
      leftArrow={
        <Icon
          width={24}
          height={24}
          id="ChevronLeft"
          strokeWidth={3}
        />
      }
      rightArrow={
        <Icon
          width={24}
          height={24}
          id="ChevronRight"
          strokeWidth={3}
        />
      }
      dot={<Icon id="Circle" width={24} height={24} strokeWidth={2} />}
    >
      {images?.map(({ mobile, desktop, alt }, index) => {
        const isFirst = index === 0;
        const lcp = isFirst && preload;

        return (
          <Picture class="w-screen block" preload={lcp}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={mobile}
              width={360}
              height={331}
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
        );
      })}
    </Carousel>
  );
}

export default BannerCarousel;
