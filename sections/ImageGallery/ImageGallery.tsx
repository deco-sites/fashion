import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Header from "$store/components/ui/SectionHeader.tsx";

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
  description?: string;
  /** @maxItems 2*/
  divColumn: DivColumn[];
  /**
   * @description Aplique borda a sua imagem
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };
  layout?: {
    headerAlignment?: "center" | "left";
    mobile?: "Asymmetric" | "Symmetrical";
    desktop?: "Asymmetric" | "Symmetrical";
  };
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
const LAYOUT_MOBILE_IMAGE1 = {
  "Asymmetric": "w-full",
  "Symmetrical": "w-full aspect-square max-w-[216px]",
};
const LAYOUT_MOBILE_IMAGE2 = {
  "Asymmetric": "w-full h-[110px]",
  "Symmetrical": "w-full aspect-square max-w-[216px]",
};
const LAYOUT_DESKTOP_IMAGE1 = {
  "Asymmetric": "lg:w-full",
  "Symmetrical": "lg:w-1/2 lg:h-[100%] lg:max-h-full lg:max-w-full",
};
const LAYOUT_DESKTOP_IMAGE2 = {
  "Asymmetric": "lg:w-full lg:h-[420px]",
  "Symmetrical": "lg:w-1/2 lg:h-[100%] lg:max-h-full lg:max-w-full",
};
const LAYOUT_MOBILEv2 = {
  "Asymmetric": "",
  "Symmetrical": "w-full",
};
const LAYOUT_DESKTOPv2 = {
  "Asymmetric": "sm:max-h-none sm:max-w-none",
  "Symmetrical": "sm:flex-row",
};
export default function BannnerGrid({
  title,
  description,
  borderRadius,
  divColumn = [],
  layout,
}: Props) {
  return (
    <section class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class={`flex w-full gap-4 ${layout?.mobile === "Asymmetric" && `h-[280px] ${layout?.desktop === "Asymmetric" ? "lg:h-[1000px]" : "lg:h-auto"}`}`}>
        {divColumn.map(({ bannerTop, bannerBottom }, i) => (
          <div
            class={`flex flex-col gap-4
            ${LAYOUT_MOBILEv2[layout?.mobile ?? "Asymmetric"]}
            ${LAYOUT_DESKTOPv2[layout?.desktop ?? "Symmetrical"]}`}
          >
            <a
              href={bannerTop.href}

              class={`overflow-hidden
                ${RADIUS_MOBILE[borderRadius.mobile ?? "none"]}
                ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]}
                ${i % 2 === 0 ? LAYOUT_MOBILE_IMAGE1[layout?.mobile ?? "Symmetrical"] : LAYOUT_MOBILE_IMAGE2[layout?.mobile ?? "Symmetrical"]}
                ${i % 2 === 0 ? LAYOUT_DESKTOP_IMAGE1[layout?.desktop ?? "Symmetrical"] : LAYOUT_DESKTOP_IMAGE2[layout?.desktop ?? "Symmetrical"]}
              `}
            >
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={bannerTop.srcMobile}
                />
                <Source
                  media="(min-width: 768px)"
                  src={bannerTop.srcDesktop
                    ? bannerTop.srcDesktop
                    : bannerTop.srcMobile}
                />
                <img
                  src={bannerTop.srcMobile}
                  alt={bannerTop.alt}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            </a>
            <a
              href={bannerBottom.href}
              class={`overflow-hidden
                ${RADIUS_MOBILE[borderRadius.mobile ?? "none"]}
                ${RADIUS_DESKTOP[borderRadius.desktop ?? "none"]}
                ${i % 2 === 1 ? LAYOUT_MOBILE_IMAGE1[layout?.mobile ?? "Symmetrical"] : LAYOUT_MOBILE_IMAGE2[layout?.mobile ?? "Symmetrical"]}
                ${i % 2 === 1 ? LAYOUT_DESKTOP_IMAGE1[layout?.desktop ?? "Symmetrical"] : LAYOUT_DESKTOP_IMAGE2[layout?.desktop ?? "Symmetrical"]}
              `}
            >
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={bannerBottom.srcMobile}
                />
                <Source
                  media="(min-width: 768px)"
                  src={bannerBottom.srcDesktop
                    ? bannerBottom.srcDesktop
                    : bannerBottom.srcMobile}
                />
                <img
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
