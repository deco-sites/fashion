/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import manifest from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import partytownPlugin from "partytown/mod.ts";
import prefetchPlugin from "prefetch";

await start(manifest, {
  plugins: [
    partytownPlugin(),
    prefetchPlugin({
      strategy: "opt-in",
    }),
    twindPlugin({
      ...twindConfig,
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
    }),
  ],
});
