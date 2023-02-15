import {
  legacyFacetToFilter,
  toProduct,
} from "$live/std/commerce/vtex/transform.ts";
import type { Filter, ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";
import type { LegacySort } from "$live/std/commerce/vtex/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";

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
   * @$comment https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  ft?: string;
  /**
   * @$comment https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
   */
  fq?: string;
  /**
   * @description map param
   */
  map?: string;
}

const SORT_TO_LEGACY_SORT: Record<string, string> = {
  "price:desc": "OrderByPriceDESC",
  "price:asc": "OrderByPriceASC",
  "orders:desc": "OrderByTopSaleDESC",
  "name:desc": "OrderByNameDESC",
  "name:asc": "OrderByNameASC",
  "release:desc": "OrderByReleaseDateDESC",
  "discount:desc": "OrderByBestDiscountDESC",
  "": "OrderByScoreDESC",
};

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

const mapParamFromUrl = async (term: string | null, vtexConfig: VTEXConfig) => {
  const segments = term ? term.split("/") : [];
  const results = await Promise.all(
    segments.map((segment) =>
      vtex.catalog_system.pageType({
        slug: segment,
        ...vtexConfig,
      })
    ),
  );

  const pageTypes = results
    .map((r) => PAGE_TYPE_TO_MAP_PARAM[r.pageType])
    .filter(Boolean);

  return pageTypes.join(",");
};

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const legacyPLPLoader: LoaderFunction<
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
  const O = (url.searchParams.get("O") ||
    SORT_TO_LEGACY_SORT[url.searchParams.get("sort") ?? ""]) as LegacySort;
  const ft = props.ft || url.searchParams.get("ft") ||
    url.searchParams.get("q") || "";
  const fq = props.fq || url.searchParams.get("fq") || "";
  const map = props.map || url.searchParams.get("map") ||
    await mapParamFromUrl(term, vtexConfig);
  const _from = page * count;
  const _to = (page + 1) * count - 1;

  const searchArgs = {
    term,
    map,
    _from,
    _to,
    O,
    ft,
    fq,
    ...vtexConfig,
  };

  // search products on VTEX. Feel free to change any of these parameters
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
  }).map(([name, facets]) => legacyFacetToFilter(name, facets, url, map))
    .flat()
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

export default legacyPLPLoader;
