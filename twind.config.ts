/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, add any functions on twind.options.ts instead
 */

export default {
  theme: {
    extend: {
      colors: {
        "default": "#FFFFFF",
        "header": "#FFFFFF",
        "badge": "#8C3D3D", // shopping cart tem isso tambem
        "footer": "#003232",
        "interactive": "#161616",
        "interactive-inverse": "#FFFFFF",
        "hover": "rgba(0, 0, 0, 0.04)",
        "hover-inverse": "rgba(0, 0, 0, 0.04)",
      },
      textColor: {
        "default": "#161616",
        "default-inverse": "#FFFFFF",
        "subdued": "#66736C",
        "subdued-inverse": "#C6C6C6",
        "price": "#8C3D3D",
        "section-title": "#161616",
        "positive": "#1A7346",
        "critical": "#B44125",
      },
      borderColor: {
        "default": "#D4DBD7",
        "default-inverse": "#FFFFFF",
        "interactive": "#161616",
        "focus": "#3379EF",
        "positive": "#1A7346",
        "critical": "#B44125",
      },
      outline: {
        interactive: ["2px solid #3379EF", "2px"],
      },
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
