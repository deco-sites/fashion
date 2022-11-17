import VTEXIntelligentSearch, {
  mapVTEXIntelligentSearchProduct,
} from "$live/std/commerce/clients/vtex.ts";
import { Product } from "$live/std/commerce/types/Product.ts";
import { LoaderFunction } from "$live/std/types.ts";
import { VTEX_ACCOUNT } from "../routes/api/searchFacets.ts";

/**
 * @label VTEX - Página de Produto
 * @description Para rotas /:slug/p
 */
const VTEXProductPageLoader: LoaderFunction<null, Product> = async (
  _req,
  ctx,
) => {
  const skuId = ctx.params.slug.split("-").pop();
  const query = `sku:${skuId}`;

  const vtexIs = new VTEXIntelligentSearch(VTEX_ACCOUNT);
  const { products: vtexProducts } = await vtexIs.search({
    query,
    page: 0,
    count: 1,
    hideUnavailableItems: true,
  });

  const products = vtexProducts.map(mapVTEXIntelligentSearchProduct());

  const matchProduct = products[0];
  return { data: matchProduct };
};

export default VTEXProductPageLoader;
