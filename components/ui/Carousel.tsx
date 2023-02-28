import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import Slider from "./Slider.tsx";

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

function Carousel({ images, preload }: Props) {
  const mobileDimension: Dimension = {
    width: 360,
    height: 331,
  };

  const desktopDimension: Dimension = {
    width: 1366,
    height: 517,
  };

  return (
    <Slider
      // this padding top (pt) is the aspect-ratio (height/width) value from the image below for each viewport
      class={`w-full pt-[${aspectRatio(mobileDimension)}%] sm:pt-[${
        aspectRatio(desktopDimension)
      }%]`}
      arrows
      dots
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
    </Slider>
  );
}

export default Carousel;
