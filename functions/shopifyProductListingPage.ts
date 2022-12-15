import { toProduct } from "$live/std/commerce/shopify/transform.ts";
import { getClientPlatform } from "$live/std/commerce/live.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductListingPage } from "$live/std/commerce/types.ts";

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
const searchLoader: LoaderFunction<Props, ProductListingPage> = async (
  req,
  ctx,
  props,
) => {
  // Use the VTEX client available on ctx.state instantiated at `_middleware.ts`
  const client = getClientPlatform(ctx.state.clients, "shopify");

  const url = new URL(req.url);

  const count = props.count ?? 12;
  const query = props.query || url.searchParams.get("q") || "";

  // search prodcuts on VTEX. Feel free to change any of these parameters
  const data = await client.products({
    first: count,
    query: query,
  });

  // Transform Shopify product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = data?.products.nodes.map((p) =>
    toProduct(p, p.variants.nodes[0])
  );
  const pageInfo = data?.products.pageInfo ?? { hasNextPage: false };

  return {
    data: {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [],
        numberOfItems: 0,
      },
      filters: [],
      products: products ?? [],
      pageInfo,
    },
  };
};

export default searchLoader;
