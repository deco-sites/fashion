const imgBannerDefault = {
  desktop:
    "https://images.prismic.io/offpremium-web/47f478d1-c2e0-4fc4-a564-71138143df1d_03_banner_secundario_maria_filo_desk.jpg",
  alt: "Imagem de teste",
  link: "/search?trade-policy=1&marca=maria-filo",
};

const widths = [
  100, 116, 135, 156, 181, 210, 244, 283, 328, 380, 441, 512, 540,
];

interface UrlBuilderParams {
  width: number;
  height: number;
  src: string;
}

const imageUrlBuilder = ({ src, width, height }: UrlBuilderParams) =>
  `${src}?auto=compress%2Cformat&fit=max&w=${width}&h=${height}`;

const buildImageProps = ({
  width,
  height,
  src,
}: UrlBuilderParams): UrlBuilderParams & { srcset: string } => {
  const srcset = widths
    .map(
      (w) =>
        `${imageUrlBuilder({
          width: w,
          height: Math.trunc((height * w) / width),
          src,
        })} ${w}w`
    )
    .join(",");

  return {
    height,
    width,
    srcset,
    src: imageUrlBuilder({ width, height, src }),
  };
};

function ImageWrapper({
  desktop,
  link,
  alt,
}: {
  desktop: string;
  alt: string;
  link: string;
}) {
  const imgProps = buildImageProps({ width: 540, height: 514, src: desktop });

  return (
    <a href={link}>
      <img
        decoding="async"
        loading="lazy"
        alt={alt}
        sizes="(max-width: 640px) 25vw, 100vw"
        {...imgProps}
      />
    </a>
  );
}

export interface Props {
  imgBanner1: {
    desktop: string;
    alt: string;
    link: string;
  };
  imgBanner2: {
    desktop: string;
    alt: string;
    link: string;
  };
  imgBanner3: {
    desktop: string;
    alt: string;
    link: string;
  };
  imgBanner4: {
    desktop: string;
    alt: string;
    link: string;
  };
  imgBanner5: {
    desktop: string;
    alt: string;
    link: string;
  };
  imgBanner6: {
    desktop: string;
    alt: string;
    link: string;
  };
  title: string;
}

export default function BannerGridImages({
  imgBanner1 = imgBannerDefault,
  imgBanner2 = imgBannerDefault,
  imgBanner3 = imgBannerDefault,
  imgBanner4,
  imgBanner5,
  imgBanner6,
  title,
}: Props) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto">
      <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
        <h2 class={"text-lg leading-5 font-semibold uppercase "}>{title}</h2>

        <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        <ImageWrapper {...imgBanner1} />
        <ImageWrapper {...imgBanner2} />
        <ImageWrapper {...imgBanner3} />
        <ImageWrapper {...imgBanner4} />
        <ImageWrapper {...imgBanner5} />
        <ImageWrapper {...imgBanner6} />
      </div>
    </section>
  );
}
