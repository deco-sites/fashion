import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";

declare global {
  interface Window {
    DECO_SITES_STD: {
      sendAnalyticsEvent: (args: AnalyticsEvent) => void;
    };
  }
}

const CHECKOUT_URL =
  "https://bravtexfashionstore.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading, mapItemsToAnalyticsItems } = useCart();
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
        <Text variant="heading-2">Sua sacola está vazia</Text>
        <Button
          variant="outline"
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
        class="mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6"
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
        <div class="border-t border-base-200 py-4 flex flex-col gap-4">
          {discounts?.value && (
            <div class="flex justify-between items-center px-4">
              <Text variant="caption">Descontos</Text>
              <Text variant="caption">
                {formatPrice(discounts.value / 100, currencyCode!, locale)}
              </Text>
            </div>
          )}
          <Coupon />
        </div>
        {/* Total */}
        {total?.value && (
          <div class="border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-4">
            <div class="flex justify-between items-center w-full">
              <Text variant="body">Total</Text>
              <Text variant="heading-3">
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </Text>
            </div>
            <Text tone="base-300" variant="caption">
              Taxas e fretes serão calculados no checkout
            </Text>
          </div>
        )}
        <div class="p-4">
          <a
            class="inline-block w-full"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          >
            <Button
              data-deco="buy-button"
              class="w-full"
              disabled={loading.value || cart.value.items.length === 0}
              onClick={() => {
                window.DECO_SITES_STD.sendAnalyticsEvent({
                  name: "begin_checkout",
                  params: {
                    currency: cart.value ? currencyCode! : "",
                    value: total?.value
                      ? (total?.value - (discounts?.value ?? 0)) / 100
                      : 0,
                    coupon: cart.value?.marketingData?.coupon ?? undefined,

                    items: cart.value
                      ? mapItemsToAnalyticsItems(cart.value)
                      : [],
                  },
                });
              }}
            >
              Finalizar Compra
            </Button>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Cart;
