import {
  filtersFromSearchParams,
  toFilter,
  toProduct,
} from "$live/std/commerce/vtex/transform.ts";
import type { Filter, ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";
import type { Sort } from "$live/std/commerce/vtex/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";

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

const PAGE_TYPE_TO_MAP_PARAM = {
  Brand: "b",
  Category: "c",
  Department: "c",
  SubCategory: "c",
  Collection: "productClusterIds",
  Cluster: "productClusterIds",
  Product: null,
  NotFound: null,
  FullText: null,
};

const filtersFromURL = async (
  url: URL,
  vtexConfig: VTEXConfig,
) => {
  const selectedFacets = filtersFromSearchParams(url.searchParams);

  if (selectedFacets.length > 0) {
    return selectedFacets;
  }

  /**
   * We have to figure out the facets from the url, e.g.
   */
  const segments = url.pathname.split("/").slice(1);
  const results = await Promise.all(
    segments.map((segment) =>
      vtex.catalog_system.pageType({
        slug: segment,
        ...vtexConfig,
      })
    ),
  );

  return results
    .map((r) => {
      const key = PAGE_TYPE_TO_MAP_PARAM[r.pageType];

      return key && r.name && {
        key,
        value: r.name,
      };
    })
    .filter((facet): facet is { key: string; value: string } => Boolean(facet));
};

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
  const vtexConfig = ctx.state.global.vtexconfig ?? defaultVTEXSettings;
  const url = new URL(req.url);

  const count = props.count ?? 12;
  const query = props.query || url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page")) || 0;
  const sort = url.searchParams.get("sort") as Sort || "" as Sort;
  const selectedFacets = await filtersFromURL(url, vtexConfig);

  const searchArgs = {
    query,
    page,
    sort,
    count,
    selectedFacets,
    ...vtexConfig,
  };

  // search products on VTEX. Feel free to change any of these parameters
  const [productsResult, facetsResult] = await Promise.all([
    vtex.search.products(searchArgs),
    vtex.search.facets(searchArgs),
  ]);
  const { products: vtexProducts, pagination } = productsResult;
  const { facets } = facetsResult;

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0], 0));
  const pageInfo = { hasNextPage: Boolean(pagination.next.proxyURL) };
  const filters = facets
    .map((f) => !f.hidden && toFilter(f, selectedFacets))
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
