import { Product } from "../vtexTypes.d.ts";
import ProductCard from "./ProductCard.tsx";
import type { JSONSchema7 } from "json-schema";
import { forwardRef } from "preact/compat";
import type { Ref } from "preact";

const Panel = forwardRef((props: Product, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      class="w-full md:px-2 list-none"
      ref={ref}
    >
      <ProductCard {...props} />
    </div>
  );
});

export const schema: JSONSchema7 = {
  title: "Product Gallery",
  "type": "object",
  required: ["collection"],
  properties: {
    products: {
      $ref: "searchCollections",
    },
  },
};

interface Props {
  collection: string;
  products: Product[];
}

export default function ProductGallery({
  products,
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
