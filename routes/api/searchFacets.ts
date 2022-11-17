import { Handlers } from "$fresh/server.ts";
import VTEXIntelligentSearch from "$live/std/commerce/clients/vtex.ts";

export const VTEX_ACCOUNT = "lojaoffpremium";
/**
 * Despite having a hidden param, there's a lot of "garbage" facets returned from the API.
 *
 * I'd filter them in the UI, but some like 'cor' (not 'cores-filtraveis') add a lof of overhead
 *
 * Example JSON: https://gist.github.com/lucis/7f625386e21fe6553be75b930f2c023f
 *
 * TODO: Is this a store config? Could we leverage IntelligentSearch config?
 */
const VALID_FACETS_KEYS = [
  "category-1",
  "category-2",
  // "price",
  "colecao",
  "cores-filtraveis",
  "genero",
  "brand",
];

// TODO: Move this to search utils
export const getFacetsFromUrl = (
  url: URL,
): Array<{ key: string; value: string }> => {
  const facets: Array<{ key: string; value: string }> = [];

  url.searchParams.forEach((value, key) => {
    if (key === "sort") {
      return;
    }

    facets.push({ key, value });
  });

  return facets;
};

export const handler: Handlers = {
  async GET(req) {
    // TODO: Get current state of search
    const url = new URL(req.url);
    const __facetsFromUrl = getFacetsFromUrl(url);

    const vtexIs = new VTEXIntelligentSearch(VTEX_ACCOUNT);

    const facetsResponse = await vtexIs.facets({
      count: 4,
      page: 0,
      selectedFacets: __facetsFromUrl,
      query: encodeURIComponent(url.searchParams.get("ft") ?? ""),
      hideUnavailableItems: true,
    });

    const validFacets = facetsResponse.facets.filter(({ key }) =>
      VALID_FACETS_KEYS.includes(key)
    );

    return Response.json({ ...facetsResponse, facets: validFacets });
  },
};
