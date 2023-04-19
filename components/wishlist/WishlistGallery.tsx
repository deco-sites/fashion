import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";
import SearchResult, {
  Props as SearchResultProps,
} from "deco-sites/fashion/components/search/SearchResult.tsx";
export type Props = SearchResultProps;
function WishlistGallery(props: Props) {
  const isEmpty = !props.page || props.page.products.length === 0;

  if (isEmpty) {
    return (
      <Container class="mx-4 sm:mx-auto">
        <div class="mx-10 my-20 flex flex-col gap-4 justify-center items-center">
          <Text variant="heading-2">
            Your wishlist is empty
          </Text>
          <Text variant="body">
            Log in and add items to your wishlist for later. They will show up
            here
          </Text>
        </div>
      </Container>
    );
  }

  return <SearchResult {...props} />;
}

export default WishlistGallery;
