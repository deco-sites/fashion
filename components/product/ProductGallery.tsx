import { Product } from "deco-sites/std/commerce/types.ts";

import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";

export interface Columns {
  mobile?: number;
  desktop?: number;
}

export interface Props {
  products: Product[] | null;
  layout?: cardLayout;
}

function ProductGallery({ products, layout }: Props) {
  return (
    <div class="grid grid-cols-2 gap-2 items-center sm:grid-cols-4 sm:gap-10">
      {products?.map((product, index) => (
        <ProductCard product={product} preload={index === 0} layout={layout} />
      ))}
    </div>
  );
}

export default ProductGallery;
