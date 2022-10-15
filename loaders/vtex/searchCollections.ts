import type { Loader } from "$live/types.ts";
import { HandlerContext } from "$fresh/server.ts";
import VTEXSearch, { mapVTEXProduct } from "../../clients/vtex/search.ts";

export default {
  inputSchema: {
    type: "object",
    title: "Products",
    properties: {
      collection: {
        type: "string",
        title: "Coleção",
      },
    },
  },
  outputSchema: {
    $ref: "searchCollections",
  },
  loader: async function VTEXSearchLoader(
    req: Request,
    ctx: HandlerContext,
    { collection }: { collection: string },
  ) {
    const url = new URL(req.url);
    const isProductSearch = Boolean(ctx.params.slug);
    let query: string;

    // search for PDP
    if (isProductSearch) {
      const skuId = ctx.params.slug.split("-").pop();
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

    const { products } = await VTEXSearch({
      query,
      type: "product_search",
      page: 0,
      count: 4,
      hideUnavailableItems: true,
    });

    return { products: products.map(mapVTEXProduct) };
  },
} as Loader;
