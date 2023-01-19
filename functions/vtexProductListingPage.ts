import { toFilter, toProduct } from "$live/std/commerce/vtex/transform.ts";
import type { Filter, ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";
import type { Sort } from "$live/std/commerce/vtex/types.ts";

import { filtersFromSearchParams } from "../sdk/searchFilters.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import { VTEXConfig } from "../sections/vtexconfig.global.tsx";

export interface Props {
  /**
   * @description overides the query term
   */
  query?: string;
  /**
   * @title Items per page
   * @description number of products per page to display
   */
  count: number;
}

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const plpLoader: LoaderFunction<
  Props,
  ProductListingPage,
  LiveState<{ vtexconfig?: VTEXConfig }>
> = async (
  req,
  ctx,
  props,
) => {
  const url = new URL(req.url);

  const count = props.count ?? 12;
  const query = props.query || url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page")) || 0;
  const sort = url.searchParams.get("sort") as Sort || "" as Sort;
  const selectedFacets = filtersFromSearchParams(url.searchParams);

  const searchArgs = {
    query,
    page,
    sort,
    count,
    selectedFacets,
    ...(ctx.state.global.vtexconfig ?? defaultVTEXSettings),
  };

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const [productsResult, facetsResult] = await Promise.all([
    vtex.search.products(searchArgs),
    vtex.search.facets(searchArgs),
  ]);
  const { products: vtexProducts, pagination } = productsResult;
  const { facets } = facetsResult;

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0]));
  const pageInfo = { hasNextPage: Boolean(pagination.next.proxyURL) };
  const filters = facets
    .map((f) => toFilter(f))
    .filter((x): x is Filter => Boolean(x));

  return {
    data: {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [],
        numberOfItems: 0,
      },
      filters,
      products,
      pageInfo,
    },
  };
};

export default plpLoader;
