import { Product } from "../vtexTypes.d.ts";
import ProductCard from "./ProductCard.tsx";

type LoaderData = { loaderData?: Product[] };

export default function ProductGallery({ loaderData: products }: LoaderData) {
  return (
    <section class="py-20">
      <div class="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {products?.map((product) => <ProductCard {...product} />)}
      </div>
    </section>
  );
}
