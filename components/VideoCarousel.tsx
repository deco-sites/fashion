import { JSONSchema7 } from "json-schema";

export const schema: JSONSchema7 = {
  title: "Carousel de Vídeos",
  "type": "object",
  required: ["video1"],
  properties: {
    video1: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
    video2: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
    video3: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Vídeo Mobile",
        },
        desktop: {
          "type": "string",
          title: "Vídeo Desktop",
        },
        alt: {
          type: "string",
          title: "Texto alternativo",
        },
        link: {
          "type": "string",
          title: "Link",
        },
      },
    },
  },
};

interface Props {
  video1: { mobile: string; desktop: string; alt?: string; link: string };
  video2: { mobile: string; desktop: string; alt?: string; link: string };
  video3: { mobile: string; desktop: string; alt?: string; link: string };
}

const videoDefault = {
  mobile: "/assets/farm-mob.mp4",
  desktop: "/assets/farm-desk.mp4",
  link: "/farm",
  alt: "Até 70% off em FARM",
};

export default function VideoCarousel(
  { video1 = videoDefault, video2, video3 }: Props,
) {
  return (
    <div class="relative inline-block w-full">
      <div class="relative inline-block w-full">
        <a href={video1.link}>
          <div class="min-h-[465px] overflow-hidden w-full ease-in-out relative transition-all transform translate-x-0 z-20">
            <video
              autoPlay
              loop
              muted
              height="465"
              width="310"
              class="block object-cover min-h-[465px] w-auto"
              alt={video1.alt}
            >
              <source
                src={video1.desktop}
                type="video/mp4"
              />
              <source
                media="all and (max-width: 767px)"
                src={video1.mobile}
                type="video/mp4"
              />
            </video>
          </div>
        </a>
        {video2 && (
          <a href={video2.link}>
            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10">
              <video
                autoPlay
                loop
                muted
                src={video2.desktop}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={video2.alt}
              />
            </div>
          </a>
        )}
        {video3 && (
          <a href={video3.link}>
            <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10">
              <video
                autoPlay
                loop
                muted
                src={video3.desktop}
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={video3.alt}
              />
            </div>
          </a>
        )}
      </div>

      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
          aria-current="true"
          aria-label={video1.alt}
          data-carousel-slide-to="0"
        >
        </button>

        {video2 && (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label={video2.alt}
            data-carousel-slide-to="1"
          >
          </button>
        )}
        {video3 && (
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label={video3.alt}
            data-carousel-slide-to="2"
          >
          </button>
        )}
      </div>
    </div>
  );
}
