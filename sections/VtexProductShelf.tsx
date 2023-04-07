import { PropsLoader } from "$live/mod.ts";
import { LoaderContext } from "$live/types.ts";
import ProductShelf, {
  Props as ProductShelfProps,
} from "deco-sites/fashion/components/product/ProductShelf.tsx";
import { StateVTEX } from "deco-sites/std/commerce/vtex/types.ts";
import {
  default as vtexLoader,
  Props as VtexLoaderProps,
} from "deco-sites/std/functions/vtexProductList.ts";

function ProductShelfSection(props: ProductShelfProps) {
  return <ProductShelf {...props} />;
}

export type LoaderInput =
  & { productsQuery: VtexLoaderProps }
  & Omit<ProductShelfProps, "products">;
export async function loadData(
  request: Request,
  ctx: LoaderContext<
    LoaderInput,
    StateVTEX
  >,
) {
  const { data: products } = await vtexLoader(
    request,
    ctx,
    ctx.state.$live.productsQuery,
  );
  return products;
}

export default ProductShelfSection;

export const loader: PropsLoader<
  ProductShelfProps,
  LoaderInput
> = {
  products: loadData,
};
