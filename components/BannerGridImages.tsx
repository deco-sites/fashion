import { JSONSchema7 } from "json-schema"
import Image from "./ui/Image.tsx";

export const schema: JSONSchema7 = {
  title: "Banner Duplo",
  "type": "object",
  required: ["imgSrc"],
  properties: {
    imgSrcBanner1: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Imagem Mobile",
          format: "uri",
        },
        desktop: {
          "type": "string",
          title: "Imagem Desktop",
          format: "uri",
        },
      },
    },
    altImgBanner1: {
      type: "string",
      title: "alternate",
    },
    textColor1: {
      "type": "string",
      title: "Cor do texto da primeira imagem",
    },
    textBanner1: {
      "type": "string",
      title: "Primeiro texto",
    },
    titleBanner1: {
      "type": "string",
      title: "Título",
    },
    subtitleBanner1: {
      "type": "string",
      title: "Subtítulo",
    },
    CTA1: {
      "type": "string",
      title: "Texto do CTA",
    },
    link1: {
      "type": "string",
      title: "Link vinculado ao CTA",
    },
    imgSrcBanner2: {
      "type": "object",
      properties: {
        mobile: {
          "type": "string",
          title: "Imagem Mobile",
          format: "uri",
        },
        desktop: {
          "type": "string",
          title: "Imagem Desktop",
          format: "uri",
        },
      },
    },
    altImgBanner2: {
      type: "string",
      title: "alternate",
    },
    textColor2: {
      "type": "string",
      title: "Cor do texto da segunda imagem",
    },
    textBanner2: {
      "type": "string",
      title: "Primeiro texto",
    },
    titleBanner2: {
      "type": "string",
      title: "Título",
    },
    subtitleBanner2: {
      "type": "string",
      title: "Subtítulo",
    },
    link2: {
      "type": "string",
      title: "Link vinculado ao CTA",
    },
    CTA2: {
      "type": "string",
      title: "Texto do CTA",
    },
  },
};

interface Props {
  imgSrcBanner1: { mobile: string; desktop: string };
  imgSrcBanner2: { mobile: string; desktop: string };
  altImgBanner1: string;
  altImgBanner2: string;
  textBanner1?: string;
  titleBanner1?: string;
  textColor1?: string;
  textColor2?: string;
  subtitleBanner1?: string;
  link1?: string;
  CTA1?: string;
  textBanner2?: string;
  titleBanner2?: string;
  subtitleBanner2?: string;
  link2?: string;
  CTA2?: string;
}

const imgSrcBanner1Default = {
  mobile:
    "https://zeedog.vteximg.com.br/arquivos/home-mobile-724x768-L3-black.jpg?v=637976425280700000",
  desktop:
    "https://zeedog.vteximg.com.br/arquivos/home-desktop-898x700-L3-w.jpg?v=637976425276170000",
};

const imgSrcBanner2Default = {
  mobile:
    "https://zeedog.vteximg.com.br/arquivos/home-mobile-724x768-staple.jpg?v=637970387418470000",
  desktop:
    "https://zeedog.vteximg.com.br/arquivos/home-desktop-898x700-staple.jpg?v=637970387413430000",
};

export default function BannerGridImages(
  {
    imgSrcBanner1 = imgSrcBanner1Default,
    imgSrcBanner2 = imgSrcBanner2Default,
    altImgBanner2,
    altImgBanner1,
    titleBanner1,
    subtitleBanner1,
    textColor1,
    textColor2,
    link1,
    CTA1,
    textBanner1,
    textBanner2,
    titleBanner2,
    subtitleBanner2,
    link2,
    CTA2,
  }: Props,
) {
  return (
    <section class="px-[2.083vw] my-[2.083vw] flex flex-col md:flex-row gap-7">
      {/* grid */}
      <div class="relative w-full md:w-1/2 px-[6vw] md:px-0">
        <a href="/">
          <figure>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={imgSrcBanner1.mobile}
              />
              <source
                media="(min-width: 768px)"
                srcset={imgSrcBanner1.desktop}
              />
              <Image
                class="object-cover pb-5 w-full"
                sizes="(max-width: 640px) 75vw, 50vw"
                src={imgSrcBanner1.mobile}
                alt={altImgBanner1}
                width={300}
                height={300}
              />
            </picture>
          </figure>
        </a>
        <div
          class={`absolute inset-0 text-[${textColor1}] md:text-[${textColor1}] mx-[6vh] md:mx-[2.604vw] md:my-[2.8645vw] w-auto`}
        >
          <a href="/">
            <h3 class="font-sans mt-3 md:mt-auto text-xs leading-4 mb-3 w-[108px]">
              {textBanner1}
            </h3>
            <h2 class="uppercase font-sans text-2xl leading-8 md:text-3xl tracking-wider ">
              {titleBanner1}
            </h2>
            <h3 class="font-sans mt-3 md:mt-7 text-xs leading-4 w-[37.68vw]">
              {subtitleBanner1}
            </h3>
          </a>
          <div class="mt-5 md:mt-7 text-xs">
            <a
              href={link1}
              class={`uppercase pb-1.5 border-b border-[${textColor1}] md:border-[${textColor1}] hover:pb-0 transition-all duration-150 ease`}
            >
              {CTA1}
            </a>
          </div>
        </div>
      </div>

      <div class="relative w-full md:w-1/2 px-[6vw] md:px-0">
        <a href="/">
          <figure>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={imgSrcBanner2.mobile}
              />
              <source
                media="(min-width: 768px)"
                srcset={imgSrcBanner2.desktop}
              />
              <Image
                class="object-cover pb-5 w-full"
                sizes="(max-width: 640px) 75vw, 50vw"
                src={imgSrcBanner2.mobile}
                alt={altImgBanner2}
                width={300}
                height={300}
              />
            </picture>
          </figure>
        </a>
        <div
          class={`absolute inset-0 text-[${textColor2}] mx-[6vh] md:mx-[2.604vw] md:my-[2.8645vw]`}
        >
          <a href="/">
            <h3 class="font-sans mt-3 md:mt-auto text-xs leading-4 mb-3 w-[108px]">
              {textBanner2}
            </h3>
            <h2 class="uppercase font-sans text-2xl leading-8 md:text-3xl tracking-wider ">
              {titleBanner2}
            </h2>
            <h3 class="font-sans mt-3 md:mt-7 text-xs leading-4 w-[200px]">
              {subtitleBanner2}
            </h3>
          </a>
          <div class="mt-5 md:mt-7 text-xs">
            <a
              href={link2}
              class={`uppercase pb-1.5 border-b border-[${textColor2}] hover:pb-0 transition-all duration-150 ease`}
            >
              {CTA2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
