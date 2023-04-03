import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { useUI } from "$store/sdk/useUI.ts";
import { sendAnalyticsEvent } from "deco-sites/std/commerce/sdk/sendAnalyticsEvent.ts";

export interface Options {
  skuId: string;
  sellerId?: string;
  price: number;
  discount: number;
  /**
   * sku name
   */
  name: string;
  productGroupId: string;
}

export const useAddToCart = (
  { skuId, sellerId, price, discount, name, productGroupId }: Options,
) => {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const onClick = useCallback(async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!sellerId) {
      return;
    }

    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: 1 }],
      });

      sendAnalyticsEvent({
        name: "add_to_cart",
        params: {
          items: [{
            item_id: productGroupId,
            quantity: 1,
            price,
            discount,
            item_name: name,
            item_variant: skuId,
          }],
        },
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  }, [skuId, sellerId]);

  return { onClick, disabled: loading.value, loading: isAddingToCart.value };
};
