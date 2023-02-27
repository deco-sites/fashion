import { useCart } from "$store/sdk/cart/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import CartItem from "./CartItem.tsx";

import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import { useUI } from "../../sdk/useUI.ts";
import Coupon from "./Coupon.tsx";

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");
  const discounts = cart.value?.totalizers.find((item) =>
    item.id === "Discounts"
  );
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  if (cart.value === null) {
    return null;
  }

  // Empty State
  if (isCartEmpty) {
    return (
      <div class="flex flex-col justify-center items-center h-full gap-6">
        <Text variant="display-strong">Sua sacola está vazia</Text>
        <Button
          variant="quiet"
          onClick={() => {
            displayCart.value = false;
          }}
        >
          Escolher produtos
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <ul
        role="list"
        class="py-4 flex-grow-1 overflow-y-auto flex flex-col gap-6"
      >
        {cart.value.items.map((_, index) => (
          <li>
            <CartItem index={index} key={index} />
          </li>
        ))}
      </ul>

      {/* Cart Footer */}
      <footer>
        {/* Subtotal */}
        <div class="border-t-1 border-default py-4 flex flex-col gap-4">
          {discounts?.value && (
            <div class="flex justify-between items-center">
              <Text variant="caption-regular">Descontos</Text>
              <Text variant="caption-regular">
                {formatPrice(discounts.value / 100, currencyCode!, locale)}
              </Text>
            </div>
          )}
          <Coupon />
        </div>
        {/* Total */}
        {total?.value && (
          <div class="border-t-1 border-default pt-4 flex flex-col justify-end items-end gap-2">
            <div class="flex justify-between items-center w-full">
              <Text variant="body-strong">Total</Text>
              <Text variant="heading-strong">
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </Text>
            </div>
            <Text tone="subdued" variant="caption-regular">
              Taxas e fretes serão calculados no checkout
            </Text>
          </div>
        )}
        <Button
          class="mt-4 w-full"
          as="a"
          href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          target="_blank"
          disabled={loading.value || cart.value.items.length === 0}
        >
          Finalizar Compra
        </Button>
      </footer>
    </>
  );
}

export default Cart;
