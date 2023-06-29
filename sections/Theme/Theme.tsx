/**
 * Theme generator inspired by Daisy UI:
 * Copyright (c) 2020 Pouya Saadeghi
 * License: MIT (https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/LICENSE)
 * https://github.com/saadeghi/daisyui/blob/37bca23444bc9e4d304362c14b7088f9a08f1c74/src/docs/src/routes/theme-generator.svelte
 */
import { Color } from "https://deno.land/x/color@v0.3.0/mod.ts";
import { useId } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";

export interface MainColors {
  /**
   * @format color
   * @title Base
   * @default #FFFFFF
   */
  "base-100": string;
  /**
   * @format color
   * @title Primary
   * @default #003232
   */
  "primary": string;
  /**
   * @format color
   * @title Scondary
   * @default #8C3D3D
   */
  "secondary": string;
  /**
   * @format color
   * @title Tertiary
   * @default #00FF7F
   */
  "tertiary": string;
}

export interface ComplementaryColors {
  base?: BaseColorOptional;
  primary?: PrimaryColorOptional;
  secondary?: SecondaryColorOptional;
  tertiary?: TertiaryColorOptional;
}

export interface BaseColorOptional {
  /**
   * @format color
   */
  "base-200"?: string;
  /**
   * @format color
   */
  "base-300"?: string;
  /**
   * @format color
   */
  "base-content"?: string;
}

export interface PrimaryColorOptional {
  /**
   * @format color
   * @title Hover
   */
  "primary-focus"?: string;
  /**
   * @format color
   * @title Content
   */
  "primary-content"?: string;
}

export interface SecondaryColorOptional {
  /**
   * @format color
   * @title Hover
   */
  "secondary-focus"?: string;
  /**
   * @format color
   * @title Content
   */
  "secondary-content"?: string;
}

export interface TertiaryColorOptional {
  /**
   * @format color
   * @title Hover
   */
  "tertiary-focus"?: string;
  /**
   * @format color
   * @title Content
   */
  "tertiary-content"?: string;
}

