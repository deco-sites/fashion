#!/usr/bin/env -S deno run -A --watch
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";
import tailwindCSS from "deco-sites/std/tailwindv3.ts";
import tailwindConfig from "deco-sites/fashion/tailwind.config.ts";
import daisyui from "npm:daisyui@2.51.6";

// Generate tailwind CSS style sheet
await tailwindCSS({
  ...tailwindConfig,
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
});

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});
