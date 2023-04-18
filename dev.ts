#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";

// Generate tailwind css rules
const start = performance.now()
await Deno.run({
  cmd: [Deno.execPath(), "task", "tailwindcss"],
  stdin: "piped",
  stdout: "piped",
  stderr: "piped",
}).status();
const duration = performance.now() - start
console.info(`Generating Tailwind CSS stylesheet took ${duration.toFixed(0)}ms`)

await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "deco-sites/std": liveStdManifest,
  },
});
