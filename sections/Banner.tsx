import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

export type Props = {
  imgSrc: { mobile: LiveImage; desktop: LiveImage };
  alt?: string;
  text?: string;
  title?: string;
  subtitle?: string;
  link?: string;
  CTA?: string;
};

export default function Banner(
  { imgSrc, alt, text, title, subtitle, link, CTA }: Props,
) {
  return (
    <section class="w-full mb-8">
      <div class="relative">
        <Picture class="inset-0" preload>
          <Source
            media="(max-width: 767px)"
            src={imgSrc.mobile}
            width={436}
            height={377}
            fetchPriority="high"
          />
          <Source
            media="(min-width: 768px)"
            src={imgSrc.desktop}
            width={1920}
            height={726}
            fetchPriority="high"
          />
          <img
            class="object-cover pb-5 w-full"
            src={imgSrc.mobile}
            alt={alt}
            loading="eager"
          />
        </Picture>

        <div class="absolute inset-0 md:flex md:flex-col md:items-center md:justify-center text-[#4d5b31] m-[4vh] md:m-auto md:text-[#f2e9d8] md:w-[28vw]">
          <a
            href=""
            class="md:flex md:flex-col md:items-center md:justify-center w-[37.68vw] md:w-[17vw] lg:w-auto"
          >
            <div class="font-sans text-xs md:text-sm leading-4 w-[37.68vw] md:w-auto md:text-center">
              <span>{text}</span>
            </div>
            <h2 class="uppercase font-sans text-2xl leading-8 md:text-3xl tracking-wider ">
              {title}
            </h2>
            <div class="font-sans text-xs md:text-sm leading-4 md:pt-2.5 w-[37.68vw] md:w-auto md:text-center">
              <span>{subtitle}</span>
            </div>
          </a>
          <div class="mt-3 md:mt-5 text-[10px] md:text-xs">
            <a
              href={link}
              class="uppercase md:pb-2.5 pb-1.5 border-b border-[#4d5b31] md:border-[#f2e9d8] hover:pb-0 transition-all duration-150 ease"
            >
              {CTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
