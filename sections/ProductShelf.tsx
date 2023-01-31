import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

export default function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <section class="max-w-[1400px] w-full p-2 md:p-0 mx-auto">
      {title && <h2 class="text-center mb-8 text-lg md:text-2xl">{title}</h2>}
      <div class="grid grid-cols-2 md:grid-cols-4 md:gap-4">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
