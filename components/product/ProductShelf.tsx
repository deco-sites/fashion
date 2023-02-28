import ProductCard from "$store/components/product/ProductCard.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";
import List from "../ui/List.tsx";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

function ProductShelf({
  title,
  products,
}: Props) {
  return (
    <Container class="flex flex-col items-center gap-10 py-10">
      {title && (
        <h2>
          <Text class="uppercase" variant="subheading-strong">{title}</Text>
        </h2>
      )}
      <List>
        {products?.map((product, index) => {
          const ml = index === 0 ? "ml-4" : "";
          const mr = index === products.length - 1 ? "mr-4" : "";

          return (
            <div
              class={`min-w-[220px] max-w-[220px] sm:min-w-[287px] sm:max-w-[287px] ${ml} ${mr}`}
            >
              <ProductCard key={index} product={product} />
            </div>
          );
        })}
      </List>
    </Container>
  );
}

export default ProductShelf;
