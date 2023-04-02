import Filters from "$store/components/search/Filters.tsx";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  variant?: "sidebar" | "drawer";
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <Text>Not Found!</Text>
    </div>
  );
}

function Result({
  page,
  variant,
}: { page: ProductListingPage; variant: Props["variant"] }) {
  const { products, filters, breadcrumb, pageInfo } = page;

  return (
    <Container class="px-4 sm:py-10">
      <SearchControls
        filters={filters}
        breadcrumb={breadcrumb}
        displayFilter={variant === "drawer"}
      />

      <div class="flex flex-row">
        {variant === "sidebar" && (
          <aside class="hidden sm:block w-min min-w-[250px] row-start-1 row-span-full col-start-1 col-span-1">
            <Filters filters={filters} />
          </aside>
        )}
        <div
          class={`flex-grow grid grid-cols-2 gap-2 items-center sm:(grid-cols-${
            variant === "sidebar" ? 3 : 4
          } gap-10)`}
        >
          {products?.map((product, index) => (
            <ProductCard product={product} preload={index === 0} />
          ))}
        </div>
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4">
        <a rel="prev" href={pageInfo.previousPage ?? "#"}>
          <Button
            disabled={!pageInfo.previousPage}
            variant="icon"
            aria-label="previous page"
          >
            <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
        <Text variant="caption">
          {pageInfo.currentPage + 1}
        </Text>
        <a rel="next" href={pageInfo.nextPage ?? "#"}>
          <Button
            disabled={!pageInfo.nextPage}
            variant="icon"
            aria-label="next page"
          >
            <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
      </div>
    </Container>
  );
}

function SearchResult({ page, variant = "sidebar" }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result page={page} variant={variant} />;
}

export default SearchResult;
