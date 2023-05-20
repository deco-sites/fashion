import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
    /**
   * @description Adicione um link
   */
    href: string;
}
export interface DivColumn {
    bannerTop: Banner;
    bannerBottom: Banner;
  }
export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  title?: string;
  descricao?: string;
  /**
   * @description Escolha o layout que preferir
   */
  SelectLayout: {
    /** @default  */
    mobile?: "Assimétrico" | "Simétrico";
    /** @default  */
    desktop?: "Grid" | "Inline";
  };
  /**
   * @description Aplique borda a sua imagem
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };

  /** @maxItems 2*/
  divColumn: DivColumn[];
}

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "full": "sm:rounded-full",
};
const LAYOUT_MOBILE = {
    "Assimétrico": "w-full h-full",
    "Simétrico": "w-full aspect-square max-w-[216px]"
}
const LAYOUT_DESKTOP = {
    "Grid": "sm:w-full sm:h-full sm:max-h-full sm:max-w-full",
    "Inline": "sm:w-[25vw] sm:h-[100%] sm:max-h-full sm:max-w-full"
}
const LAYOUT_MOBILEv2 = {
    "Assimétrico": "",
    "Simétrico": "w-full"
}
const LAYOUT_DESKTOPv2 = {
    "Grid": "sm:max-h-none sm:max-w-none",
    "Inline": "sm:flex-row"
}
export default function BannnerGrid({
  title,
  descricao,
  SelectLayout,
  borderRadius,
  divColumn = [],
}: Props) {
  return (
    <section class="container w-full px-4 mx-auto md:px-10">
        <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6 flex-col">
            <h2 class="text-[36px] font-normal lg:text-[60px]">
                {title}
            </h2>
            <p class="text-center font-normal text-2xl">{descricao}</p>
        </div>
        <div class="flex w-full gap-4">
            {divColumn.map(({ bannerTop, bannerBottom}) => (
                <div class={`flex flex-col gap-4 ${LAYOUT_MOBILEv2[SelectLayout.mobile ?? "Assimétrico"]} ${LAYOUT_DESKTOPv2[SelectLayout.desktop ?? "Grid"]}`}>
                    <a
                        href={bannerTop.href}
                        class={`overflow-hidden ${
                        RADIUS_MOBILE[borderRadius.mobile ?? "none"]
                        } ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]} `}
                    >
                    <Picture>
                    <Source
                        media="(max-width: 767px)"
                        src={bannerTop.srcMobile}
                        width= {100}
                    />
                    <Source
                        media="(min-width: 768px)"
                        src={bannerTop.srcDesktop ? bannerTop.srcDesktop : bannerTop.srcMobile}
                        width={250}
                    />
                    <img
                        class={` ${LAYOUT_MOBILE[SelectLayout.mobile ?? "Assimétrico"]} ${LAYOUT_DESKTOP[SelectLayout.desktop ?? "Grid"]}`}
                        src={bannerTop.srcMobile}
                        alt={bannerTop.alt}
                        decoding="async"
                        loading="lazy"
                    />
                    </Picture>
                    </a>
                    <a
                        href={bannerBottom.href}
                        class={`overflow-hidden ${
                        RADIUS_MOBILE[borderRadius.mobile ?? "none"]
                        } ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]} `}
                    >
                    <Picture>
                    <Source
                        media="(max-width: 767px)"
                        src={bannerBottom.srcMobile}
                        width= {100}
                        className={"w-full h-auto"}
                    />
                    <Source
                        media="(min-width: 768px)"
                        src={bannerBottom.srcDesktop ? bannerBottom.srcDesktop : bannerBottom.srcMobile}
                        width={250}
                        className={"w-full h-auto"}
                    />
                    <img
                        class={` ${LAYOUT_MOBILE[SelectLayout.mobile ?? "Assimétrico"]} ${LAYOUT_DESKTOP[SelectLayout.desktop ?? "Grid"]}`}
                        sizes="(max-width: 640px) 100vw, 30vw"
                        src={bannerBottom.srcMobile}
                        alt={bannerBottom.alt}
                        decoding="async"
                        loading="lazy"
                    />
                    </Picture>
                    </a>
                </div>
            ))}
        </div>
    </section>
  );
}
