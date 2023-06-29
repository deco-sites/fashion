/**
 * Theme generator inspired by Daisy UI:
 * Copyright (c) 2020 Pouya Saadeghi
 * License: MIT (https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/LICENSE)
 * https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/src/docs/src/routes/theme-generator.svelte
 */
import { Color } from "https://deno.land/x/color@v0.3.0/mod.ts";
import { useId } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface BaseColors {
  /**
   * @format color
   * @default #FFFFFF
   */
  "base-100": string;
  /**
   * @format color
   * @description Default: darker tone of base-100
   */
  "base-200"?: string;
  /**
   * @format color
   * @description Default: darker tone of base-200
   */
  "base-300"?: string;
  /**
   * @format color
   * @description Default: readable tone of base-100
   */
  "base-content"?: string;
}

export interface PrimaryColor {
  /**
   * @format color
   * @title Color
   * @default #003232
   */
  "primary": string;
  /**
   * @format color
   * @title Hover color
   * @description Default: darker tone of primary
   */
  "primary-focus"?: string;
  /**
   * @format color
   * @title Content color
   * @description Default: readable tone of primary
   */
  "primary-content"?: string;
}

export interface SecondaryColor {
  /**
   * @format color
   * @title Color
   * @default #8C3D3D
   */
  "secondary": string;
  /**
   * @format color
   * @title Hover color
   * @description Default: darker tone of secondary
   */
  "secondary-focus"?: string;
  /**
   * @format color
   * @title Content color
   * @description Default: readable tone of secondary
   */
  "secondary-content"?: string;
}

export interface TertiaryColor {
  /**
   * @format color
   * @title Color
   * @default #00FF7F
   */
  "tertiary": string;
  /**
   * @format color
   * @title Hover color
   * @description Default: darker tone of tertiary
   */
  "tertiary-focus"?: string;
  /**
   * @format color
   * @title Content color
   * @description Default: readable tone of tertiary
   */
  "tertiary-content"?: string;
}

export interface OptionalColors {
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
   * @description Will be a readable success of neutral if not specified
   */
    "success-content"?: string;

    /**
     * @format color
     * @description Will be a readable tone of warning if not specified
     */
    "warning-content"?: string;
  
    /**
     * @format color
     * @description Will be a readable tone of error if not specified
     */
    "error-content"?: string;
  
    /**
     * @format color
     * @description Will be a readable tone of info if not specified
     */
    "info-content"?: string;
  
}

export interface Colors {
  /**
   * @format color
   * @default #333333
   */
  "neutral": string;

    /**
   * @format color
   * @default #EAFAF2
   */
    "success": string;

    /**
     * @format color
     * @default #FFF8E6
     */
    "warning": string;
  
    /**
     * @format color
     * @default #FFE9E5
     */
    "error": string;
  
    /**
     * @format color
     * @default #F0F5FF
     */
    "info": string;
  
}

export interface Button {
  /**
   * @default 1px
   * @title Border width
   */
  "--border-btn": "1px" | "2px" | "3px" | "4px" | "5px" | "6px" | "7px" | "8px";
  /**
   * @default 0.5rem
   * @title Radius
   * @description Button and similar elements
   */
  "--rounded-btn": string;
  /**
   * @default normal-case
   * @title Text transform
   */
  "--btn-text-case": "normal-case" | "uppercase" | "lowercase" | "capitalize";
  /**
   * @default 0.95
   * @title Scale on click
   */
  "--btn-focus-scale": string ;
}

export interface Miscellaneous {
  /**
   * @default 0.25s
   * @title Animation
   * @description Duration when you click
   */
  "--animation-btn": "0.1s" | "0.15s" | "0.2s" | "0.3s" | "0.35s";
  /**
   * @default 1rem
   * @title Rounded box
   * @description border radius rounded-box utility class, used in card and other large boxes
   */
  "--rounded-box": string;
  /**
   * @default 1.9rem
   * @title Rounded badge
   * @description border radius rounded-badge utility class, used in badges and similar
   */
  "--rounded-badge": string;
  /**
   * @default 0.2s
   * @title Animation input
   * @description duration of animation for inputs like checkbox, toggle, radio, etc
   */
  "--animation-input": string;
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
  baseColors?: BaseColors;
  primaryColor?: PrimaryColor;
  secondaryColor?: SecondaryColor;
  tertiaryColor?: TertiaryColor;
  buttonStyle?: Button;
  fonts?: Font;
}

type Theme = PrimaryColor & SecondaryColor & TertiaryColor & BaseColors & Colors & OptionalColors & Miscellaneous;

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

    "--a": t["tertiary"],
    "--af": t["tertiary-focus"] ?? darken(t["tertiary"]),
    "--ac": t["tertiary-content"] ?? contrasted(t["tertiary"]),

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
    "--rounded-btn": t["--rounded-btn"],
    "--rounded-badge": t["--rounded-badge"],
    "--animation-btn": t["--animation-btn"],
    "--animation-input": t["--animation-input"],
    "--btn-text-case": t["--btn-text-case"],
    "--btn-focus-scale": t["--btn-focus-scale"],
    "--border-btn": t["--border-btn"],
    "--tab-border": t["--tab-border"],
    "--tab-radius": t["--tab-radius"],
  });

  return [...colorVariables, ...miscellaneousVariables];
};

