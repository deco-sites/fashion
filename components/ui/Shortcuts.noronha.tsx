import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Shortcuts */
  items: Item[];
}
export interface Item {
  /** @title Imagem */
  img: Image;

  /** @title Link de Redirecionamento */
  link: string;

  /** @title Texto Alternativo */
  alt: string;

  /** @title TÃ­tulo da Imagem */
  title: string;

  /** @title Largura da Imagem */
  width: number;

  /** @title Altura da Imagem */
  height: number;
}
const itemsProps: Item[] = [
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/84787ff2-6ea9-4ddf-bd44-621644d529ab",
    link: "/",
    alt: "WhatsApp",
    title: "WhatsApp",
    width: 24,
    height: 24,
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/94f0a01a-f260-47b2-9dd1-6d5aad22980c",
    link: "/",
    alt: "Messages",
    title: "Messages",
    width: 24,
    height: 24,
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/f4ccc342-ec79-4132-a9b0-129d191d19ec",
    link: "/",
    alt: "Ruler",
    title: "Ruler",
    width: 24,
    height: 24,
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/2eaca7a2-6671-48c8-8c2a-b444c841e9cf",
    link: "/",
    alt: "Truck Delivery",
    title: "Truck Delivery",
    width: 24,
    height: 24,
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/568e397f-90a0-4889-8742-ab091f1e9f81",
    link: "/",
    alt: "Arrows Right Left",
    title: "Arrows Right Left",
    width: 24,
    height: 24,
  },
];
const Shortcuts = ({ items = itemsProps }: Props) => {
  return (
    <ul class="fixed z-20 top-1/2 -translate-y-1/2 right-0">
      {items.map((item) => (
        <li class="bg-white border-2 border-solid border-[#AAAAAA] border-t-transparent flex justify-center items-center first:border-t-[#AAAAAA]">
          <a
            href={item.link}
            target="_blank"
            data-tip={item.title}
            class="block p-2.5 lg:tooltip lg:tooltip-left rounded-none text-white text-center leading-4"
          >
            <img
              width={item.width}
              height={item.height}
              src={item.img}
              alt={item.alt}
            >
            </img>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Shortcuts;
