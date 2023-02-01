import { animation, css } from "twind/css";
import type { Options } from "$fresh/plugins/twind.ts";

const options: Omit<Options, "selfURL"> = {
  plugins: {
    "slide-left": animation("0.4s ease normal", {
      from: { transform: "translateX(100%)" },
      to: { transform: "translateX(0)" },
    }),
    "slide-right": animation("0.4s ease normal", {
      from: { transform: "translateX(-100%)" },
      to: { transform: "translateX(0)" },
    }),
    "slide-bottom": animation("0.4s ease normal", {
      from: { transform: "translateY(100%)" },
      to: { transform: "translateY(0)" },
    }),
    backdrop: css({
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    }),
  },
  theme: {
    extend: {
      colors: {
        primary: "#2FD180",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "primary-dark": "#221E1F",
        "primary-light": "#f4f4f4",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#f4f4f4",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
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

export default options;
