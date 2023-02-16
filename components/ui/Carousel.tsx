import { useId } from "preact/hooks";
import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/islands/Slider.tsx";

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

export interface Props {
  images?: Image[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

function Carousel({ images = [], preload = false }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="relative w-full overflow-hidden"
    >
      <ul
        data-slider-content
        class="flex flex-nowrap transition"
        style={{ width: `calc(${images.length}*100vw)` }}
      >
        {images.map(({ desktop, mobile, href, alt }, index) => {
          const lcp = index === 0 && preload;

          return (
            <li>
              <a href={href}>
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
              </a>
            </li>
          );
        })}
      </ul>

      {images.length > 0 && (
        <>
          {/* Next/Prev button Controls */}
          <button
            aria-label="previous banner image"
            class="absolute top-1/2 left-0 ml-2 text-white outline-none p-2"
            data-slider-prev
          >
            <Icon class="w-6 h-6" id="ChevronLeft" />
          </button>
          <button
            aria-label="next banner image"
            class="absolute top-1/2 right-0 mr-2 text-white outline-none p-2"
            data-slider-next
          >
            <Icon class="w-6 h-6" id="ChevronRight" />
          </button>

          {/* Dots buttons, usually bellow main image */}
          <div class="absolute w-full top-[80%] flex justify-center flex-nowrap">
            {images.map((_, id) => (
              <button
                aria-label={`Display ${id} banner`}
                class="p-2 rounded-full text-white disabled:text-gray-600 outline-none"
                data-dot
              >
                <Icon class="w-6 h-6" id="Circle" />
              </button>
            ))}
          </div>

          {/* Effects for transitioning between images */}
          <Slider items={images.length} id={id} delay={5_000} />
        </>
      )}
    </div>
  );
}

export default Carousel;
