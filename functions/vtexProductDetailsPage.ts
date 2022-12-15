import { toProductPage } from "$live/std/commerce/vtex/transform.ts";
import { getClientPlatform } from "$live/std/commerce/live.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

const DEFAULT_SKU = 1023372;

/**
 * @title VTEX Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<null, ProductDetailsPage | null> =
  async (
    _req,
    ctx,
  ) => {
    // Use the VTEX client available on ctx.state instantiated at `_middleware.ts`
    const vtex = getClientPlatform(ctx.state.clients, "vtex");

    const skuId = Number(ctx.params.slug?.split("-").pop()) || DEFAULT_SKU;
    const query = `sku:${skuId}`;

    // search prodcuts on VTEX. Feel free to change any of these parameters
    const { products: [product] } = await vtex.search.products({
      query,
      page: 0,
      count: 1,
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
