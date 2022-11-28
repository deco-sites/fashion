import { useId } from "preact/hooks";
import { Video as LiveVideo } from "$live/std/ui/types/Video.ts";
import Video from "$live/std/ui/components/Video.tsx";

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
    <div id={id} class="relative w-full overflow-hidden">
      <div
        data-container
        class={`flex transition w-[${videos.length * 100}%]`}
      >
        {videos.map(({ link, mobile, desktop, alt }, index) => (
          <a href={link} class="w-full" id={`${id}-${index}`}>
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

      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {videos.map((_, index) => (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            data-controls={index}
          />
        ))}
      </div>

      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
          function init() {
            let size = ${videos.length};
            let selected = 0;
            const root = document.getElementById("${id}");
            const container = root.querySelector("[data-container]");
            const controls = root.querySelectorAll("[data-controls]");
            
            const selectVideo = (index) => {
              container.style.transform = 'translateX(-' + (100 / size) * index + '%)';
            }
            
            setInterval(() => {
              selected = (selected+1) % size;
                selectVideo(selected);
            }, ${delay * 1000});
            
            controls.forEach((control, index) => {
              control.onclick = () => selectVideo(index);
            });
          };

          if (document.readyState === 'complete') {
            init();
          } else {
            window.addEventListener('load', init);
          };
          `,
        }}
      />
    </div>
  );
}

export default VideoCarousel;
