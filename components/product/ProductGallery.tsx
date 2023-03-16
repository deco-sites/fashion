import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Gallery({ page }: { page: ProductListingPage }) {
  return (
    <Container class="px-4 sm:py-10">
      <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 items-center">
        {page.products?.map((product, index) => (
          <div class="w-full list-none">
            <ProductCard product={product} preload={index === 0} />
          </div>
        ))}
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4">
        <a rel="prev" href={page.pageInfo.previousPage ?? "#"}>
          <Button disabled={!page.pageInfo.previousPage} variant="icon">
            <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
        <Text variant="caption">
          {page.pageInfo.currentPage + 1}
        </Text>
        <a rel="next" href={page.pageInfo.nextPage ?? "#"}>
          <Button disabled={!page.pageInfo.nextPage} variant="icon">
            <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
      </div>
    </Container>
  );
}

function ProductGallery({ page }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Gallery page={page} />;
}

export default ProductGallery;
