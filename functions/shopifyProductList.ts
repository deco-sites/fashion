import { toProduct } from "$live/std/commerce/shopify/transform.ts";
import { getClientPlatform } from "$live/std/commerce/live.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

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
  ctx,
  props,
) => {
  // Use the VTEX client available on ctx.state instantiated at `_middleware.ts`
  const client = getClientPlatform(ctx.state.clients, "shopify");

  const count = props.count ?? 12;
  const query = props.query || "";

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const data = await client.products({
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
