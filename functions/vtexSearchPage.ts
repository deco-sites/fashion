import VTEXIntelligentSearch, {
  mapVTEXIntelligentSearchProduct,
} from "$live/std/commerce/clients/vtex.ts";
import { ProductList } from "$live/std/commerce/types/ProductList.ts";
import { LoaderFunction } from "$live/std/types.ts";
import { getFacetsFromUrl, VTEX_ACCOUNT } from "../routes/api/searchFacets.ts";

/**
 * @label VTEX - Search Page
 * @description Usa Intelligent Search
 */
const VTEXSearchPageLoader: LoaderFunction<null, ProductList> = async (
  req,
  _ctx,
) => {
  const url = new URL(req.url);
  const selectedFacets = getFacetsFromUrl(url);

  const query = url.searchParams.get("ft") ?? "";
  const vtexIs = new VTEXIntelligentSearch(VTEX_ACCOUNT);

  const { products: vtexProducts } = await vtexIs.search({
    query,
    page: 0,
    // TODO: Implement pagination
    count: 12,
    selectedFacets,
    hideUnavailableItems: true,
  });

  const products = vtexProducts.map(mapVTEXIntelligentSearchProduct());

  return { data: { products } };
};

export default VTEXSearchPageLoader;
