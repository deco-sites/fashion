import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
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
        <span class="font-medium text-2xl">Sua sacola está vazia</span>
        <Button
          class="btn-outline"
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
              <span class="text-sm">Descontos</span>
              <span class="text-sm">
                {formatPrice(discounts.value / 100, currencyCode!, locale)}
              </span>
            </div>
          )}
          <Coupon />
        </div>
        {/* Total */}
        {total?.value && (
          <div class="border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-4">
            <div class="flex justify-between items-center w-full">
              <span>Total</span>
              <span class="font-medium text-xl">
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </span>
            </div>
            <span class="text-sm text-base-300">
              Taxas e fretes serão calculados no checkout
            </span>
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
