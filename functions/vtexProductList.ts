import { toProduct } from "$live/std/commerce/vtex/transform.ts";

import type { Product } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";

import { vtex } from "../clients/instances.ts";

export interface Props {
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const productListLoader: LoaderFunction<Props, Product[]> = async (
  _req,
  _ctx,
  props,
) => {
  const count = props.count ?? 12;
  const query = props.query || "";

  const searchArgs = {
    query,
    page: 0,
    count,
  };

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const productsResult = await vtex.search.products(searchArgs);
  const { products: vtexProducts } = productsResult;

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0]));

  return {
    data: products,
    maxAgeInSeconds: 10
  };
};

export default productListLoader;
