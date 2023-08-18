/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import plugins from "https://denopkg.com/deco-sites/std@1.20.5/plugins/mod.ts";
import partytownPlugin from "partytown/mod.ts";
import manifest from "./fresh.gen.ts";
import decoManifest from "./manifest.gen.ts";

await start(manifest, {
  plugins: [
    ...plugins({
      manifest: decoManifest,
      site: { namespace: "deco-sites/candy-store" },
    }),
    partytownPlugin(),
  ],
});
