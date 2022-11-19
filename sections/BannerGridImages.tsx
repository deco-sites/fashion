import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

const imgBannerDefault = {
  desktop:
    "https://images.prismic.io/offpremium-web/47f478d1-c2e0-4fc4-a564-71138143df1d_03_banner_secundario_maria_filo_desk.jpg",
  alt: "Imagem de teste",
  link: "/search?trade-policy=1&marca=maria-filo",
};

export interface BannerImageProps {
  desktop: LiveImage;
  alt: string;
  /**
   * @format url
   */
  link: string;
}

export interface Props {
  imgBanner1: BannerImageProps;
  imgBanner2: BannerImageProps;
  imgBanner3: BannerImageProps;
  imgBanner4: BannerImageProps;
  imgBanner5: BannerImageProps;
  imgBanner6: BannerImageProps;
  title: string;
}

export default function BannerGridImages(
  {
    imgBanner1 = imgBannerDefault,
    imgBanner2 = imgBannerDefault,
    imgBanner3 = imgBannerDefault,
    imgBanner4,
    imgBanner5,
    imgBanner6,
    title,
  }: Props,
) {
  const images = [
    imgBanner1,
    imgBanner2,
    imgBanner3,
    imgBanner4,
    imgBanner5,
    imgBanner6,
  ];

  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
        <h2 class={"text-lg leading-5 font-semibold uppercase "}>{title}</h2>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {images.map(({ link, desktop, alt }) => (
          <a href={link}>
            <Image
              width={540}
              height={514}
              src={desktop}
              alt={alt}
              decoding="async"
              loading="lazy"
              sizes="(max-width: 640px) 25vw, 100vw"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
