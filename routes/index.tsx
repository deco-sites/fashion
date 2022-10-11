import {
  createLiveHandler,
  LivePage,
  loadLiveComponents,
} from "$live/live.tsx";
import VTEXSearchLoader from "../loaders/vtex/search.ts";
import { Product } from "../vtexTypes.d.ts";
import { mapVTEXProduct } from "./search.tsx";

export const handler = createLiveHandler({
  loader: async (req, ctx) => {
    const liveData = await loadLiveComponents(req, ctx);
    const { components } = liveData;

    if (!components) {
      return liveData;
    }

    const newComponents = await Promise.all(
      components.map(async (c) => {
        /**
         * TODO: How do we express that ProductShelf needs to do some data loading?
         *
         * (Probably component loaders?)
         */
        if (c.component !== "ProductShelf") {
          return c;
        }

        const searchParams = new URLSearchParams();
        searchParams.set("_to", "3");
        searchParams.set("_from", "0");

        const products: Product[] = await VTEXSearchLoader({
          facets: c?.props?.collection as string,
          searchParams: searchParams,
        });

        return {
          component: c.component,
          props: {
            ...(c.props ?? {}),
            loaderData: products.map(mapVTEXProduct),
          },
        };
      }),
    );
    return { ...liveData, components: newComponents };
  },
});

export default LivePage;
