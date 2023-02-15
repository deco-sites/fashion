import { withLive } from "$live/live.ts";
import { withVTEXProxy } from "../middlewares/proxy.ts";

export const handler = [
  withVTEXProxy({
    account: "bravtexfashionstore",
    paths: ["/checkout(/*)", "/arquivos/*", "/files/*", "/api/*"],
  }),
  withLive({
    siteId: 239,
    site: "fashion",
  }),
];
