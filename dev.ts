#!/usr/bin/env -S deno run -A --watch=static/
import dev from "$live/dev.ts";
import liveManifest from "$live/fresh.gen.ts";
import liveStdManifest from "$live/std/fresh.gen.ts";

await dev(import.meta.url, "./main.ts", {
  imports: {
    "$live": liveManifest,
    "$live/std": liveStdManifest,
  },
});
