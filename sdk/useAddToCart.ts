import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "$store/sdk/cart/useCart.ts";
import { useUI } from "$store/sdk/useUI.ts";

interface Options {
  skuId: string;
  sellerId: string;
}

export const useAddToCart = ({ skuId, sellerId }: Options) => {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const onClick = useCallback(async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: 1 }],
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  }, [skuId, sellerId]);

  return { onClick, disabled: loading.value, loading: isAddingToCart.value };
};
