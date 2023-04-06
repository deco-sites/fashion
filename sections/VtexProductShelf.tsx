import { HandlerContext } from "$fresh/src/server/types.ts";
import ProductShelf, {
  Props as ProductShelfProps,
} from "deco-sites/fashion/components/product/ProductShelf.tsx";
import { StateVTEX } from "deco-sites/std/commerce/vtex/types.ts";
import {
  default as vtexLoader,
  Props as VtexLoaderProps,
} from "deco-sites/std/functions/vtexProductList.ts";

import { LiveConfig } from "https://denopkg.com/deco-cx/live@1.0.0-rc.36/blocks/handler.ts";

function ProductShelfSection(props: ProductShelfProps) {
  return <ProductShelf {...props} />;
}
export async function getProps(
  request: Request,
  ctx: HandlerContext<
    unknown,
    LiveConfig<
      VtexLoaderProps,
      StateVTEX
    >
  >,
): Promise<Pick<ProductShelfProps, "products">> {
  const { data: products } = await vtexLoader(request, ctx, ctx.state.$live);
  return { products };
}

export default ProductShelfSection;
