/**
 * Theme generator inspired by Daisy UI:
 * Copyright (c) 2020 Pouya Saadeghi
 * License: MIT (https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/LICENSE)
 * https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/src/docs/src/routes/theme-generator.svelte
 */
import { Color } from "https://deno.land/x/color@v0.3.0/mod.ts";
import { useId } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";
import { theme as defaultTheme } from "deco-sites/fashion/tailwind.config.ts";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

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

export interface Miscellaneous {
  /**
   * @default 1rem
   * @title Rounded box
   * @description border radius rounded-box utility class, used in card and other large boxes
   */
  "--rounded-box": string;
  /**
   * @default 0.5rem
   * @title Rounded button
   * @description border radius rounded-dui-btn utility class, used in buttons and similar element
   */
  "--rounded-dui-btn": string;
  /**
   * @default 1.9rem
   * @title Rounded badge
   * @description border radius rounded-badge utility class, used in badges and similar
   */
  "--rounded-badge": string;
  /**
   * @default 0.25s
   * @title Animation button
   * @description duration of animation when you click on button
   */
  "--animation-dui-btn": string;
  /**
   * @default 0.2s
   * @title Animation input
   * @description duration of animation for inputs like checkbox, toggle, radio, etc
   */
  "--animation-input": string;
  /**
   * @default uppercase
   * @title Button text case
   * @description set default text transform for buttons
   */
  "--dui-btn-text-case": string;
  /**
   * @default 0.95
   * @title Button focus scale
   * @description scale transform of button when you focus on it
   */
  "--dui-btn-focus-scale": string;
  /**
   * @default 1px
   * @title Border button
   * @description border width of buttons
   */
  "--border-dui-btn": string;
  /**
   * @default 1px
   * @title Tab border
   * @description border width of tabs
   */
  "--tab-border": string;
  /**
   * @default 0.5rem
   * @title Tab radius
   * @description border radius of tabs
   */
  "--tab-radius": string;
}

export interface Font {
  /**
   * @default 'Albert Sans'
   */
  fontFamily: string;
  /**
   * @default @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700&display=swap');
   * \@format css
   */
  styleInnerHtml: string;
}

export interface Props {
  colors?: Colors;
  miscellaneous?: Miscellaneous;
  fonts?: Font;
}

type Theme = Colors & Miscellaneous;

const darken = (color: string, percentage = 0.2) =>
  Color.string(color).darken(percentage);

const contrasted = (color: string, percentage = 0.8) => {
  const c = Color.string(color);

  return c.isDark()
    ? c.mix(Color.rgb(255, 255, 255), percentage).saturate(.1)
    : c.mix(Color.rgb(0, 0, 0), percentage).saturate(.1);
};

const toVariables = (t: Theme): [string, string][] => {
  const toValue = (color: string | Color) => {
    const hsl = typeof color === "string" ? Color.string(color) : color;
    return `${hsl.hue()} ${hsl.saturation()}% ${hsl.lightness()}%`;
  };

  const colorVariables = Object.entries({
    "--p": t["primary"],
    "--pf": t["primary-focus"] ?? darken(t["primary"]),
    "--pc": t["primary-content"] ?? contrasted(t["primary"]),

    "--s": t["secondary"],
    "--sf": t["secondary-focus"] ?? darken(t["secondary"]),
    "--sc": t["secondary-content"] ?? contrasted(t["secondary"]),

    "--a": t["accent"],
    "--af": t["accent-focus"] ?? darken(t["accent"]),
    "--ac": t["accent-content"] ?? contrasted(t["accent"]),

    "--n": t["neutral"],
    "--nf": t["neutral-focus"] ?? darken(t["neutral"]),
    "--nc": t["neutral-content"] ?? contrasted(t["neutral"]),

    "--b1": t["base-100"],
    "--b2": t["base-200"] ?? darken(t["base-100"], 0.1),
    "--b3": t["base-300"] ?? darken(t["base-100"], 0.5),
    "--bc": t["base-content"] ?? contrasted(t["base-100"]),

    "--su": t["success"],
    "--suc": t["success-content"] ?? contrasted(t["success"]),

    "--wa": t["warning"],
    "--wac": t["warning-content"] ?? contrasted(t["warning"]),

    "--er": t["error"],
    "--erc": t["error-content"] ?? contrasted(t["error"]),

    "--in": t["info"],
    "--inc": t["info-content"] ?? contrasted(t["info"]),
  }).map(([key, color]) => [key, toValue(color)] as [string, string]);

  const miscellaneousVariables = Object.entries({
    "--rounded-box": t["--rounded-box"],
    "--rounded-dui-btn": t["--rounded-dui-btn"],
    "--rounded-badge": t["--rounded-badge"],
    "--animation-dui-btn": t["--animation-dui-btn"],
    "--animation-input": t["--animation-input"],
    "--dui-btn-text-case": t["--dui-btn-text-case"],
    "--dui-btn-focus-scale": t["--dui-btn-focus-scale"],
    "--border-dui-btn": t["--border-dui-btn"],
    "--tab-border": t["--tab-border"],
    "--tab-radius": t["--tab-radius"],
  });

  return [...colorVariables, ...miscellaneousVariables];
};

/**
 * This section merges the DESIGN_SYTEM variable with incoming props into a css sheet with variables, i.e.
 * this function transforms props into
 *
 * :root {
 *   --color-primary: #FFFFFF;
 *   --color-secondary: "#161616"
 * }
 */
function Section({
  colors,
  miscellaneous,
  fonts = {
    fontFamily: "Albert Sans",
    styleInnerHtml:
      "@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700&display=swap');",
  },
}: Props) {
  const id = useId();
  const theme = { ...defaultTheme, ...colors, ...miscellaneous };
  const variables = [...toVariables(theme), ["--font-family", fonts.fontFamily]]
    .map(([cssVar, value]) => `${cssVar}: ${value}`)
    .join(";");

  return (
    <Head>
      <meta name="theme-color" content={theme["primary"]} />
      <meta name="msapplication-TileColor" content={theme["primary"]} />
      <style
        id={`__DESIGN_SYSTEM_FONT-${id}`}
        dangerouslySetInnerHTML={{ __html: fonts.styleInnerHtml }}
      />
      <style
        id={`__DESIGN_SYSTEM_VARS-${id}`}
        dangerouslySetInnerHTML={{
          __html: `:root {${variables}}`,
        }}
      />
    </Head>
  );
}

export function Preview(props: Props) {
  return (
    <>
      <Section {...props} />
    </>
  );
}

export default Section;
