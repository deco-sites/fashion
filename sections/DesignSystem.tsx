import { Color } from "https://denopkg.com/tlgimenes/color@9176dca/mod.ts";

import { Head } from "$fresh/runtime.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import Breadcrumb from "deco-sites/fashion/components/ui/Breadcrumb.tsx";
import QuantitySelector from "deco-sites/fashion/components/ui/QuantitySelector.tsx";

export interface Colors {
  /**
   * @format color
   * @default #003232
   */
  "primary": string;
  /**
   * @format color
   * @description Will be a darker tone of primary if not specified
   */
  "primary-focus"?: string;
  /**
   * @format color
   * @description Will be a readable tone of primary if not specified
   */
  "primary-content"?: string;

  /**
   * @format color
   * @default #8C3D3D
   */
  "secondary": string;
  /**
   * @format color
   * @description Will be a darker tone of secondary if not specified
   */
  "secondary-focus"?: string;
  /**
   * @format color
   * @description Will be a readable tone of secondary if not specified
   */
  "secondary-content"?: string;

  /**
   * @format color
   * @default #00FF7F
   */
  "accent": string;
  /**
   * @format color
   * @description Will be a darker tone of accent if not specified
   */
  "accent-focus"?: string;
  /**
   * @format color
   * @description Will be a readable tone of accent if not specified
   */
  "accent-content"?: string;

  /**
   * @format color
   * @default #333333
   */
  "neutral": string;
  /**
   * @format color
   * @description Will be a darker tone of neutral if not specified
   */
  "neutral-focus"?: string;
  /**
   * @format color
   * @description Will be a readable tone of neutral if not specified
   */
  "neutral-content"?: string;

  /**
   * @format color
   * @default #FFFFFF
   */
  "base-100": string;
  /**
   * @format color
   * @description Will be a darker tone of base-100 if not specified
   */
  "base-200"?: string;
  /**
   * @format color
   * @description Will be a darker tone of base-200 if not specified
   */
  "base-300"?: string;
  /**
   * @format color
   * @description Will be a readable tone of base-100 if not specified
   */
  "base-content"?: string;

  /**
   * @format color
   * @default #EAFAF2
   */
  "success": string;
  /**
   * @format color
   * @description Will be a readable success of neutral if not specified
   */
  "success-content"?: string;

  /**
   * @format color
   * @default #FFF8E6
   */
  "warning": string;
  /**
   * @format color
   * @description Will be a readable tone of warning if not specified
   */
  "warning-content"?: string;

  /**
   * @format color
   * @default #FFE9E5
   */
  "error": string;
  /**
   * @format color
   * @description Will be a readable tone of error if not specified
   */
  "error-content"?: string;

  /**
   * @format color
   * @default #F0F5FF
   */
  "info": string;
  /**
   * @format color
   * @description Will be a readable tone of info if not specified
   */
  "info-content"?: string;
}

export interface Props {
  colors: Colors;
}

const darken = (color: Color, percentage = 0.2) => color.darken(percentage);

const contrasted = (color: Color, percentage = 0.8) =>
  color.isDark()
    ? color.mix(Color.rgb(255, 255, 255), percentage).saturate(.10)
    : color.mix(Color.rgb(0, 0, 0), percentage).saturate(.10);

const THEME_DEFAULT = {
  "primary": "#003232",
  "secondary": "#8C3D3D",
  "accent": "#00FF7F",
  "neutral": "#333333",
  "base-100": "#FFFFFF",
  "success": "#EAFAF2",
  "warning": "#FFF8E6",
  "error": "#FFE9E5",
  "info": "#F0F5FF",
};

export const createPallet = (
  theme: Colors = THEME_DEFAULT,
): Required<Colors> => ({
  ...theme,

  "primary-focus": theme["primary-focus"] ??
    darken(Color.string(theme["primary"])).string(),
  "primary-content": theme["primary-content"] ??
    contrasted(Color.string(theme["primary"])).string(),

  "secondary-focus": theme["secondary-focus"] ??
    darken(Color.string(theme["secondary"])).string(),
  "secondary-content": theme["secondary-content"] ??
    contrasted(Color.string(theme["secondary"])).string(),

  "accent-focus": theme["accent-focus"] ??
    darken(Color.string(theme["accent"])).string(),
  "accent-content": theme["accent-content"] ??
    contrasted(Color.string(theme["accent"])).string(),

  "neutral-focus": theme["neutral-focus"] ??
    darken(Color.string(theme["neutral"])).string(),
  "neutral-content": theme["neutral-content"] ??
    contrasted(Color.string(theme["neutral"])).string(),

  "base-200": theme["base-200"] ??
    darken(Color.string(theme["base-100"]), 0.1).string(),
  "base-300": theme["base-300"] ??
    darken(Color.string(theme["base-100"]), 0.5).string(),
  "base-content": theme["base-content"] ??
    contrasted(Color.string(theme["base-100"])).string(),

  "success-content": theme["success-content"] ??
    contrasted(Color.string(theme["success"])).string(),
  "warning-content": theme["warning-content"] ??
    contrasted(Color.string(theme["warning"])).string(),
  "error-content": theme["error-content"] ??
    contrasted(Color.string(theme["error"])).string(),
  "info-content": theme["info-content"] ??
    contrasted(Color.string(theme["info"])).string(),
});

