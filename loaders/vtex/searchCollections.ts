import type { Loader } from "$live/types.ts";
import { HandlerContext } from "$fresh/server.ts";
import VTEXSearch, { mapVTEXProduct, Sort } from "../../clients/vtex/search.ts";

export default {
  inputSchema: {
    type: "object",
    title: "Products",
    properties: {
      collection: {
        type: "string",
        title: "Coleção",
      },
      count: {
        type: "number",
        title: "Num. de itens",
      },
    },
  },
  outputSchema: {
    $ref: "searchCollections",
  },
  loader: async function VTEXSearchLoader(
    req: Request,
    ctx: HandlerContext,
    { collection, count = 4 }: { collection: string; count: number }
  ) {
    const url = new URL(req.url);
    const isProductPage = Boolean(ctx.params.slug);
    let query: string;
    let skuId: string | undefined;

    // TODO: Search and Product should have different loaders
    // search for PDP
    if (isProductPage) {
      skuId = ctx.params.slug.split("-").pop();
      query = `sku:${skuId}`;
    } else {
      // search for PLP
      if (url.pathname === "/search") {
        query = url.searchParams.get("q") ?? "";

        if (query) {
          query = encodeURIComponent(query);
        }
      } else {
        query = encodeURIComponent(collection);
      }
    }

    // TODO: This info should be accessed by common commerce schema
    const sort = (function getSortValue() {
      const sortFromUrl = url.searchParams.get("sort");

      if (!sortFromUrl) {
        return "";
      } else {
        return sortFromUrl as Sort;
      }
    })();

    const { products } = await VTEXSearch({
      query,
      type: "product_search",
      sort,
      page: 0,
      count,
      hideUnavailableItems: true,
    });

    return { products: products.map(mapVTEXProduct(skuId)) };
  },
} as Loader;
