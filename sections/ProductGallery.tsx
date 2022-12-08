import ProductCard from "$components/ProductCard.tsx";

import { LoaderReturnType } from "$live/std/types.ts";
import { ProductList } from "../functions/vtexSearch.ts";

export interface Props {
  productList: LoaderReturnType<ProductList>;
}

export default function ProductGallery({
  productList,
}: Props) {
  const products = productList?.products;
  return (
    <section class="md:mx-auto px-2 md:px-4 py-8 md:py-20">
      <div class="relative grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
        {products?.map((product) => (
          <div class="w-full md:px-2 list-none">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
