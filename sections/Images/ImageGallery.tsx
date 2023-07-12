import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Container, { HeaderContent, Layout, Style } from "$store/components/ui/Container.tsx"

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

export interface Border {
  /** @default none */
  mobile?: BorderRadius;
  /** @default none */
  desktop?: BorderRadius;
}
  
export interface ItemsLayout {
  autosizeMobile?: "Asymmetric" | "Symmetrical";
  autosizeDesktop?: "Asymmetric" | "Symmetrical";
  /**
   * @description Item's border radius
   */
  borderRadius?: Border;
}
  
export interface Props {
  header?: HeaderContent;
  /**
   * @maxItems 4
   * @minItems 4
   */
  banners?: Banner[];
  imagesSizes?: {
    mobile?: {
      largerImage: {
        height: number;
        width: number;
      }
      smallerImage: {
        height: number;
        width: number;
      };
    }
    desktop?: {
      largerImage: {
        height: number;
        width: number;
      }
      smallerImage: {
        height: number;
        width: number;
      };
    }
  }
  layout?: Layout;
  itemsLayout?: ItemsLayout;
  style?: Style;
}

const RADIUS: Record<string, Record<BorderRadius, string>> = {
  mobile: {
    "none": "rounded-none",
    "sm": "rounded-sm",
    "md": "rounded-md",
    "lg": "rounded-lg",
    "xl": "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "full": "rounded-full",
  },
  desktop: {
    "none": "sm:rounded-none",
    "sm": "sm:rounded-sm",
    "md": "sm:rounded-md",
    "lg": "sm:rounded-lg",
    "xl": "sm:rounded-xl",
    "2xl": "sm:rounded-2xl",
    "3xl": "sm:rounded-3xl",
    "full": "sm:rounded-full",
  },
};

const DEFAULT_PROPS: Props = {
  "banners": [
    {
      "srcMobile":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/a8d36df6-4b96-4421-bb6c-de0fe1478e06",
      "srcDesktop":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/a8d36df6-4b96-4421-bb6c-de0fe1478e06",
      "alt": "Image 1",
      "href": "/",
    },
    {
      "alt": "Image 2",
      "href": "/",
      "srcMobile":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/29dbf8d4-90c3-43f7-9b6b-4c6bda5e7835",
      "srcDesktop":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/29dbf8d4-90c3-43f7-9b6b-4c6bda5e7835",
    },
    {
      "srcMobile":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/1e6250d4-f9d2-4185-b8a6-b0e8a8fed4a7",
      "srcDesktop":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/1e6250d4-f9d2-4185-b8a6-b0e8a8fed4a7",
      "href": "/",
      "alt": "Image 3",
    },
    {
      "srcMobile":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3210eea1-5437-4f19-8327-8b8fa4edfc45",
      "srcDesktop":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/3210eea1-5437-4f19-8327-8b8fa4edfc45",
      "alt": "Image 4",
      "href": "/",
    },
  ],
  "itemsLayout": {
    "borderRadius": {
      "mobile": "3xl",
      "desktop": "2xl",
    },
    "autosizeMobile": "Asymmetric",
    "autosizeDesktop": "Asymmetric",
  },
};

function Banner(
  props: Banner & {
    borderRadius?: {
      /** @default none */
      mobile?: BorderRadius;
      /** @default none */
      desktop?: BorderRadius;
    };
    type: string;
    sizeMobile?: {
      height: number;
      width: number;
    };
    sizeDesktop?: {
      height: number;
      width: number;
    };
    mobile: string;
    desktop: string;
  },
) {
  const { borderRadius, srcMobile, srcDesktop, alt } = props;
  const radiusDesktop = RADIUS.desktop[borderRadius?.desktop ?? "none"];
  const radiusMobile = RADIUS.mobile[borderRadius?.desktop ?? "none"];

  return (
    <a
      href={props.href}
      class={`overflow-hidden ${radiusDesktop} ${radiusMobile}`}
    >
      <Picture>
        <Source
          width={props.sizeMobile ? props.sizeMobile.width : 400}
          height={props.sizeMobile ? props.sizeMobile.height : props.type === "large" ? 400 : props.mobile == "Symmetrical" ? 400 : 220}
          media="(max-width: 767px)"
          src={srcMobile}
        />
        <Source
          width={props.sizeDesktop ? props.sizeDesktop.width : 640}
          height={props.sizeDesktop ? props.sizeDesktop.height : props.type === "large" ? 640 : props.desktop == "Symmetrical" ? 640 : 400}
          media="(min-width: 768px)"
          src={srcDesktop || srcMobile}
        />
        <img
          class={`w-full object-cover"}`}
          src={srcMobile}
          alt={alt}
          decoding="async"
          loading="lazy"
        />
      </Picture>
    </a>
  );
}

export default function Gallery(props: Props) {
  const { header, banners, imagesSizes, layout, itemsLayout, style } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Container header={header} layout={layout} style={style}>
      <div class="flex gap-4">
        <div class="flex flex-col gap-4 w-1/2">
          {banners?.map((banner, index) => (
            <>
              {
                index < 2 && (
                  <Banner
                    {...banner}
                    borderRadius={itemsLayout?.borderRadius}
                    type={index % 2 == 0 ? "large" : "small"}
                    sizeMobile={index % 2 == 0 ? imagesSizes?.mobile?.largerImage : imagesSizes?.mobile?.smallerImage}
                    sizeDesktop={index % 2 == 0 ? imagesSizes?.desktop?.largerImage : imagesSizes?.desktop?.smallerImage}
                    mobile={itemsLayout?.autosizeMobile || "Asymmetric"}
                    desktop={itemsLayout?.autosizeDesktop || "Asymmetric"}
                  />
                )
              }
            </>
          ))}
        </div>
        <div class="flex flex-col gap-4 w-1/2">
          {banners?.map((banner, index) => (
            <>
              {
                index >= 2 && (

                  <Banner
                    {...banner}
                    borderRadius={itemsLayout?.borderRadius}
                    type={index % 2 != 0 ? "large" : "small"}
                    sizeMobile={index % 2 != 0 ? imagesSizes?.mobile?.largerImage : imagesSizes?.mobile?.smallerImage}
                    sizeDesktop={index % 2 != 0 ? imagesSizes?.desktop?.largerImage : imagesSizes?.desktop?.smallerImage}
                    mobile={itemsLayout?.autosizeMobile || "Asymmetric"}
                    desktop={itemsLayout?.autosizeDesktop || "Asymmetric"}
                  />
                )
              }
            </>
          ))}
        </div>

      </div>
    </Container>
  );
}
