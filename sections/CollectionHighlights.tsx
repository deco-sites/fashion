import type { Image as ImageSrc } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Highlight {
  src: ImageSrc;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights: Highlight[];
  title: string;
}

function CollectionHighlights({ highlights, title }: Props) {
  return (
    <div class="max-w-[1400px] w-full p-2 mx-auto flex flex-col items-center">
      {title && <h2 class="text-center mb-8 text-lg md:text-2xl">{title}</h2>}
      <div class="flex flex-nowrap overflow-x-auto gap-16 max-w-full">
        {highlights.map(({ src, alt, href, label }) => (
          <a
            href={href}
            class="flex flex-col gap-2 items-center min-w-[180px] "
          >
            <Image
              src={src}
              alt={alt}
              width={180}
              height={180}
              class="rounded-xl sm:rounded-3xl"
            />
            <div>{label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CollectionHighlights;
