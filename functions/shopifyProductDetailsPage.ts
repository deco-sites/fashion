import { toProductPage } from "$live/std/commerce/shopify/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

import { shopify } from "./../clients/instances.ts";

const SKU_FALLBACK = "aerodynamic-aluminum-clock-40306064097457";

/**
 * @title Shopify Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<null, ProductDetailsPage | null> =
  async (
    _req,
    ctx,
  ) => {
    const slug = ctx.params.slug ?? SKU_FALLBACK;
    const splitted = slug.split("-");
    const maybeSkuId = Number(splitted[splitted.length - 1]);

    const handle = splitted.slice(0, maybeSkuId ? -1 : undefined).join("-");

    // search prodcuts on Shopify. Feel free to change any of these parameters
    const data = await shopify.product(handle);

    if (!data?.product) {
      return {
        data: null,
        status: 404,
      };
    }

    const product = toProductPage(data.product, maybeSkuId);

    return { data: product };
  };

export default productPageLoader;
