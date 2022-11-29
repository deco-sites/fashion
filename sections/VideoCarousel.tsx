import { useId } from "preact/hooks";
import { Video as LiveVideo } from "$live/std/ui/types/Video.ts";
import Video from "$live/std/ui/components/Video.tsx";
import Slider from "../islands/Slider.tsx";

export interface Props {
  videos: Array<{
    /** @title Vídeo Mobile */
    mobile: LiveVideo;
    /** @title Vídeo Desktop */
    desktop: LiveVideo;
    /** @title Video alt text */
    alt?: string;
    /** @title Link */
    link: string;
  }>;
  /**
   * @title delay
   * @description Time to switch slides in seconds
   * @default 3
   */
  delay?: number;
}

function VideoCarousel({ videos = [], delay = 3 }: Props) {
  const id = useId();

  return (
    <>
      <div id={id} class="relative w-full overflow-hidden">
        <div
          data-slider-content
          class={`flex transition w-[${videos.length * 100}%]`}
        >
          {videos.map(({ link, mobile, desktop, alt }, index) => (
            <a
              aria-label={alt}
              href={link}
              class="w-full"
              id={`${id}-${index}`}
            >
              <div class="min-h-[465px] w-full">
                <Video
                  loading={index === 0 ? "eager" : "lazy"}
                  autoPlay
                  loop
                  controls={false}
                  muted
                  width={360}
                  height={465}
                  media="(max-width: 767px)"
                  class="object-cover min-h-[465px] w-full md:hidden"
                  alt={alt}
                  sizes="25vw"
                  src={mobile}
                />
                <Video
                  loading={index === 0 ? "eager" : "lazy"}
                  autoPlay
                  loop
                  controls={false}
                  muted
                  width={1280}
                  height={487}
                  media="(min-width: 768px)"
                  class="object-cover min-h-[465px] w-full hidden md:block"
                  alt={alt}
                  sizes="50vw"
                  src={desktop}
                />
              </div>
            </a>
          ))}
        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2">
          {videos.map((_, index) => (
            <button
              data-dot
              aria-label={`Focus slide carousel ${index}`}
              class="p-4"
            >
              <div class="w-4 h-4 rounded-full bg-white dark:bg-gray-800" />
            </button>
          ))}
        </div>
      </div>
      <Slider id={id} items={videos.length} delay={delay * 1000} />
    </>
  );
}

export default VideoCarousel;
