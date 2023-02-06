import { useCart } from "../../sdk/cart/useCart.ts";
import { useUI } from "../../sdk/useUI.ts";
import Icon from "../ui/Icon.tsx";

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <button
      class="flex items-center justify-center relative h-12 w-12"
      aria-label="open cart"
      onClick={() => {
        displayCart.value = true;
      }}
      disabled={loading.value}
    >
      <Icon id="ShoppingCart" className="w-6 h-6" />
      {totalItems && (
        <div class="absolute text-sm right-0 top-0 rounded-full bg-red-500 text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </div>
      )}
    </button>
  );
}

export default CartButton;
