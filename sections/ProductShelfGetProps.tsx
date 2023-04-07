import { LoaderContext } from "$live/types.ts";
import ProductShelf, {
  Props as ProductShelfProps,
} from "deco-sites/fashion/components/product/ProductShelf.tsx";
import { Segment } from "deco-sites/std/commerce/vtex/types.ts";
import {
  default as vtexLoader,
  Props as VtexLoaderProps,
} from "deco-sites/std/functions/vtexProductList.ts";

import { PropsResolver } from "$live/blocks/propsResolver.ts";
import { ConfigShopify } from "deco-sites/std/commerce/shopify/client.ts";
import {
  default as shopifyLoader,
  Props as ShopifyLoaderProps,
} from "deco-sites/std/functions/shopifyProductList.ts";
import { ConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import { LiveState } from "../../live/types.ts";

function ProductShelfSection(props: ProductShelfProps) {
  return <ProductShelf {...props} />;
}

export interface PlatformVTEX {
  /**
   * @default VTEX
   */
  type: "VTEX";
}

export interface PlatformShopify {
  /**
   * @default Shopify
   */
  type: "Shopify";
}
export type LoaderProps =
  & Omit<ProductShelfProps, "products">
  & (
    | VtexLoaderProps & PlatformVTEX
    | ShopifyLoaderProps & PlatformShopify
  );

export const resolveProps: PropsResolver<ProductShelfProps, LoaderProps> =
  async (
    request: Request,
    ctx: LoaderContext<
      LoaderProps,
      LiveState<{ configVTEX?: ConfigVTEX; configShopify: ConfigShopify }> & {
        segment?: Partial<Segment>;
      }
    >,
  ): Promise<ProductShelfProps> => {
    const loader = (ctx.state.$live.type === "VTEX")
      ? vtexLoader
      : shopifyLoader;
    const { data: products } = await loader(request, ctx, ctx.state.$live);
    return { ...ctx.state.$live, products };
  };

export default ProductShelfSection;
