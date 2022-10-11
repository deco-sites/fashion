import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#f4f4f4",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#f4f4f4",
        zeeblue: "#009aff",
        "custom-red": "#FF4C4C",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
} as Options;
