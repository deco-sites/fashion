import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Banner {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  images: Banner[];
  title: string;
}

export default function BannnerGrid({
  images = [],
  title,
}: Props) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
        <h2 class={"text-lg leading-5 font-semibold uppercase "}>{title}</h2>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {images.map(({ href, src, alt }) => (
          <a href={href}>
            <Image
              width={320}
              height={320}
              src={src}
              alt={alt}
              decoding="async"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 30vw"
              class="w-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
