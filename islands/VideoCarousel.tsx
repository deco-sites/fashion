import { JSONSchema7 } from "json-schema";
import { signal } from "@preact/signals";
import type { h } from "preact";
import { useEffect } from "preact/hooks";

export const schema: JSONSchema7 = {
  title: "Carousel de Vídeos",
  type: "object",
  required: ["video1"],
  properties: {
    video1: {
      type: "object",
      properties: {
        mobile: {
          type: "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          type: "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          type: "string",
          title: "Link",
        },
      },
    },
    video2: {
      type: "object",
      properties: {
        mobile: {
          type: "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          type: "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          type: "string",
          title: "Link",
        },
      },
    },
    video3: {
      type: "object",
      properties: {
        mobile: {
          type: "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          type: "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          type: "string",
          title: "Link",
        },
      },
    },
  },
};

interface VideoProps
  extends Pick<h.JSX.HTMLAttributes<HTMLVideoElement>, "loading" | "decoding"> {
  mobile: string;
  desktop: string;
  alt?: string;
  link: string;
}

function VideoLink({
  desktop,
  mobile,
  alt,
  link,
  loading,
  decoding,
}: VideoProps) {
  return (
    <a href={link} class="h-fit">
      <div class="min-h-[465px]">
        <video
          autoPlay
          loop
          muted
          height="465"
          width="310"
          class="object-cover min-h-[465px] w-full md:hidden"
          alt={alt}
          loading={loading}
          decoding={decoding}
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
          loading={loading}
          decoding={decoding}
        >
          <source src={desktop} type="video/mp4" />
        </video>
      </div>
    </a>
  );
}

interface Props {
  video1: VideoProps;
  video2: VideoProps;
  video3: VideoProps;
}

const videoDefault = {
  mobile: "/assets/farm-mob.mp4",
  desktop: "/assets/farm-desk.mp4",
  link: "/farm",
  alt: "Até 70% off em FARM",
};

const selectedCarousel = signal(0);

export default function VideoCarousel({
  video1 = videoDefault,
  video2,
  video3,
}: Props) {
  let quantity = 0;
  if (video1) quantity += 1;
  if (video2) quantity += 1;
  if (video3) quantity += 1;

  useEffect(() => {
    setInterval(() => {
      const newValue = (selectedCarousel.value + 1) % quantity;
      selectedCarousel.value = newValue;
    }, 3_000);
  }, []);

  return (
    <div class="relative w-full overflow-hidden">
      <div
        class={`flex w-[${quantity * 100}%] translate-x-[-${
          (100 / quantity) * selectedCarousel.value
        }%]`}
      >
        <VideoLink {...video1} decoding="async" loading="eager" />
        {video2 && <VideoLink {...video2} loading="lazy" decoding="async" />}
        {video3 && <VideoLink {...video3} loading="lazy" decoding="async" />}
      </div>

      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          onClick={() => (selectedCarousel.value = 0)}
        ></button>

        {video2 && (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            onClick={() => (selectedCarousel.value = 1)}
          ></button>
        )}
        {video3 && (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            onClick={() => (selectedCarousel.value = 2)}
          ></button>
        )}
      </div>
    </div>
  );
}
