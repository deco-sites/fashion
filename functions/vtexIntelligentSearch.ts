import VTEXIntelligentSearch, {
  mapVTEXIntelligentSearchProduct,
} from "$live/std/commerce/clients/vtex.ts";
import { ProductList } from "$live/std/commerce/types/ProductList.ts";
import { LoaderFunction } from "$live/std/types.ts";
import { VTEX_ACCOUNT } from "../routes/api/searchFacets.ts";

export interface Props {
  searchQuery: string;
  count: number;
}

/**
 * @label VTEX - Intelligent Search
 * @description Busque produtos com queries complexas
 */
const VTEXSearchLoader: LoaderFunction<Props, ProductList> = async (
  _req,
  _ctx,
  { count, searchQuery }
) => {
  const query = encodeURIComponent(searchQuery);

  const vtexIs = new VTEXIntelligentSearch(VTEX_ACCOUNT);
  const { products: vtexProducts } = await vtexIs.search({
    query,
    page: 0,
    count,
    hideUnavailableItems: true,
  });

  const products = vtexProducts.map(mapVTEXIntelligentSearchProduct());

  return { data: { products } };
};

export default VTEXSearchLoader;
