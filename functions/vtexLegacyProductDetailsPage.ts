import { toProductPage } from "$live/std/commerce/vtex/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";
import type { Product } from "$live/std/commerce/vtex/types.ts";

// import { vtex } from "../clients/instances.ts";

const DEFAULT_SLUG_WITHOUT_SKU =
  "conjunto-festa-tropical-est-festa-tropical_mini-home_branco-magi-301679-17461";
// const DEFAULT_SKU = "1023374";

/**
 * @title VTEX Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<null, ProductDetailsPage | null> =
  async (
    _req,
    ctx,
  ) => {
    const skuId = ctx.params.slug?.split("-").pop();
    //const query = `sku:${skuId}`;

    // VTEX Search
    const slugWithoutSkuId = ctx.params.slug?.split("-").reverse().slice(1)
      .reverse().join("-") || DEFAULT_SLUG_WITHOUT_SKU;

    // console.log({ slugWithoutSkuId });

    // TO-DO: mover para outra função
    const account = "lojaoffpremium";
    const environment = "vtexcommercestable";
    const searchResponse = await fetch(
      `https://${account}.${environment}.com.br/api/catalog_system/pub/products/search/${slugWithoutSkuId}/p`,
    ).then((r) => r.json()) as Product[];

    // console.log("SEARCH RESPONSE LEGACY >>>>>>>>>>", searchResponse);

    const product = searchResponse[0];
    // console.log({ searchResponse });
    // console.log({ skuId });

    // Product not found, return the 404 status code
    if (!product) {
      return {
        data: null,
        status: 404,
      };
    }

    // console.log(">>>>>>>>", JSON.stringify(searchResponse, null, 2));

    // console.log(
    //   "RESPONSE LEGACY >>>>>>>>",
    //   toProductPage(product, "Legacy", skuId),
    // );
    // Convert the VTEX product to schema.org format and return it
    return { data: toProductPage(product, "Legacy", skuId) };
  };

export default productPageLoader;
