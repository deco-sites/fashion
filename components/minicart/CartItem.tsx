import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { sendEvent } from "$store/sdk/analytics.tsx";
import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

interface Props {
  index: number;
  locale: string;
  currency: string;
}

function CartItem({ index, locale, currency }: Props) {
  const {
    cart,
    updateItems,
    mapItemsToAnalyticsItems,
  } = useCart();
  const loading = useSignal(false);
  const item = cart.value!.items[index];
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  const withLoading = useCallback(
    <A,>(cb: (args: A) => void) => async (e: A) => {
      try {
        loading.value = true;
        await cb(e);
      } finally {
        loading.value = false;
      }
    },
    [loading],
  );

  return (
    <div class="flex flex-row justify-between items-start gap-4">
      <Image
        src={imageUrl}
        alt={skuName}
        width={108}
        height={150}
        class="object-cover object-center"
      />
      <div class="flex flex-grow flex-col gap-2">
        <span>{name}</span>
        <div class="flex items-center gap-2">
          <span class="line-through text-base-300 text-sm">
            {formatPrice(listPrice / 100, currency, locale)}
          </span>
          <span class="text-sm text-secondary">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currency, locale)}
          </span>
        </div>
        <div class="mt-6 max-w-min">
          <QuantitySelector
            disabled={loading.value || isGift}
            quantity={quantity}
            onChange={withLoading(async (quantity) => {
              await updateItems({ orderItems: [{ index, quantity }] });
              const quantityDiff = quantity - item.quantity;

              if (!cart.value) return;

              sendEvent({
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
            })}
          />
        </div>
      </div>
      <Button
        onClick={withLoading(async () => {
          await updateItems({ orderItems: [{ index, quantity: 0 }] });
          if (!cart.value) return;
          sendEvent({
            name: "remove_from_cart",
            params: {
              items: mapItemsToAnalyticsItems({
                items: [item],
                marketingData: cart.value.marketingData,
              }),
            },
          });
        })}
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
