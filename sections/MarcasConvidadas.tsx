import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";

export interface Banner {
  href: string;
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
}

export interface BannerArt {
  href: string;
  /**
   * @description Image src for small screen devices (mobile)
   */
  smallSrc: LiveImage;
  /**
   * @description Image src for large screen devices (desktop)
   */
  largeSrc: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
}

export interface Props {
  title: string;
  mainBanner: BannerArt;
  banners: Banner[];
}

export default function MarcasConvidadas(
  { title, banners, mainBanner }: Props,
) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto mt-[50px]">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center">
        <h3
          class={"text-lg leading-5 font-semibold uppercase whitespace-nowrap"}
        >
          {title}
        </h3>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <a class="md:col-span-3" href={mainBanner.href}>
          <Picture>
            <Source
              width={220}
              height={272}
              media="(max-width: 767px)"
              src={mainBanner.smallSrc}
            />
            <Source
              width={1280}
              height={437}
              media="(min-width: 768px)"
              src={mainBanner.largeSrc}
            />
            <img
              width={328}
              height={406}
              class="object-cover w-full"
              src={mainBanner.largeSrc}
              alt={mainBanner.alt}
              loading="lazy"
              decoding="async"
              sizes="100vw"
            />
          </Picture>
        </a>
        {banners.map(({ href, src }) => (
          <div>
            <a href={href} key={href}>
              <Image
                sizes="(max-width: 767px) 100vw, 30vw"
                width={328}
                height={406}
                src={src}
                alt={href}
                class="w-full"
                decoding="async"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
