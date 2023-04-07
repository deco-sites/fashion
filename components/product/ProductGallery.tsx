import { Product } from "deco-sites/std/commerce/types.ts";

import ProductCard from "./ProductCard.tsx";

export interface Columns {
  mobile?: number;
  desktop?: number;
}

export interface Props {
  products: Product[] | null;
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
}

function ProductGallery({ columns, products }: Props) {
  const { desktop = 4, mobile = 2 } = columns ?? {};

  return (
    <div
      class={`grid grid-cols-${mobile} gap-2 items-center sm:(grid-cols-${desktop} gap-10)`}
    >
      {products?.map((product, index) => (
        <ProductCard product={product} preload={index === 0} />
      ))}
    </div>
  );
}

export default ProductGallery;
