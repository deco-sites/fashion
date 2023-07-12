#!/usr/bin/env -S deno run -A --watch
import dev from "$live/dev.ts";
import tailwind from "deco-sites/std/tailwindv3.ts";
import site from "./site.json" assert { type: "json" };

// Start tailwind background process generation
tailwind();

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", site);
