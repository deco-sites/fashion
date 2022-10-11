import ProductCard, { Product } from "../components/ProductCard.tsx";
import type { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";
import { forwardRef } from "preact/compat";
import type { h, Ref } from "preact";
import { useRef } from "preact/hooks";

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
    collection: {
      "type": "string",
      title: "Coleção",
    },
  },
};

interface Props {
  collection: string;
  title: string;
  loaderData?: Product[];
}

export default function ProductShelf({
  title,
  loaderData: products,
}: Props) {
  const flickingRef = useRef<{ prev: () => void; next: () => void }>(null);

  return (
    <section class="md:mx-auto px-2 md:px-4 py-8 md:py-20">
      <h2 class="text-center mb-8 text-sm md:text-2xl font-heavy">{title}</h2>
      <div class="relative grid grid-cols-2 gap-2 md:flex items-center">
        {products?.map((product, index) => {
          return <Panel {...product} />;
        })}
        {/* <div class="hidden md:block">
          <button
            class="absolute left-0 z-10 rounded-full border bg-white h-16 w-16"
            onClick={() => flickingRef.current?.prev()}
          >
            <ArrowRightIcon class="rotate-180" />
          </button>
          <button
            class="absolute right-0 z-10 rounded-full border bg-white h-16 w-16"
            onClick={() => flickingRef.current?.next()}
          >
            <ArrowRightIcon />
          </button>
        </div> */}
      </div>
    </section>
  );
}
