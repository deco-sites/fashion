import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import ProductGallery, {
  Columns,
} from "deco-sites/fashion/components/product/ProductGallery.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  columns: Columns;
  products: LoaderReturnType<Product[] | null>;
}

function WishlistGallery(props: Props) {
  const { products } = props;
  const isEmpty = !products || products.length === 0;

  return (
    <Container class="override:(mx-4 sm:mx-auto)">
      {isEmpty
        ? (
          <div class="mx-10 my-20 flex flex-col gap-4 justify-center items-center">
            <Text variant="heading-2">
              Your wishlist is empty
            </Text>
            <Text variant="body">
              Log in and add items to your wishlist for later. They will show up
              here
            </Text>
          </div>
        )
        : (
          <div class="flex flex-col divide-y">
            <div class="pb-4 pt-8">
              <Text variant="heading-2">
                Wishlist
              </Text>
            </div>
            <div class="py-6">
              <ProductGallery {...props} />
            </div>
          </div>
        )}
    </Container>
  );
}

export default WishlistGallery;