/**
 * This section merges the DESIGN_SYTEM variable with incoming props into a css sheet with variables, i.e.
 * this function transforms props into
 *
 * :root {
 *   --color-primary: #FFFFFF;
 *   --color-secondary: "#161616"
 * }
 */
function Section({ colors }: Props) {
  const pallet = createPallet({ ...THEME_DEFAULT, ...colors });

  return (
    <Head>
      <style
        id="__DECO_DESIGN_SYSTEM"
        dangerouslySetInnerHTML={{
          __html: `:root {${
            Object.entries(pallet)
              .map(([key, value]) => `--color-${key}: ${value}`)
              .join("; ")
          }}`,
        }}
      />
    </Head>
  );
}

const typography = [
  "heading-1",
  "heading-2",
  "heading-3",
  "menu",
  "button",
  "body",
  "caption",
  "list-price",
] as const;

const buttons = [
  ["primary", "Primary"],
  ["secondary", "Secondary"],
  ["tertiary", "tertiary"],
  [
    "icon",
    <Icon id="ShoppingCart" width={20} height={20} strokeWidth={2} />,
  ],
] as const;

const icons = [
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "ChevronDown",
  "QuestionMarkCircle",
  "User",
  "ShoppingCart",
  "Bars3",
  "Heart",
  "MagnifyingGlass",
  "XMark",
  "Elo",
  "Mastercard",
  "Visa",
  "Pix",
  "Logo",
  "Facebook",
  "Instagram",
  "Tiktok",
  "Truck",
  "Discount",
  "Return",
  "CreditCard",
  "Deco",
  "Discord",
  "FilterList",
  "Plus",
  "Minus",
  "MapPin",
  "Phone",
  "Trash",
  "WhatsApp",
  "ArrowsPointingOut",
] as const;

// export const preview = async (...args) => {
//   const json = await fetch("http://localhost:8000/?asJson").then((res) =>
//     res.json()
//   );
//   const pageId = json.page.metadata.id;

//   console.log("Im here", Deno.inspect(args, { colors: true, depth: 2 }));
// };

export function Preview(props: Props) {
  return (
    <>
      <Section {...props} />

      <div class="p-4 bg-base-100">
        <div class="flex flex-wrap gap-10 items-center">
          <div class="flex flex-row gap-1 items-center">
            <Button variant="primary">primary</Button>
            <Button variant="outline">outline</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="icon">
              <Icon id="Bars3" strokeWidth={0.1} size={20} />
            </Button>
          </div>

          <div class="flex flex-row gap-1 items-center">
            <Button variant="primary" disabled>primary</Button>
            <Button variant="outline" disabled>outline</Button>
            <Button variant="ghost" disabled>ghost</Button>
            <Button variant="icon" disabled>
              <Icon id="Bars3" strokeWidth={0.1} size={20} />
            </Button>
          </div>

          <div class="flex flex-row gap-1 items-center">
            <Button variant="primary" loading>primary</Button>
            <Button variant="outline" loading>outline</Button>
            <Button variant="ghost" loading>ghost</Button>
            <Button variant="icon" loading>
              <Icon id="Bars3" strokeWidth={0.1} size={20} />
            </Button>
          </div>

          <div class="flex flex-row gap-1 items-center">
            <Avatar variant="color" content="branca" />
            <Avatar variant="color" content="preta" />
            <Avatar variant="color" content="azul-marinho" />

            <Avatar variant="abbreviation" content="P" />
            <Avatar variant="abbreviation" content="M" />
          </div>

          <QuantitySelector quantity={10} />

          <div class="w-min">
            <Breadcrumb
              itemListElement={[
                {
                  "@type": "ListItem",
                  name: "Segment A",
                  item: "http://localhost:8000/a",
                  position: 1,
                },
                {
                  "@type": "ListItem",
                  name: "Segment B",
                  item: "http://localhost:8000/a/b",
                  position: 2,
                },
              ]}
            />
          </div>

          <div class="flex flex-col ">
            <Text variant="heading-1">heading-1</Text>
            <Text variant="heading-2">heading-2</Text>
            <Text variant="heading-3">heading-3</Text>
            <Text variant="menu">menu</Text>
            <Text variant="button">button</Text>
            <Text variant="body">body</Text>
            <Text variant="caption">caption</Text>
            <Text variant="list-price">list-price</Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
