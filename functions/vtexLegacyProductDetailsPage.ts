import { toProductPage } from "$live/std/commerce/vtex/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { LiveState } from "$live/types.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";

/**
 * @title VTEX Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const legacyProductPageLoader: LoaderFunction<
  null,
  ProductDetailsPage | null,
  LiveState<{ vtexconfig: VTEXConfig | undefined }>
> = async (
  req,
  ctx,
) => {
  const vtexConfig = ctx.state.global.vtexconfig ?? defaultVTEXSettings;
  const url = new URL(req.url);
  const skuId = url.searchParams.get("skuId");

  // search products on VTEX. Feel free to change any of these parameters
  const [product] = await vtex.catalog_system.products({
    term: `${ctx.params.slug}/p`,
    ...vtexConfig,
  });

  // Product not found, return the 404 status code
  if (!product) {
    return {
      data: null,
      status: 404,
    };
  }

  return {
    data: toProductPage(product, skuId?.toString()),
  };
};

export default legacyProductPageLoader;
