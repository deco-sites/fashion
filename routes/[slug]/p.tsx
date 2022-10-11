import {
  createLiveHandler,
  LivePage,
  loadLiveComponents,
} from "$live/live.tsx";
import VTEXSearchLoader from "../../loaders/vtex/search.ts";
import { mapVTEXProduct } from "../search.tsx";

export const handler = createLiveHandler({
  loader: async (req, ctx) => {
    const { slug } = ctx.params;
    const [pageData, products] = await Promise.all([
      loadLiveComponents(req, ctx, { template: `/:slug/p` }),
      VTEXSearchLoader({ facets: `${slug}/p` }),
    ]);
    const { components: rawComponents } = pageData;
    const [product] = products.map(mapVTEXProduct);

    const components = rawComponents?.map((c) => {
      if (c.component !== "ProductDetails") {
        return c;
      }
      return {
        component: c.component,
        props: { loaderData: product },
      };
    });
    return {
      ...pageData,
      components,
    };
  },
  template: "/:slug/p",
});

export default LivePage;
