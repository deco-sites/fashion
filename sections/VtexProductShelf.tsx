import ProductShelf, {
  Props as ProductShelfProps,
} from "deco-sites/fashion/components/product/ProductShelf.tsx";
import loader, {
  Props as LoaderProps,
} from "deco-sites/std/functions/vtexProductList.ts";
import { HandlerContext } from "https://deno.land/x/fresh@1.1.4/src/server/types.ts";
import { LiveConfig } from "https://denopkg.com/deco-cx/live@1.0.0-rc.36/blocks/handler.ts";
import { StateVTEX } from "https://denopkg.com/deco-sites/std@1.0.0-rc.9/commerce/vtex/types.ts";

export interface Props {
  title: string;
  itemsPerPage?: number;
}

function ProductShelfSection(props: ProductShelfProps) {
  return <ProductShelf {...props} />;
}

export async function getProps(
  request: Request,
  ctx: HandlerContext<
    unknown,
    LiveConfig<Props & LoaderProps, StateVTEX>
  >,
): Promise<ProductShelfProps> {
  const { data: products } = await loader(request, ctx, ctx.state.$live);
  return { ...ctx.state.$live, products };
}

export default ProductShelfSection;
