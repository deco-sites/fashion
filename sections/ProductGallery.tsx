import ProductCard from "$components/ProductCard.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import type { ProductListingPage } from "$live/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

export default function ProductGallery({ page }: Props) {
  return (
    <section class="md:mx-auto px-2 md:px-4 py-8 md:py-20">
      <div class="relative grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
        {page?.products?.map((product) => (
          <div class="w-full md:px-2 list-none">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
