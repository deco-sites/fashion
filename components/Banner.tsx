import { JSONSchema7 } from "json-schema";
import LogoZeeDog from "./icons/LogoZeeDog.tsx";
import Image from "./ui/Image.tsx";

export const schema: JSONSchema7 = {
  title: "Main Banner",
  "type": "object",
  required: ["imgSrc", "bannerTexts"],
  properties: {
    imgSrc: {
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
    alt: {
      type: "string",
      title: "alternate",
    },
    text: {
      "type": "string",
      title: "Primeiro texto",
    },
    title: {
      "type": "string",
      title: "Título",
    },
    subtitle: {
      "type": "string",
      title: "Subtítulo",
    },
    CTA: {
      "type": "string",
      title: "Texto CTA do link",
    },
    link: {
      "type": "string",
      title: "Link",
    },
  },
};

interface Props {
  imgSrc: { mobile: string; desktop: string };
  alt?: string;
  text?: string;
  title?: string;
  subtitle?: string;
  link?: string;
  CTA?: string;
}

const imgSrcDefault = {
  mobile:
    "https://zeedog.vteximg.com.br/arquivos/banner-home-zeedog-768x950-kitchen.jpg?v=637949787190870000",
  desktop:
    "https://zeedog.vteximg.com.br/arquivos/banner-home-zeedog-1920x700-kitchen.jpg?v=637949787206370000",
};

export default function Banner(
  { imgSrc = imgSrcDefault, alt, text, title, subtitle, link, CTA }: Props,
) {
  return (
    <section class="w-full my-8">
      <div class="relative">
        <picture class="inset-0">
          <source
            media="(max-width: 767px)"
            srcset={imgSrc.mobile}
          />
          <source
            media="(min-width: 768px)"
            srcset={imgSrc.desktop}
          />
          <Image
            class="object-cover pb-5 w-full"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={imgSrc.mobile}
            alt={alt}
            width={300}
            height={300}
          />
        </picture>

        <div class="absolute inset-0 md:flex md:flex-col md:items-center md:justify-center text-[#4d5b31] m-[4vh] md:m-auto md:text-[#f2e9d8] md:w-[28vw]">
          <a
            href=""
            class="md:flex md:flex-col md:items-center md:justify-center w-[37.68vw] md:w-[17vw] lg:w-auto"
          >
            <LogoZeeDog class="w-[37.68vw] md:w-[15.62vw] lg:w-auto" />
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