const defaultTheme = {
  "primary": "hsla(209, 28%, 21%, 1)",
  "primary-content": "hsla(0, 0%, 100%, 1)",
  "secondary": "hsla(104, 18%, 46%, 1)",
  "secondary-content": "hsla(0, 0%, 100%, 1)",
  "tertiary": "hsla(8, 69%, 65%, 1)",
  "tertiary-content": "hsla(0, 0%, 100%, 1)",
  "neutral": "hsla(0, 0%, 47%, 1)",
  "base-100": "hsla(0, 0%, 100%, 1)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",

  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase", // set default text transform for buttons
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
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
  baseColors,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  buttonStyle,
  fonts,
}: Props) {
  const id = useId();
  const theme = {
    ...defaultTheme,
    ...baseColors,
    ...primaryColor,
    ...secondaryColor,
    ...tertiaryColor,
    ...buttonStyle,
  };
  const variables = [
    ...toVariables(theme),
    [
      "--font-family",
      fonts?.fontFamily ??
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    ],
  ]
    .map(([cssVar, value]) => `${cssVar}: ${value}`)
    .join(";");

  return (
    <Head>
      <meta name="theme-color" content={theme["primary"]} />
      <meta name="msapplication-TileColor" content={theme["primary"]} />
      <style
        type="text/css"
        id={`__DESIGN_SYSTEM_FONT-${id}`}
        dangerouslySetInnerHTML={{ __html: fonts?.styleInnerHtml ?? "" }}
      />
      <style
        type="text/css"
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
      <div class="grid lg:grid-cols-2">
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-base-100 text-base-content">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-base-200 text-base-content">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>

      <div class="grid lg:grid-cols-2">
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-base-300 text-base-100">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-base-content text-base-100">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>

      <div class="grid lg:grid-cols-2">
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-primary text-primary-content">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-secondary text-secondary-content">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>

      <div class="grid lg:grid-cols-2">
        <div class="grid grid-flow-col justify-stretch gap-2 md:gap-4 p-4 bg-accent text-accent-content">
          <div class="flex flex-col gap-1 justify-center">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
          </div>{" "}
          <div class="flex flex-col gap-3 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
          </div>{" "}
          <div class="flex md:flex-col gap-4 justify-center">
            <div class="flex flex-col gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
            </div>{" "}
            <div class="flex flex-col">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>


      <div class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div class="flex flex-grow flex-col gap-3 p-4">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 bg-base-content text-base-100">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 bg-primary text-primary-content p-4">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 bg-secondary text-secondary-content p-4">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 bg-accent text-accent-content p-4">
            <div class="text-4xl">Size 1</div>{" "}
            <div class="text-3xl">Size 2</div>{" "}
            <div class="text-2xl">Size 3</div>{" "}
            <div class="text-xl">Size 4</div>{" "}
            <div class="text-lg">Size 5</div>{" "}
            <div class="text-base">Size 6</div>{" "}
            <div class="text-sm">Size 7</div>{" "}
            <div class="text-xs">Size 8</div>
          </div>{" "}
        </div>{" "}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center">
            <div class="text-base text-base-content">Base-content</div>
            <div class="text-base text-primary">Primary</div>
            <div class="text-base text-secondary">Secondary</div>
            <div class="text-base text-accent">Tertiary</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 bg-base-content justify-center">
            <div class="text-base text-base-100">Base-100</div>
            <div class="text-base text-primary">Primary</div>
            <div class="text-base text-secondary">Secondary</div>
            <div class="text-base text-accent">Tertiary</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 bg-primary justify-center">
            <div class="text-base text-primary-content">Primary-content</div>
            <div class="text-base text-secondary">Secondary</div>
            <div class="text-base text-accent">Tertiary</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 bg-secondary justify-center">
            <div class="text-base text-secondary-content">Secondary-content</div>
            <div class="text-base text-primary">Primary</div>
            <div class="text-base text-accent">Tertiary</div>
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 bg-accent justify-center">
            <div class="text-base text-accent-content">Tertiary-content</div>
            <div class="text-base text-primary">Primary</div>
            <div class="text-base text-secondary">Secondary</div>
          </div>{" "}
        </div>{" "}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center">
            <span class="badge">Base</span>{" "}
            <span class="badge badge-primary">Primary</span>{" "}
            <span class="badge badge-secondary">Secondary</span>{" "}
            <span class="badge badge-accent">Tertiary</span>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-base-content">
            <span class="badge">Base</span>{" "}
            <span class="badge badge-primary">Primary</span>{" "}
            <span class="badge badge-secondary">Secondary</span>{" "}
            <span class="badge badge-accent">Tertiary</span>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-primary">
            <span class="badge">Base</span>{" "}
            <span class="badge badge-secondary">Secondary</span>{" "}
            <span class="badge badge-accent">Tertiary</span>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-secondary">
            <span class="badge">Base</span>{" "}
            <span class="badge badge-primary">Primary</span>{" "}
            <span class="badge badge-accent">Tertiary</span>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-accent">
            <span class="badge">Base</span>{" "}
            <span class="badge badge-primary">Primary</span>{" "}
            <span class="badge badge-secondary">Secondary</span>{" "}
          </div>{" "}
        </div>{" "}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-base-content">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-primary">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-secondary">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-accent">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-accent">
            <button class="btn">Base</button>{" "}
            <button class="btn btn-primary">Primary</button>{" "}
            <button class="btn btn-secondary">Secondary</button>{" "}
          </div>{" "}
        </div>{" "}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-base-content">
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-primary">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-secondary">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
          </div>{" "}
          <div class="flex flex-grow flex-col gap-3 p-4 justify-center bg-accent">
            <button class="btn btn-outline">Base</button>{" "}
            <button class="btn btn-primary btn-outline">Primary</button>{" "}
            <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Section;
