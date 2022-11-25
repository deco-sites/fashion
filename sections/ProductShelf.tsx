import { ProductList } from "$live/std/commerce/types/ProductList.ts";
import { LoaderReturnType } from "$live/std/types.ts";

import ProductCard from "../components/ProductCard.tsx";

export interface Props {
  title: string;
  productList: LoaderReturnType<ProductList>;
}

export default function ProductShelf({
  title,
  productList,
}: Props) {
  const products = productList?.products;
  return (
    <section class="max-w-[1400px] w-full p-2 md:p-0 mx-auto">
      {title && <h2 class="text-center mb-8 text-sm md:text-2xl">{title}</h2>}
      <div class="grid grid-cols-2 md:grid-cols-4 md:gap-2">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
