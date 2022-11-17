import manifest from "./deco.gen.ts";
import { context, start } from "$live/server.ts";
import partytownPlugin from "$live/plugins/partytown.ts";
import gaPlugin from "$live/plugins/ga.ts";
import jitsuPlugin from "$live/plugins/jitsu.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";
import prefetchPlugin from "prefetch";

const isDeployment = !!context.deploymentId;
const plugins = [
  prefetchPlugin(),
  twindPlugin({
    selfURL: new URL("./twind.config.ts", import.meta.url).href,
    ...twindConfig,
  }),
];
const prodPlugins = [
  ...plugins,
  partytownPlugin({ forward: ["gtag", "jitsu"] }),
  gaPlugin({ trackingId: "" }),
  jitsuPlugin({ key: "js.9wshjdbktbdeqmh282l0th.c354uin379su270joldy2" }),
];

await start(manifest, {
  siteId: 239,
  site: "fashion",
  domains: [],
  plugins: isDeployment ? prodPlugins : plugins,
});
