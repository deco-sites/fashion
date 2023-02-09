import {
  legacyFacetToFilter,
  toProduct,
} from "$live/std/commerce/vtex/transform.ts";
import type { Filter, ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";
import type { LegacySort } from "$live/std/commerce/vtex/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import vtexconfig, { VTEXConfig } from "../sections/vtexconfig.global.tsx";

export interface Props {
  /**
   * @description overides the query term
   */
  term?: string;
  /**
   * @title Items per page
   * @description number of products per page to display
   */
  count: number;
  /**
   * @description FullText term
   * @docs https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  ft?: string;
  /**
   * @docs https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  fq?: string;
  /**
   * @description map param
   */
  map?: string;
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
  const vtexConfig = ctx.state.global.vtexconfig ?? defaultVTEXSettings;
  const url = new URL(req.url);

  const count = props.count ?? 12;
  const term = props.term || ctx.params["0"] || "";
  const page = Number(url.searchParams.get("page")) || 0;
  const O = url.searchParams.get("sort") as LegacySort || "" as LegacySort;
  const ft = props.ft || url.searchParams.get("q") || "";
  const fq = props.fq || url.searchParams.get("fq") || "";
  const map = props.map || url.searchParams.get("map") || "";
  const _from = page * count + 1;
  const _to = (page + 1) * count;

  const searchArgs = {
    term,
    _from,
    _to,
    O,
    ft,
    fq,
    map,
    ...vtexConfig,
  };

  const pageType = await vtex.catalog_system.pageType({
    slug: `${url.pathname}${url.search}`,
    ...vtexConfig,
  });

  console.log({ pageType });

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const [vtexProducts, vtexFacets] = await Promise.all([
    vtex.catalog_system.products(searchArgs),
    vtex.catalog_system.facets(searchArgs),
  ]);

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0], 0));
  const pageInfo = {
    hasNextPage: Boolean(page < 50 && products.length === count),
  };
  const filters = Object.entries({
    Departments: vtexFacets.Departments,
    Brands: vtexFacets.Brands,
    ...vtexFacets.SpecificationFilters,
  }).map(([name, facets]) => legacyFacetToFilter(name, facets, url))
    .flat()
    .filter((x): x is Filter => Boolean(x));

  console.log({ filters });

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
