import Image from "deco-sites/std/components/Image.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import Button from "deco-sites/fashion/components/ui/Button.tsx";
import QuantitySelector from "deco-sites/fashion/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

declare global {
  interface Window {
    DECO_SITES_STD: {
      sendAnalyticsEvent: (args: AnalyticsEvent) => void;
    };
  }
}

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems, mapItemsToAnalyticsItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-start gap-4">
      <Image
        src={imageUrl}
        alt={skuName}
        width={108}
        height={150}
        class="object-cover object-center"
      />
      <div class="flex-grow">
        <span>{name}</span>
        <div class="flex items-center gap-2">
          <span class="line-through text-base-300 text-sm">
            {formatPrice(listPrice / 100, currencyCode!, locale)}
          </span>
          <span class="text-sm text-secondary">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currencyCode!, locale)}
          </span>
        </div>
        <div class="mt-6 max-w-min">
          <QuantitySelector
            disabled={loading.value || isGift}
            quantity={quantity}
            onChange={(quantity) => {
              updateItems({ orderItems: [{ index, quantity }] });
              const quantityDiff = quantity - item.quantity;

              if (!cart.value) return;

              window.DECO_SITES_STD.sendAnalyticsEvent({
                name: quantityDiff < 0 ? "remove_from_cart" : "add_to_cart",
                params: {
                  items: mapItemsToAnalyticsItems({
                    items: [{
                      ...item,
                      quantity: Math.abs(quantityDiff),
                    }],
                    marketingData: cart.value.marketingData,
                  }),
                },
              });
            }}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          updateItems({ orderItems: [{ index, quantity: 0 }] });
          if (!cart.value) return;
          window.DECO_SITES_STD.sendAnalyticsEvent({
            name: "remove_from_cart",
            params: {
              items: mapItemsToAnalyticsItems({
                items: [item],
                marketingData: cart.value.marketingData,
              }),
            },
          });
        }}
        disabled={loading.value || isGift}
        loading={loading.value}
        class="btn btn-ghost"
      >
        <Icon id="Trash" width={20} height={20} />
      </Button>
    </div>
  );
}

export default CartItem;
