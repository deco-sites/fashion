import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

function ProductGallery({ page }: Props) {
  return (
    <Container class="sm:py-10">
      <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 items-center">
        {page?.products?.map((product, index) => (
          <div class="w-full sm:px-2 list-none">
            <ProductCard product={product} preload={index === 0} />
          </div>
        ))}
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4">
        <Button
          as="a"
          rel="prev"
          disabled={!page.pageInfo.previousPage}
          href={page.pageInfo.previousPage ?? "#"}
          variant="icon"
        >
          <Text tone={page.pageInfo.previousPage ? "default" : "subdued"}>
            <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
          </Text>
        </Button>
        <Text variant="caption-regular">
          {page.pageInfo.currentPage + 1}
        </Text>
        <Button
          as="a"
          rel="next"
          disabled={!page.pageInfo.nextPage}
          href={page.pageInfo.nextPage ?? "#"}
          variant="icon"
        >
          <Text tone={page.pageInfo.nextPage ? "default" : "subdued"}>
            <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
          </Text>
        </Button>
      </div>
    </Container>
  );
}

export default ProductGallery;
