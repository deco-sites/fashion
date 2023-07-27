import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";
import SellerCode from "./SellerCode.tsx";
import FreeShippingProgressBar from "./FreeShippingProgressBar.tsx";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading, mapItemsToAnalyticsItems } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const totalizers = cart.value?.totalizers;
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const total = totalizers?.find((item) => item.id === "Items")?.value || 0;
  const discounts =
    totalizers?.find((item) => item.id === "Discounts")?.value || 0;

  return (
    <div
      class="flex flex-col justify-center items-center overflow-hidden"
      style={{ minWidth: "calc(min(100vw, 425px))", maxWidth: "425px" }}
    >
      {cart.value == null || isCartEmpty
        ? (
          <>
            <div class="flex flex-col gap-6">
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
          </>
        )
        : (
          <>
            {/* Free Shipping Bar */}
            <div class="px-2 py-4 w-full">
              <FreeShippingProgressBar
                total={total / 100}
                target={1000}
                locale={locale!}
                currency={currencyCode!}
              />
            </div>

            {/* Cart Items */}
            <ul
              role="list"
              class="mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6 w-full"
            >
              {cart.value.items.map((_, index) => (
                <li key={index}>
                  <CartItem
                    index={index}
                    currency={currencyCode!}
                    locale={locale!}
                  />
                </li>
              ))}
            </ul>

            {/* Cart Footer */}
            <footer class="w-full">
              {/* Subtotal */}
              <div class="border-t border-base-200 py-2 flex flex-col">
                {discounts > 0 && (
                  <div class="flex justify-between items-center px-4">
                    <span class="text-sm">Descontos</span>
                    <span class="text-sm">
                      {formatPrice(discounts / 100, currencyCode!, locale)}
                    </span>
                  </div>
                )}
                <div class="w-full flex justify-between px-4 text-sm">
                  <span>Subtotal</span>
                  <span class="px-4">
                    {total
                      ? formatPrice(total / 100, currencyCode!, locale)
                      : ""}
                  </span>
                </div>
                <Coupon />
                <SellerCode />
              </div>

              {/* Total */}
              <div class="border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-4">
                <div class="flex justify-between items-center w-full">
                  <span>Total</span>
                  <span class="font-medium text-xl">
                    {formatPrice(total / 100, currencyCode!, locale)}
                  </span>
                </div>
                <span class="text-sm text-base-300">
                  Taxas e fretes serão calculados no checkout
                </span>
              </div>

              <div class="p-4">
                <a class="inline-block w-full" href="/checkout">
                  <Button
                    data-deco="buy-button"
                    class="btn-primary btn-block"
                    disabled={loading.value || cart.value.items.length === 0}
                    onClick={() => {
                      sendEvent({
                        name: "begin_checkout",
                        params: {
                          currency: cart.value ? currencyCode! : "",
                          value: (total - discounts) / 100,
                          coupon: cart.value?.marketingData?.coupon ??
                            undefined,

                          items: cart.value
                            ? mapItemsToAnalyticsItems(cart.value)
                            : [],
                        },
                      });
                    }}
                  >
                    Fechar pedido
                  </Button>
                </a>
              </div>
            </footer>
          </>
        )}
    </div>
  );
}

export default Cart;
