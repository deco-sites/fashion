import { toProduct } from "$live/std/commerce/shopify/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import { shopify } from "./../clients/instances.ts";

export interface Props {
  /** @description search term to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const searchLoader: LoaderFunction<Props, Product[]> = async (
  _req,
  _ctx,
  props,
) => {
  const count = props.count ?? 12;
  const query = props.query || "";

  // search products on Shopify. Feel free to change any of these parameters
  const data = await shopify.products({
    first: count,
    query,
  });

  // Transform Shopify product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = data?.products.nodes.map((p) =>
    toProduct(p, p.variants.nodes[0])
  );

  return {
    data: products ?? [],
  };
};

export default searchLoader;
