import ProductCard from "$store/components/product/ProductCard.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <div class="w-full p-2 flex flex-col items-center">
      {title && <h2 class="text-lg md:text-2xl">{title}</h2>}
      <ul class="flex flex-nowrap overflow-x-auto max-w-full gap-2 scroll-x-mandatory scroll-smooth">
        {products?.map((product, index) => (
          <li class="min-w-[220px] max-w-[250px] sm:min-w-[250px] sm:max-w-[280px] scroll-snap-center">
            <ProductCard key={index} {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductShelf;
