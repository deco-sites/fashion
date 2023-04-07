import { useComputed, useSignal } from "@preact/signals";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import { useWishlist } from "deco-sites/std/commerce/vtex/hooks/useWishlist.ts";
import { WishlistItem } from "deco-sites/std/commerce/vtex/types.ts";

interface Props extends Partial<WishlistItem> {
  variant?: "icon" | "full";
}

function WishlistButton({ variant = "icon", ...item }: Props) {
  const { loading, addItem, removeItem, getItem } = useWishlist();
  const listItem = useComputed(() => getItem(item));
  const fetching = useSignal(false);

  return (
    <Button
      variant={variant === "icon" ? "icon" : "secondary"}
      disabled={loading} // It's always loading untill the user logs in
      loading={fetching.value}
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();

        try {
          fetching.value = true;
          listItem.value
            ? await removeItem(listItem.value.id)
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
        fill={listItem.value ? "black" : "none"}
      />
      {variant === "icon" ? null : listItem.value ? "Remover" : "Favoritar"}
    </Button>
  );
}

export default WishlistButton;
