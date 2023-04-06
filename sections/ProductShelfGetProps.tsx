import { LoaderContext } from "$live/types.ts";
import ProductShelf, {
  Props as ProductShelfProps,
} from "deco-sites/fashion/components/product/ProductShelf.tsx";
import { Segment } from "deco-sites/std/commerce/vtex/types.ts";
import {
  default as vtexLoader,
  Props as VtexLoaderProps,
} from "deco-sites/std/functions/vtexProductList.ts";

import { ConfigShopify } from "deco-sites/std/commerce/shopify/client.ts";
import {
  default as shopifyLoader,
  Props as ShopifyLoaderProps,
} from "deco-sites/std/functions/shopifyProductList.ts";
import { ConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import { LiveConfig } from "https://denopkg.com/deco-cx/live@1.0.0-rc.36/blocks/handler.ts";
import { LiveState } from "../../live/types.ts";

function ProductShelfSection(props: ProductShelfProps) {
  return <ProductShelf {...props} />;
}
export interface OtherProps {
  props: string;
}

export interface Category {
  name: string;
  children: Category[];
}

export interface PlatformVTEX {
  /**
   * @default VTEX
   */
  type: "VTEX";
  category: Category;
}
export interface PlatformShopify {
  /**
   * @default Shopify
   */
  type: "Shopify";
}
export async function loadData(
  request: Request,
  ctx: LoaderContext<
    LiveConfig<
      | VtexLoaderProps & PlatformVTEX
      | ShopifyLoaderProps & PlatformShopify,
      LiveState<{ configVTEX?: ConfigVTEX; configShopify: ConfigShopify }> & {
        segment?: Partial<Segment>;
      }
    >
  >,
): Promise<Pick<ProductShelfProps, "products">> {
  const loader = (ctx.state.$live.type === "VTEX") ? vtexLoader : shopifyLoader;
  const { data: products } = await loader(request, ctx, ctx.state.$live);
  return { products };
}

export default ProductShelfSection;
