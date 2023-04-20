import Filters from "deco-sites/fashion/components/search/Filters.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import SearchControls from "deco-sites/fashion/islands/SearchControls.tsx";
import ViewSendEvent from "deco-sites/fashion/components/ViewSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import ProductGallery, { Columns } from "../product/ProductGallery.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  /**
   * @description Use drawer for mobile like behavior on desktop. Aside for rendering the filters alongside the products
   */
  variant?: "aside" | "drawer";
  /**
   * @description Number of products per line on grid
   */
  columns: Columns;
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
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <>
      <Container class="px-4 sm:py-10">
        <SearchControls
          sortOptions={sortOptions}
          filters={filters}
          breadcrumb={breadcrumb}
          displayFilter={variant === "drawer"}
        />

        <div class="flex flex-row">
          {variant === "aside" && filters.length > 0 && (
            <aside class="hidden sm:block w-min min-w-[250px]">
              <Filters filters={filters} />
            </aside>
          )}
          <div class="flex-grow">
            <ProductGallery products={products} />
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
      <ViewSendEvent
        event={{
          name: "view_item_list",
          params: {
            // TODO: get category name from search or cms setting
            item_list_name: "",
            item_list_id: "",
            items: page.products?.map((product) =>
              mapProductToAnalyticsItem({
                ...(useOffer(product.offers)),
                product,
                breadcrumbList: page.breadcrumb,
              })
            ),
          },
        }}
      />
    </>
  );
}

function SearchResult({ page, ...props }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result {...props} page={page} />;
}

export default SearchResult;
