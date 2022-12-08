import { toProduct } from "$live/std/commerce/vtex/transform.ts";
import { getClientPlatform } from "$live/std/commerce/live.ts";
import { ProductList } from "./vtexSearch.ts";
import type { LoaderFunction } from "$live/std/types.ts";

const getFacetsFromUrl = (
  url: URL,
): Array<{ key: string; value: string }> => {
  const facets: Array<{ key: string; value: string }> = [];

  url.searchParams.forEach((value, key) => {
    if (key === "sort") {
      return;
    }

    facets.push({ key, value });
  });

  return facets;
};

const DEFAULT_TERM = "men";

export interface Props {
  /** @title items per page */
  count?: number;
}

/**
 * @label VTEX - Search Page
 * @description Usa Intelligent Search
 */
const VTEXSearchPageLoader: LoaderFunction<Props, ProductList> = async (
  req,
  ctx,
  props,
) => {
  // Use the VTEX client available on ctx.state instantiated at `_middleware.ts`
  const vtex = getClientPlatform(ctx.state.clients, "vtex");

  const url = new URL(req.url);

  const selectedFacets = getFacetsFromUrl(url);
  const query = url.searchParams.get("ft") ?? DEFAULT_TERM;
  const page = Number(url.searchParams.get("page")) || 0;
  const count = props?.count ?? 12;

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const { products: vtexProducts } = await vtex.search.products({
    query,
    page,
    count,
    selectedFacets,
  });

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0]));

  return { data: { products } };
};

export default VTEXSearchPageLoader;
