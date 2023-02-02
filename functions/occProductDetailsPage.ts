import { toProductPage } from "$live/std/commerce/occ/transform.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";

import { occ } from "../clients/instances.ts";

const DEFAULT_SKU = "tenis-soho-carmuca-masc-areia-66957-72";

/**
 * @title Oracle Commerce Cloud Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<
  null,
  ProductDetailsPage | null
> = async (_req, _ctx) => {
  // search prodcuts on Oracle. Feel free to change any of these parameters

  const skuId = _ctx.params.slug || DEFAULT_SKU;

  const { data } = await occ.search.productBySlug(skuId);
  const { id } = data.page.product;

  const { productSkuInventoryStatus } = await occ.search.stockStatus(id);

  const product = data.page.product;

  // Product not found, return the 404 status code
  if (!data) {
    return {
      data: null,
      status: 404,
    };
  }

  // Convert the OCC product to schema.org format and return it
  return { data: toProductPage(product, productSkuInventoryStatus) };
};

export default productPageLoader;
