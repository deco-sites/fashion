import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <div class="w-full p-2 flex flex-col gap-4 items-center bg-gray-100">
      {title && <h2 class="text-lg md:text-2xl">{title}</h2>}
      <ul class="flex flex-nowrap overflow-x-auto max-w-full gap-8 scroll-x-mandatory scroll-smooth">
        {highlights.map(({ src, alt, href, label }) => (
          <li class="min-w-[180px] p-2 scroll-snap-center">
            <a
              href={href}
              class="flex flex-col gap-2 items-center"
            >
              <Image
                src={src}
                alt={alt}
                width={180}
                height={180}
                class="rounded-xl sm:rounded-3xl hover:shadow-xl"
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
