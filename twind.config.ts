/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twind.ts";

const gridCols = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-columns": template,
  };
};

const gridRows = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-rows": template,
  };
};

const scrollSnap = ([arg]: string[]) => {
  return {
    "scroll-snap-align": arg,
  };
};

const pallet = {
  "primary": "var(--color-primary)",
  "primary-focus": "var(--color-primary-focus)",
  "primary-content": "var(--color-primary-content)",

  "secondary": "var(--color-secondary)",
  "secondary-focus": "var(--color-secondary-focus)",
  "secondary-content": "var(--color-secondary-content)",

  "accent": "var(--color-accent)",
  "accent-focus": "var(--color-accent-focus)",
  "accent-content": "var(--color-accent-content)",

  "neutral": "var(--color-neutral)",
  "neutral-focus": "var(--color-neutral-focus)",
  "neutral-content": "var(--color-neutral-content)",

  "base-100": "var(--color-base-100)",
  "base-200": "var(--color-base-200)",
  "base-300": "var(--color-base-300)",
  "base-content": "var(--color-base-content)",

  "success": "var(--color-success)",
  "success-content": "var(--color-success-content)",

  "warning": "var(--color-warning)",
  "warning-content": "var(--color-warning-content)",

  "error": "var(--color-error)",
  "error-content": "var(--color-error-content)",

  "info": "var(--color-info)",
  "info-content": "var(--color-info-content)",
};

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      colors: {
        "default": "var(--colors-default)",
        "header": "var(--colors-header)",

        "interactive": "var(--colors-interactive)",
        "interactive-inverse": "var(--colors-interactive-inverse)",
        "hover": "var(--colors-hover)",
        "hover-inverse": "var(--colors-hover-inverse)",
        ...pallet,
      },
      textColor: {
        "default": "var(--text-color-default)",
        "default-inverse": "var(--text-color-default-inverse)",
        "subdued": "var(--text-color-subdued)",
        "subdued-inverse": "var(--text-color-subdued-inverse)",
        "price": "var(--text-color-price)",
        "section-title": "var(--text-color-section-title)",
        "positive": "var(--text-color-positive)",
        "critical": "var(--text-color-critical)",
        ...pallet,
      },
      borderColor: {
        "default": "var(--border-color-default)",
        "default-inverse": "var(--border-color-default-inverse)",
        "interactive": "var(--border-color-interactive)",
        "focus": "var(--border-color-focus)",
        "positive": "var(--border-color-positive)",
        "critical": "var(--border-color-critical)",
        ...pallet,
      },
      outline: Object.fromEntries(
        Object.entries(pallet).map((
          [key, value],
        ) => [key, [`1px solid ${value}`, "1px"]]),
      ),
      fontSize: {
        "heading-1": ["56px", "67.2px"],
        "heading-2": ["24px", "28.8px"],
        "heading-3": ["20px", "24px"],
        "menu": ["16px", "20px"],
        "button": ["14px", "18px"],
        "body": ["16px", "20px"],
        "caption": ["13px", "16px"],
        "list-price": ["10px", "20px"],
      },
      fontWeight: {
        "heading-1": "500",
        "heading-2": "500",
        "heading-3": "500",
        "menu": "400",
        "button": "700",
        "body": "400",
        "caption": "400",
        "list-price": "400",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      boxShadow: {
        sm: "0px 1px 3px 0px #00000014",
        default: "0px 1px 4px 0px #0000001F",
        md: "0px 1px 5px 0px #00000024",
        lg: "0px 4px 10px 0px #0000001F",
      },
    },
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
      serif: ["inherit", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  preflight: (preflight) => ({
    ...preflight,

    // Stick footer to the bottom of the page
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    'section[data-manifest-key="./sections/Footer.tsx"]': {
      marginTop: "auto",
    },

    // Prevent scroll when modal is open
    "body[no-scroll]": {
      overflow: "hidden",
      height: "100vh",
    },
  }),
  plugins: {
    backdrop: {
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
    "scroll-snap-center": scrollSnap(["center"]),
    "scroll-snap-start": scrollSnap(["start"]),
    "scroll-x-mandatory": {
      "scroll-snap-type": "x mandatory",
    },
    "snap-x": {
      "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
    },
    "snap-mandatory": {
      "--tw-scroll-snap-strictness": "mandatory",
    },
    "fill": (parts) => ({ "fill": parts.join("-") }),
    "max-h-min": {
      "max-height": "min-content",
    },
    "snap": ([mod]) => ({ "scroll-snap-align": mod }),
    "grid-cols": gridCols,
    "grid-rows": gridRows,
    "scroll-smooth": {
      "scroll-behavior": "smooth",
      "-webkit-overflow-scrolling": "touch",
    },
    "scrollbar-none": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
};

export default options;
