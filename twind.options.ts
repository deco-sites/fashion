/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twindv1.ts";

import { defineConfig } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.0.1";
import config from "./twind.config.ts";

const options: Options = {
  selfURL: import.meta.url,
  ...defineConfig({
    ...config,
    rules: [
      [
        "backdrop",
        {
          "&::backdrop": {
            background: "rgba(0, 0, 0, 0.5)",
          },
        },
      ],
      [
        "scrollbar-none",
        {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      ],
    ],
    preflight: {
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
    },
    presets: [presetTailwind()],
    darkMode: false,
  }),
};

export default options;
