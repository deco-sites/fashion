import manifest from "./deco.gen.ts";
import { start } from "$live/server.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  site: "fashion",
  domains: [],
  plugins: [
    twindPlugin({
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      ...twindConfig,
    }),
  ],
});
