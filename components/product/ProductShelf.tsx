import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

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
      <Slider>
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
      </Slider>
    </Container>
  );
}

export default ProductShelf;
