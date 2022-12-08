import { toProduct } from "$live/std/commerce/vtex/transform.ts";
import { getClientPlatform } from "$live/std/commerce/live.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

export interface Props {
  searchQuery: string;
  count: number;
}

export interface ProductList {
  products: Product[];
}

/**
 * @title VTEX - Intelligent Search
 * @description Busque produtos com queries complexas
 */
const searchLoaderVTEX: LoaderFunction<Props, ProductList> = async (
  _req,
  ctx,
  { count, searchQuery },
) => {
  // Use the VTEX client available on ctx.state instantiated at `_middleware.ts`
  const vtex = getClientPlatform(ctx.state.clients, "vtex");

  const query = encodeURIComponent(searchQuery);

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const { products: vtexProducts } = await vtex.search.products({
    query,
    page: 0,
    count,
  });

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0]));

  return { data: { products } };
};

export default searchLoaderVTEX;
