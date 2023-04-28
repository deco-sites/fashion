import Image from "deco-sites/std/components/Image.tsx";
import Slider from "deco-sites/fashion/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

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
    <div class="container grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <span class="font-medium text-2xl">{title}</span>
      </h2>

      <Slider class="carousel carousel-center sm:carousel-end gap-6">
        {highlights.map(({ href, src, alt, label }, index) => (
          <Slider.Item
            index={index}
            class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 min-w-[190px]"
          >
            <a href={href} class="card card-compact bg-base-100">
              <figure>
                <Image
                  class="rounded-[40px]"
                  src={src}
                  alt={alt}
                  width={190}
                  height={265}
                />
              </figure>
              <div class="card-body items-center">
                <h2 class="card-title text-base font-medium">{label}</h2>
              </div>
            </a>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default Highlights;
