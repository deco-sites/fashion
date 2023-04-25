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
   * @description border radius rounded-btn utility class, used in buttons and similar element
   */
  "--rounded-btn": string;
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
  "--animation-btn": string;
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
  "--btn-text-case": string;
  /**
   * @default 0.95
   * @title Button focus scale
   * @description scale transform of button when you focus on it
   */
  "--btn-focus-scale": string;
  /**
   * @default 1px
   * @title Border button
   * @description border width of buttons
   */
  "--border-btn": string;
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
      <div class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
          <button class="btn">Default</button>{" "}
          <button class="btn btn-primary">Primary</button>{" "}
          <button class="btn btn-secondary">Secondary</button>{" "}
          <button class="btn btn-accent">Accent</button>{" "}
          <button class="btn btn-info">Info</button>{" "}
          <button class="btn btn-success">Success</button>{" "}
          <button class="btn btn-warning">Warning</button>{" "}
          <button class="btn btn-error">Error</button>
        </div>{" "}
        <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
          <span class="badge">Default</span>{" "}
          <span class="badge badge-primary">Primary</span>{" "}
          <span class="badge badge-secondary">Secondary</span>{" "}
          <span class="badge badge-accent">Accent</span>{" "}
          <span class="badge badge-info">Info</span>{" "}
          <span class="badge badge-success">Success</span>{" "}
          <span class="badge badge-warning">Warning</span>{" "}
          <span class="badge badge-error">Error</span>
        </div>{" "}
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="md:w-1/2">
              <div class="tabs">
                <button class="tab tab-lifted">Tab</button>{" "}
                <button class="tab tab-lifted tab-active">Tab</button>
                <button class="tab tab-lifted">Tab</button>
              </div>{" "}
              <div class="flex flex-col">
                <span class="link">I'm a simple link</span>
                <span class="link link-primary">I'm a simple link</span>{" "}
                <span class="link link-secondary">I'm a simple link</span>{" "}
                <span class="link link-accent">I'm a simple link</span>
              </div>
            </div>{" "}
            <div class="flex flex-col gap-3 md:w-1/2">
              <progress value="20" max="100" class="progress">Default</progress>
              {" "}
              <progress value="25" max="100" class="progress progress-primary">
                Primary
              </progress>{" "}
              <progress
                value="30"
                max="100"
                class="progress progress-secondary"
              >
                Secondary
              </progress>{" "}
              <progress value="40" max="100" class="progress progress-accent">
                Accent
              </progress>{" "}
              <progress value="45" max="100" class="progress progress-info">
                Info
              </progress>{" "}
              <progress value="55" max="100" class="progress progress-success">
                Success
              </progress>{" "}
              <progress value="70" max="100" class="progress progress-warning">
                Warning
              </progress>{" "}
              <progress value="90" max="100" class="progress progress-error">
                Error
              </progress>
            </div>
          </div>{" "}
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="stats bg-base-300 border-base-300 border md:w-1/2">
              <div class="stat">
                <div class="stat-title">Total Page Views</div>{" "}
                <div class="stat-value">89,400</div>{" "}
                <div class="stat-desc">21% more than last month</div>
              </div>
            </div>{" "}
            <div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
              <div class="radial-progress" style="--value:60; --size:3.5rem;">
                60%
              </div>{" "}
              <div class="radial-progress" style="--value:75; --size:3.5rem;">
                75%
              </div>{" "}
              <div class="radial-progress" style="--value:90; --size:3.5rem;">
                90%
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="md:w-1/2">
              <div>
                <input type="checkbox" class="toggle" />{" "}
                <input type="checkbox" class="toggle toggle-primary" />{" "}
                <input type="checkbox" class="toggle toggle-secondary" />{" "}
                <input type="checkbox" class="toggle toggle-accent" />
              </div>{" "}
              <div>
                <input type="checkbox" class="checkbox" />{" "}
                <input type="checkbox" class="checkbox checkbox-primary" />{" "}
                <input type="checkbox" class="checkbox checkbox-secondary" />
                {" "}
                <input type="checkbox" class="checkbox checkbox-accent" />
              </div>{" "}
              <div>
                <input type="radio" name="radio-1" class="radio" />{" "}
                <input
                  type="radio"
                  name="radio-1"
                  class="radio radio-primary"
                />{" "}
                <input
                  type="radio"
                  name="radio-1"
                  class="radio radio-secondary"
                />{" "}
                <input type="radio" name="radio-1" class="radio radio-accent" />
              </div>
            </div>{" "}
            <div class="md:w-1/2">
              <input type="range" min="0" max="100" class="range range-xs" />
              {" "}
              <input
                type="range"
                min="0"
                max="100"
                class="range range-xs range-primary"
              />{" "}
              <input
                type="range"
                min="0"
                max="100"
                class="range range-xs range-secondary"
              />{" "}
              <input
                type="range"
                min="0"
                max="100"
                class="range range-xs range-accent"
              />
            </div>
          </div>{" "}
          <div class="flex flex-col gap-3 md:flex-row">
            <div class="flex flex-col gap-3 md:w-1/2">
              <input
                type="text"
                placeholder="Default"
                class="input input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Primary"
                class="input input-primary input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Secondary"
                class="input input-secondary input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Accent"
                class="input input-accent input-bordered w-full"
              />
            </div>{" "}
            <div class="flex flex-col gap-3 md:w-1/2">
              <input
                type="text"
                placeholder="Info"
                class="input input-info input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Success"
                class="input input-success input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Warning"
                class="input input-warning input-bordered w-full"
              />{" "}
              <input
                type="text"
                placeholder="Error"
                class="input input-error input-bordered w-full"
              />
            </div>
          </div>{" "}
          <div class="navbar bg-neutral text-neutral-content rounded-box">
            <div class="flex-none">
              <button class="btn btn-square btn-ghost">
                <Icon id="Bars3" strokeWidth={0.1} size={24} />
              </button>
            </div>{" "}
            <div class="flex-1">
              <button class="btn btn-ghost text-xl normal-case">deco.cx</button>
            </div>
          </div>{" "}
          <div class="flex gap-3">
            <div class="flex flex-grow flex-col gap-3">
              <div class="text-4xl font-bold">Text Size 1</div>{" "}
              <div class="text-3xl font-bold">Text Size 2</div>{" "}
              <div class="text-2xl font-bold">Text Size 3</div>{" "}
              <div class="text-xl font-bold">Text Size 4</div>{" "}
              <div class="text-lg font-bold">Text Size 5</div>{" "}
              <div class="text-sm font-bold">Text Size 6</div>{" "}
              <div class="text-xs font-bold">Text Size 7</div>
            </div>{" "}
            <ul class="steps steps-vertical">
              <li class="step step-primary">Step 1</li>{" "}
              <li class="step step-primary">Step 2</li>{" "}
              <li class="step">Step 3</li> <li class="step">Step 4</li>
            </ul>
          </div>
        </div>{" "}
        <div class="flex flex-col gap-3">
          <div class="alert">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-info h-6 w-6 flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                >
                </path>
              </svg>{" "}
              <span>12 unread messages. Tap to see.</span>
            </div>
          </div>{" "}
          <div class="alert alert-info">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6 flex-shrink-0 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                >
                </path>
              </svg>{" "}
              <span>New software update available.</span>
            </div>
          </div>{" "}
          <div class="alert alert-success">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                >
                </path>
              </svg>{" "}
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>{" "}
          <div class="alert alert-warning">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                >
                </path>
              </svg>{" "}
              <span>Warning: Invalid email address!</span>
            </div>
          </div>{" "}
          <div class="alert alert-error">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                >
                </path>
              </svg>{" "}
              <span>Error! Task failed successfully.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
