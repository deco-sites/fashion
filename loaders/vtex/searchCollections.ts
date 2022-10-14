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
    const searchParams = new URLSearchParams();
    searchParams.set("_to", "4");
    searchParams.set("_from", "0");

    let facets: string;

    if (ctx.params.slug) {
      facets = `${ctx.params.slug}/p`;
    } else {
      facets = url.searchParams.get("q") ?? collection;
    }

    const products = await VTEXSearch({
      facets,
      searchParams: searchParams,
    });

    return { products: products.map(mapVTEXProduct) };
  },
} as Loader;
