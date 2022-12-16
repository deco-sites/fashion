import { createClient as createVTEXClient } from "$live/std/commerce/vtex/client.ts";
import { createClient as createShopifyClient } from "$live/std/commerce/shopify/client.ts";

export const vtex = createVTEXClient({
  platform: "vtex",
  account: "lojaoffpremium",
  defaultLocale: "pt-BR",
  defaultSalesChannel: "1",
});

export const shopify = createShopifyClient({
  platform: "shopify",
  storeName: "gimenesdevstore",
  storefrontAccessToken: "27c1ac16fe30a0fb6c5d634eeb63bf81",
});
