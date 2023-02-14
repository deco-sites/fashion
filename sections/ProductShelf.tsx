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
    <div class="max-w-[1400px] w-full p-2 md:p-0 mx-auto">
      {title && <h2 class="text-center mb-8 text-lg md:text-2xl">{title}</h2>}
      <ul class="flex flex-nowrap overflow-auto w-full justify-between">
        {products?.map((product, index) => (
          <li class="min-w-[230px] max-w-[320px]">
            <ProductCard key={index} {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
