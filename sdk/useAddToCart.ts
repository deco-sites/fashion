import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import { AnalyticsEvent } from "deco-sites/std/commerce/types.ts";

declare global {
  interface Window {
    DECO_SITES_STD: {
      sendAnalyticsEvent: (args: AnalyticsEvent) => void;
    };
  }
}

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

      window.DECO_SITES_STD.sendAnalyticsEvent({
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
