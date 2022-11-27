import { useId } from "preact/hooks";

export interface Props {
  videos: Array<{
    /** @title Vídeo Mobile */
    mobile: string;
    /** @title Vídeo Desktop */
    desktop: string;
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
              <video
                autoPlay
                loop
                muted
                height="465"
                width="310"
                class="object-cover min-h-[465px] w-full md:hidden"
                alt={alt}
                preload="auto"
              >
                <source src={mobile} type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                height="465"
                width="310"
                class="object-cover min-h-[465px] w-full hidden md:block"
                alt={alt}
                preload="auto"
              >
                <source src={desktop} type="video/mp4" />
              </video>
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
        dangerouslySetInnerHTML={{
          __html: `
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
              console.log(control, index)
              control.onclick = () => selectVideo(index);
            });
          `,
        }}
      />
    </div>
  );
}

export default VideoCarousel;
