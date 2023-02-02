import { toFilter, toProduct } from "$live/std/commerce/vtex/transform.ts";
import type { ProductListingPage } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LegacySort, Product } from "$live/std/commerce/vtex/types.ts";

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
  sort: LegacySort;
}

/**
 * @title Product listing page loader
 * @description Returns data ready for search pages like category,brand pages
 */
const plpLoader: LoaderFunction<Props, ProductListingPage> = async (
  req,
  ctx,
  props,
) => {
  // const account = ctx.state.global.vtexconfig.account;
  const account = "lojaoffpremium";
  const count = props.count ?? 12;
  const searchParams = new URLSearchParams();
  const query = props.query ?? "";
  searchParams.set("ft", query);
  // const selectedFacets = filtersFromSearchParams(url.searchParams); //ajeitar essa parte de filtros

  const baseUrl = `https://vtex-search-proxy.global.ssl.fastly.net/${account}`;

  if (props.sort !== undefined) {
    searchParams.set("O", props.sort);
  }

  searchParams.set("_from", "0");

  searchParams.set("_to", (count - 1).toString());

  // console.log("AQUI >>>>>", searchParams.toString());

  const [productsResult] = await Promise.all([
    fetch(
      `${baseUrl}/${props.query ?? ""}?${searchParams.toString()}`,
    ).then((response) => response.json() as Promise<Product[]>),
  ]);
  // console.log("PRODUCT RESULT >>>>>>>", productsResult);

  const products = productsResult.map((p) =>
    toProduct(p, p.items[0], 0, "Legacy")
  );

  // console.log("PRODUCTS >>>>>", products);

  console.log(
    "URl >>>>>",
    `${baseUrl}/${props.query ?? ""}?${searchParams.toString()}`,
  );
  // const filters = facets
  //   .map((f) => toFilter(f))
  //   .filter((x): x is Filter => Boolean(x));

  return {
    data: {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [],
        numberOfItems: 0,
      },
      // filters,
      products,
    },
  };
};

export default plpLoader;
