import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label?: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <div class="w-full p-2 flex flex-col gap-4 items-center">
      {title && (
        <h2 class="text-[13px] text-uppercase font-semibold tracking-[5px]">
          {title}
        </h2>
      )}
      <ul
        class="flex flex-nowrap overflow-x-auto max-w-full gap-8"
        style={{
          "scroll-snap-type": "x mandatory",
          "scroll-behavior": "smooth",
          "-webkit-overflow-scrolling": "touch",
        }}
      >
        {highlights.map(({ src, alt, href, label }) => (
          <li
            class="min-w-[180px] p-2"
            style={{ "scroll-snap-align": "center" }}
          >
            <a
              href={href}
              class="flex flex-col gap-2 items-center"
            >
              <Image
                src={src}
                alt={alt}
                class=""
              />
              <div>{label}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Highlights;
