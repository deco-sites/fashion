/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import { $live } from "$live/mod.ts";
import partytownPlugin from "partytown/mod.ts";
import prefetchPlugin from "prefetch/mod.ts";
import manifest from "./live.gen.ts";
import site from "./site.json" assert { type: "json" };

await start($live(manifest, site), {
  plugins: [
    prefetchPlugin(),
    partytownPlugin(),
  ],
});
