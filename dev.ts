#!/usr/bin/env -S deno run -A --watch=static/
import { dev } from "$live/mod.ts";
import liveManifest from "$live/live.gen.ts";
import liveStdManifest from "deco-sites/std/live.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: [liveManifest, liveStdManifest],
  siteId: 239,
});
