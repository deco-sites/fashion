/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twindv1.ts";
import twindOptions from "./twind.options.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";

await start(manifest, {
  plugins: [
    partytownPlugin(),
    prefetchPlugin(),
    twindPlugin(twindOptions),
  ],
});
