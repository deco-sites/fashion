import {
  filtersFromSearchParams,
  toFilter,
  toProduct,
} from "$live/std/commerce/vtex/transform.ts";
import { slugify } from "$live/std/commerce/vtex/slugify.ts";
import type { Filter, ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";
import type { PageType, Sort } from "$live/std/commerce/vtex/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";
import {
  pageTypesFromPathname,
  pageTypesToBreadcrumbList,
} from "./vtexLegacyProductListingPage.ts";

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
  Brand: "brand",
  Collection: "productClusterIds",
  Cluster: "productClusterIds",
  Product: null,
  NotFound: null,
  FullText: null,
};

const pageTypeToMapParam = (type: PageType["pageType"], index: number) => {
  if (type === "Category" || type === "Department" || type === "SubCategory") {
    return `category-${index + 1}`;
  }

  return PAGE_TYPE_TO_MAP_PARAM[type];
};

const filtersFromPathname = (pages: PageType[]) =>
  pages
    .map((page, index) => {
      const key = pageTypeToMapParam(page.pageType, index);

      if (!key || !page.name) {
        return;
      }

      return key && page.name && {
        key,
        value: slugify(page.name),
      };
    })
    .filter((facet): facet is { key: string; value: string } => Boolean(facet));

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
  const vtexConfig = ctx.state.global.vtexconfig ?? defaultVTEXSettings;

  const count = props.count ?? 12;
  const query = props.query || url.searchParams.get("q") || "";
  const page = Number(url.searchParams.get("page")) || 0;
  const sort = url.searchParams.get("sort") as Sort || "" as Sort;
  const pageTypesPromise = pageTypesFromPathname(url.pathname, vtexConfig);
  const selectedFacetsFromParams = filtersFromSearchParams(url.searchParams);
  const selectedFacets = selectedFacetsFromParams.length === 0
    ? filtersFromPathname(await pageTypesPromise)
    : selectedFacetsFromParams;

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
  const products = vtexProducts.map((p) =>
    toProduct(p, p.items[0], 0, { url, ...vtexConfig })
  );
  const filters = facets
    .map((f) => !f.hidden && toFilter(f, selectedFacets))
    .filter((x): x is Filter => Boolean(x));
  const itemListElement = pageTypesToBreadcrumbList(
    await pageTypesPromise,
    url,
  );

  const hasNextPage = Boolean(pagination.next.proxyUrl);
  const hasPreviousPage = page > 0;
  const nextPage = new URLSearchParams(url.searchParams);
  const previousPage = new URLSearchParams(url.searchParams);

  if (hasNextPage) {
    nextPage.set("page", (page + 1).toString());
  }

  if (hasPreviousPage) {
    previousPage.set("page", (page - 1).toString());
  }

  return {
    data: {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement,
        numberOfItems: itemListElement.length,
      },
      filters,
      products,
      pageInfo: {
        nextPage: hasNextPage ? `?${nextPage}` : undefined,
        previousPage: hasPreviousPage ? `?${previousPage}` : undefined,
        currentPage: page,
      },
    },
  };
};

export default plpLoader;
