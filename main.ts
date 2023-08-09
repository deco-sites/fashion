/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import { $live } from "$live/mod.ts";
import plugins from "deco-sites/std/plugins/mod.ts";
import partytownPlugin from "partytown/mod.ts";
import manifest from "./fresh.gen.ts";

await start($live(manifest, { namespace: "deco-sites/fashion" }), {
  plugins: [
    ...plugins(),
    partytownPlugin(),
  ],
});
