import ProductCard, { Product } from "../components/ProductCard.tsx";
import type { JSONSchema7 } from "json-schema";
import VTEXSearchLoader from "../loaders/vtex/searchCollections.ts";

export const schema: JSONSchema7 = {
  title: "Product Shelf",
  type: "object",
  required: ["collection"],
  properties: {
    title: {
      type: "string",
      title: "Título",
    },
    products: {
      $ref: "searchCollections",
      ...VTEXSearchLoader.inputSchema,
    },
  },
};

interface Props {
  collection: string;
  title: string;
  products: Product[];
}

export default function ProductShelf({ title, products }: Props) {
  return (
    <section class="max-w-[1400px] w-full p-2 md:p-0 mx-auto">
      {title && (
        <h2 class="text-center mb-8 text-sm md:text-2xl">{title}</h2>
      )}
      <div class="grid grid-cols-2 md:grid-cols-4 md:gap-2">
        {products?.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
    </section>
  );
}
