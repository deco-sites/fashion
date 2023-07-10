import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Container, { HeaderContent, Layout, ExtendedStyle } from "$store/components/ui/Container.tsx"

/**
 * @titleBy alt
 */
export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  alt: string;
  href: string;
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

export interface Items {
  /** @default 2 */
  mobile?: 1 | 2;
  /** @default 4 */
  desktop?: 1 | 2 | 4 | 6 | 8;
}

export interface Border {
  /** @default none */
  mobile?: BorderRadius;
  /** @default none */
  desktop?: BorderRadius;
}

export interface ItemsLayout {
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine?: Items;
  /**
   * @description Item's border radius
   */
  borderRadius?: Border;
}

export interface Props {
  header?: HeaderContent;
  banners?: Banner[];
  layout?: Layout;
  itemsLayout?: ItemsLayout;
  style?: ExtendedStyle;

}

const MOBILE_COLUMNS = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

const DESKTOP_COLUMNS = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  4: "sm:grid-cols-4",
  6: "sm:grid-cols-6",
  8: "sm:grid-cols-8",
};

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

export default function BannnerGrid({
  header,
  layout,
  style,
  banners = [
    {
      srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/a8d36df6-4b96-4421-bb6c-de0fe1478e06",
      srcDesktop: "",
      alt: "",
      href: "/",
    },
    {
      srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/29dbf8d4-90c3-43f7-9b6b-4c6bda5e7835",
      srcDesktop: "",
      alt: "",
      href: "/",
    },
    {
      srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/1e6250d4-f9d2-4185-b8a6-b0e8a8fed4a7",
      srcDesktop: "",
      alt: "",
      href: "/",
    },
    {
      srcMobile: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3210eea1-5437-4f19-8327-8b8fa4edfc45",
      srcDesktop: "",
      alt: "",
      href: "/",
    },
  ],
}: Props) {
  return (
    <Container header={header} layout={layout} style={style}>
      <div
        class={`grid gap-4 md:gap-6 ${
          MOBILE_COLUMNS[layout?.itemsPerLine?.mobile ?? 2]
        } ${DESKTOP_COLUMNS[layout?.itemsPerLine?.desktop ?? 4]}`}
      >
        {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
          <a
            href={href}
            class={`overflow-hidden ${
              RADIUS_MOBILE[layout?.borderRadius.mobile ?? "none"]
            } ${RADIUS_DESKTOP[layout?.borderRadius.desktop ?? "none"]} `}
          >
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={srcMobile}
                width={100}
                height={100}
              />
              <Source
                media="(min-width: 768px)"
                src={srcDesktop ? srcDesktop : srcMobile}
                width={250}
                height={250}
              />
              <img
                class="w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={srcMobile}
                alt={alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        ))}
      </div>
    </Container>
  );
}