export interface OtherOptionalColors {
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

export interface SystemColors {
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
   * @default 0.2rem
   * @title Radius
   * @description Button and similar elements
   */
  "--rounded-btn": "0" | "0.2rem" | "0.4rem" | "0.8rem" | "2rem";
  /**
   * @default normal-case
   * @title Text transform
   */
  "--btn-text-case": "normal-case" | "uppercase" | "lowercase" | "capitalize";
  /**
   * @default 0.95
   * @title Scale on click
   */
  "--btn-focus-scale": "0.9" | "0.95" | "1" | "1.05" | "1.1" ;
}

export interface Miscellaneous {
  /**
   * @default 0.25s
   * @title Animation
   * @description Duration when you click
   */
  "--animation-btn": "0.1s" | "0.15s" | "0.2s" | "0.25s" | "0.3s" | "0.35s";
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
  fontFamily?: string;
  /**
   * @default @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;700&display=swap');
   * \@format css
   */
  styleInnerHtml?: string;
}

export interface Props {
  mainColors?: MainColors;
  /** These colors are automatically generated with darker tons of their originals */
  complementaryColors?: ComplementaryColors;
  buttonStyle?: Button;
  fonts?: Font;
}

type Theme =
  MainColors &
  PrimaryColorOptional &
  SecondaryColorOptional &
  TertiaryColorOptional &
  BaseColorOptional &
  Button &
  SystemColors &
  OtherOptionalColors &
  Miscellaneous;

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
  "--rounded-btn": "0.2rem" as const, // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s" as const, // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-text-case": "uppercase" as const, // set default text transform for buttons
  "--btn-focus-scale": "0.95" as const, // scale transform of button when you focus on it
  "--border-btn": "1px" as const, // border width of buttons
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
  mainColors,
  complementaryColors,
  buttonStyle,
  fonts,
}: Props) {
  const id = useId();
  const theme = {
    ...defaultTheme,
    ...mainColors,
    ...complementaryColors?.base,
    ...complementaryColors?.primary,
    ...complementaryColors?.secondary,
    ...complementaryColors?.tertiary,
    ...buttonStyle,
    ...fonts,
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
      <div class="grid">
        <div class="grid md:grid-flow-col gap-10 p-6 lg:p-10 bg-base-100 text-base-content justify-center">
          <div class="flex flex-col gap-2 max-w-[22rem]">
            <div class="text-4xl">Your site, beautiful.</div>
            <div>
              Aesthetics create a visually pleasing and engaging environment, establish brand identity, improve readability, and evoke positive emotional responses, ultimately enhancing user engagement and satisfaction.
            </div>
          </div>
          <div class="grid grid-flow-row gap-6 justify-center">
            <div class="flex flex-wrap gap-x-2 md:gap-x-4 items-baseline">
              <div class="text-4xl">Size 1</div>{" "}
              <div class="text-3xl">Size 2</div>{" "}
              <div class="text-2xl">Size 3</div>{" "}
              <div class="text-xl">Size 4</div>{" "}
              <div class="text-lg">Size 5</div>{" "}
              <div class="text-base">Size 6</div>{" "}
              <div class="text-sm">Size 7</div>{" "}
              <div class="text-xs">Size 8</div>
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn">Base</button>{" "}
              <button class="btn btn-primary">Primary</button>{" "}
              <button class="btn btn-secondary">Secondary</button>{" "}
              <button class="btn btn-accent">Tertiary</button>{" "}
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn btn-outline">Base</button>{" "}
              <button class="btn btn-primary btn-outline">Primary</button>{" "}
              <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
              <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
            </div>{" "}
            <div class="flex gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex gap-4">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>{" "}
        </div>{" "}

        <div class="grid md:grid-flow-col gap-10 p-6 lg:p-10 bg-base-content text-base-100 justify-center">
          <div class="flex flex-col gap-2 max-w-[22rem]">
            <div class="text-4xl">Your site, colorful.</div>
            <div>
              Colors evoke emotions, guide user attention, enhance readability, and reinforce brand identity, resulting in a visually appealing and engaging user interface.
            </div>
          </div>
          <div class="grid grid-flow-row gap-6 justify-center">
            <div class="flex flex-wrap gap-x-2 md:gap-x-4 items-baseline">
              <div class="text-4xl">Size 1</div>{" "}
              <div class="text-3xl">Size 2</div>{" "}
              <div class="text-2xl">Size 3</div>{" "}
              <div class="text-xl">Size 4</div>{" "}
              <div class="text-lg">Size 5</div>{" "}
              <div class="text-base">Size 6</div>{" "}
              <div class="text-sm">Size 7</div>{" "}
              <div class="text-xs">Size 8</div>
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn">Base</button>{" "}
              <button class="btn btn-primary">Primary</button>{" "}
              <button class="btn btn-secondary">Secondary</button>{" "}
              <button class="btn btn-accent">Tertiary</button>{" "}
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn btn-primary btn-outline">Primary</button>{" "}
              <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
              <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
            </div>{" "}
            <div class="flex gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex gap-4">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>{" "}
        </div>{" "}

        <div class="grid md:grid-flow-col gap-10 p-6 lg:p-10 bg-primary text-primary-content justify-center">
          <div class="flex flex-col gap-2 max-w-[22rem]">
            <div class="text-4xl">Your site, consistent.</div>
            <div>
              Consistency simplifies user navigation, reduces cognitive effort, reinforces brand identity, and ultimately leads to improved user satisfaction and engagement.
            </div>
          </div>
          <div class="grid grid-flow-row gap-6 justify-center">
            <div class="flex flex-wrap gap-x-2 md:gap-x-4 items-baseline">
              <div class="text-4xl">Size 1</div>{" "}
              <div class="text-3xl">Size 2</div>{" "}
              <div class="text-2xl">Size 3</div>{" "}
              <div class="text-xl">Size 4</div>{" "}
              <div class="text-lg">Size 5</div>{" "}
              <div class="text-base">Size 6</div>{" "}
              <div class="text-sm">Size 7</div>{" "}
              <div class="text-xs">Size 8</div>
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn">Base</button>{" "}
              <button class="btn btn-secondary">Secondary</button>{" "}
              <button class="btn btn-accent">Tertiary</button>{" "}
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn btn-outline">Base</button>{" "}
              <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
              <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
            </div>{" "}
            <div class="flex gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex gap-4">
              <div class="text-base">Content</div>
              <div class="text-base text-secondary">Secondary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>{" "}
        </div>{" "}

        <div class="grid md:grid-flow-col gap-10 p-6 lg:p-10 bg-secondary text-secondary-content justify-center">
          <div class="flex flex-col gap-2 max-w-[22rem]">
            <div class="text-4xl">Your site, dynamic.</div>
            <div>
              Animations engage users, provide visual cues, enhance interactivity, and contribute to a dynamic and memorable browsing experience, ultimately improving user satisfaction.
            </div>
          </div>
          <div class="grid grid-flow-row gap-6 justify-center">
            <div class="flex flex-wrap gap-x-2 md:gap-x-4 items-baseline">
              <div class="text-4xl">Size 1</div>{" "}
              <div class="text-3xl">Size 2</div>{" "}
              <div class="text-2xl">Size 3</div>{" "}
              <div class="text-xl">Size 4</div>{" "}
              <div class="text-lg">Size 5</div>{" "}
              <div class="text-base">Size 6</div>{" "}
              <div class="text-sm">Size 7</div>{" "}
              <div class="text-xs">Size 8</div>
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn">Base</button>{" "}
              <button class="btn btn-primary">Primary</button>{" "}
              <button class="btn btn-accent">Tertiary</button>{" "}
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn btn-outline">Base</button>{" "}
              <button class="btn btn-primary btn-outline">Primary</button>{" "}
              <button class="btn btn-accent btn-outline">Tertiary</button>{" "}
            </div>{" "}
            <div class="flex gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-accent">Tertiary</span>{" "}
            </div>{" "}
            <div class="flex gap-4">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-accent">Tertiary</div>
            </div>{" "}
          </div>{" "}
        </div>{" "}

        <div class="grid md:grid-flow-col gap-10 p-6 lg:p-10 bg-accent text-accent-content justify-center">
          <div class="flex flex-col gap-2 max-w-[22rem]">
            <div class="text-4xl">Your site, fast.</div>
            <div>
              Speed performance affects user satisfaction, engagement, conversion rates, and search engine visibility. Faster-loading websites provide a seamless browsing experience, reduce bounce rates, and improve usability.
            </div>
          </div>
          <div class="grid grid-flow-row gap-6 justify-center">
            <div class="flex flex-wrap gap-x-2 md:gap-x-4 items-baseline">
              <div class="text-4xl">Size 1</div>{" "}
              <div class="text-3xl">Size 2</div>{" "}
              <div class="text-2xl">Size 3</div>{" "}
              <div class="text-xl">Size 4</div>{" "}
              <div class="text-lg">Size 5</div>{" "}
              <div class="text-base">Size 6</div>{" "}
              <div class="text-sm">Size 7</div>{" "}
              <div class="text-xs">Size 8</div>
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn">Base</button>{" "}
              <button class="btn btn-primary">Primary</button>{" "}
              <button class="btn btn-secondary">Secondary</button>{" "}
            </div>{" "}
            <div class="grid md:grid-flow-col gap-3">
              <button class="btn btn-outline">Base</button>{" "}
              <button class="btn btn-primary btn-outline">Primary</button>{" "}
              <button class="btn btn-secondary btn-outline">Secondary</button>{" "}
            </div>{" "}
            <div class="flex gap-2">
              <span class="badge">Base</span>{" "}
              <span class="badge badge-primary">Primary</span>{" "}
              <span class="badge badge-secondary">Secondary</span>{" "}
            </div>{" "}
            <div class="flex gap-4">
              <div class="text-base">Content</div>
              <div class="text-base text-primary">Primary</div>
              <div class="text-base text-secondary">Secondary</div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Section;
