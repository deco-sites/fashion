import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";
import partytownPlugin from "partytown/mod.ts";

await start(manifest, {
  siteId: 239,
  site: "fashion",
  domains: [],
  plugins: [
    partytownPlugin(),
    prefetchPlugin(),
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
