import { useComputed, useSignal } from "@preact/signals";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useWishlist } from "deco-sites/std/commerce/vtex/hooks/useWishlist.ts";
import { useUser } from "deco-sites/std/commerce/vtex/hooks/useUser.ts";
import type { WishlistItem } from "deco-sites/std/commerce/vtex/types.ts";

interface Props extends Partial<WishlistItem> {
  variant?: "icon" | "full";
}

function WishlistButton({ variant = "icon", ...item }: Props) {
  const user = useUser();
  const { loading, addItem, removeItem, getItem } = useWishlist();
  const listItem = useComputed(() => getItem(item));
  const fetching = useSignal(false);

  const isUserLoggedIn = Boolean(user.value?.email);
  const isInsideWishlist = Boolean(listItem.value);

  return (
    <Button
      variant={variant === "icon" ? "icon" : "outline"}
      loading={fetching.value}
      aria-label="Add to wishlist"
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!isUserLoggedIn) {
          window.alert("Please log in before adding to your wishlist");

          return;
        }

        if (loading.value) {
          return;
        }

        try {
          fetching.value = true;
          isInsideWishlist
            ? await removeItem(listItem.value!.id)
            : await addItem(item);
        } finally {
          fetching.value = false;
        }
      }}
    >
      <Icon
        id="Heart"
        width={20}
        height={20}
        strokeWidth={2}
        fill={isInsideWishlist ? "black" : "none"}
      />
      {variant === "icon" ? null : isInsideWishlist ? "Remover" : "Favoritar"}
    </Button>
  );
}

export default WishlistButton;
