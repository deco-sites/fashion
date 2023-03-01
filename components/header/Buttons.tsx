import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/cart/useCart.ts";

function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <>
      <Button
        variant="icon"
        aria-label="search icon button"
        onClick={() => {
          displaySearchbar.value = true;
        }}
      >
        <Icon id="MagnifyingGlass" width={20} height={20} strokeWidth={0.1} />
      </Button>
    </>
  );
}

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={20} height={20} strokeWidth={0.01} />
    </Button>
  );
}

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <Button
      variant="icon"
      class="relative mr-2"
      aria-label="open cart"
      disabled={loading.value}
      onClick={() => {
        displayCart.value = true;
      }}
    >
      <Icon id="ShoppingCart" width={20} height={20} strokeWidth={0.1} />
      {totalItems && (
        <span class="absolute text-sm right-[-8px] top-[-8px] rounded-full bg-decorative-two text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}

function HeaderButton({ variant }: { variant: "cart" | "search" | "menu" }) {
  if (variant === "cart") {
    return <CartButton />;
  }

  if (variant === "search") {
    return <SearchButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }

  return null;
}

export default HeaderButton;
