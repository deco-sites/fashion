// Daisi UI theme
export const theme = {
  "primary": "hsl(180 100% 10%)",
  "secondary": "hsl(0 39% 39%)",
  "accent": "hsl(150 100% 50%)",
  "neutral": "hsl(0 0% 20%)",
  "base-100": "hsl(0 0% 100%)",
  "success": "hsl(150 62% 95%)",
  "warning": "hsl(43 100% 95%)",
  "error": "hsl(9 100% 95%)",
  "info": "hsl(220 100% 97%)",
};

// derived colors: Only used for tailwind intellisense
const palette = {
  ...theme,
  "primary-focus": "hsl(180 100% 8%)",
  "primary-content": "hsl(180 12% 82%)",
  "secondary-focus": "hsl(0 39% 31%)",
  "secondary-content": "hsl(0 28% 88%)",
  "accent-focus": "hsl(150 100% 40%)",
  "accent-content": "hsl(149 112% 10%)",
  "neutral-focus": "hsl(0 0% 16%)",
  "neutral-content": "hsl(0 0% 84%)",
  "base-200": "hsl(0 0% 90%)",
  "base-300": "hsl(0 0% 50%)",
  "base-content": "hsl(0 0% 20%)",
  "success-content": "hsl(140 3% 19%)",
  "warning-content": "hsl(48 5% 19%)",
  "error-content": "hsl(12 5% 19%)",
  "info-content": "hsl(220 3% 19%)",
};

export default {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: palette,
      textColor: palette,
      borderColor: palette,
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
        "progress": "progress-frame ease normal",
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
        "progress-frame": {
          from: {
            "--dot-progress": "0%",
          },
          to: {
            "--dot-progress": "100%",
          },
        },
      },
    },
    boxShadow: {
      sm: "0px 1px 3px 0px #00000014",
      default: "0px 1px 4px 0px #0000001F",
      md: "0px 1px 5px 0px #00000024",
      lg: "0px 4px 10px 0px #0000001F",
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
};
