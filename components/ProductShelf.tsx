import ProductCard, { Product } from "../components/ProductCard.tsx";
import type { JSONSchema7 } from "json-schema";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";
import { useRef } from "preact/hooks";
import VTEXSearchLoader from "../loaders/vtex/searchCollections.ts";

const Panel = forwardRef((props: Product, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      class="w-full md:w-1/4 md:px-2 list-none"
      ref={ref}
    >
      <ProductCard {...props} />
    </div>
  );
});

export const schema: JSONSchema7 = {
  title: "Product Shelf",
  "type": "object",
  required: ["title", "collection"],
  properties: {
    title: {
      "type": "string",
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

export default function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <section class="md:mx-auto px-2 md:px-4 py-8 md:py-20">
      <h2 class="text-center mb-8 text-sm md:text-2xl font-heavy">{title}</h2>
      <div class="relative grid grid-cols-2 gap-2 md:flex items-center">
        {products?.map((product, index) => {
          return <Panel {...product} />;
        })}
      </div>
    </section>
  );
}
