import { toProductPage } from "$live/std/commerce/vtex/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import { VTEXConfig } from "../sections/vtexconfig.global.tsx";
import { LiveState } from "$live/types.ts";

const DEFAULT_SKU = 1023372;

/**
 * @title VTEX Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<
  null,
  ProductDetailsPage | null,
  LiveState<{ vtexconfig: VTEXConfig | undefined }>
> = async (
  _req,
  ctx,
) => {
  const skuId = Number(ctx.params.slug?.split("-").pop()) || DEFAULT_SKU;
  const query = `sku:${skuId}`;

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const { products: [product] } = await vtex.search.products({
    query,
    page: 0,
    count: 1,
    ...(ctx.state.global.vtexconfig ?? defaultVTEXSettings),
  });

  // Product not found, return the 404 status code
  if (!product) {
    return {
      data: null,
      status: 404,
    };
  }

  // Convert the VTEX product to schema.org format and return it
  return { data: toProductPage(product, skuId.toString()) };
};

export default productPageLoader;
