import ProductCard from "$components/ProductCard.tsx";
import { ProductList } from "$live/std/commerce/types/ProductList.ts";
import { Product } from "$live/std/commerce/types/Product.ts";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";

const Panel = forwardRef((props: Product, ref: Ref<HTMLDivElement>) => {
  return (
    <div class="w-full md:px-2 list-none" ref={ref}>
      <ProductCard {...props} />
    </div>
  );
});

interface Props {
  collection: string;
  productsResponse: ProductList;
}

export default function ProductGallery({
  productsResponse: { products },
}: Props) {
  return (
    <section class="md:mx-auto px-2 md:px-4 py-8 md:py-20">
      <div class="relative grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
        {products?.map((product, index) => {
          return <Panel key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
