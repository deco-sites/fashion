import { withLive } from "$live/live.ts";
import { withLiveCommerce } from "$live/std/commerce/live.ts";

const liveHandler = withLive({
  siteId: 239,
  site: "fashion",
  domains: [],
});

const commerceHandler = withLiveCommerce([
  {
    platform: "vtex",
    account: "lojaoffpremium",
    defaultLocale: "pt-BR",
    defaultSalesChannel: "1",
  },
  {
    platform: "shopify",
    storeName: "gimenesdevstore",
    storefrontAccessToken: "27c1ac16fe30a0fb6c5d634eeb63bf81",
  },
]);

export const handler = commerceHandler(liveHandler);
