import { toProductPage } from "$live/std/commerce/occ/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

import { occ } from "../clients/instances.ts";

const DEFAULT_SKU = 1023372;

/**
 * @title Oracle Commerce Cloud Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<null, ProductDetailsPage | null> =
  async (
    _req,
    ctx,
  ) => {
    // search prodcuts on Oracle. Feel free to change any of these parameters
    const { data } = await occ.search.productBySlug(
      "t-shirt-mc-colors-laranja-surfing-67504-08226",
    );

    const product = data.page.product;

    console.log("OCC DATA", data);

    // Product not found, return the 404 status code
    if (!data) {
      return {
        data: null,
        status: 404,
      };
    }

    // Convert the VTEX product to schema.org format and return it
    return { data: toProductPage(product) };
  };

export default productPageLoader;
