import { useSignal } from "@preact/signals";
import Button from "$components/ui/Button.tsx";

import { useCart } from "../sdk/cart/useCart.ts";
import { useUI } from "../sdk/useUI.ts";

interface Props {
  skuId: string;
  sellerId: string;
  class?: string;
  large?: boolean;
}

export default function AddToCart({ skuId, sellerId, large }: Props) {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const onAddItem = async () => {
    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: 1 }],
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  };

  return (
    <Button
      class={`${
        large ? "p-4 md:text-lg w-64 h-14" : "px-6 py-2 w-full"
      } bg-primary-red hover:bg-primary-red-dark focus:ring-1 focus:outline-none focus:ring-primary-red-light uppercase`}
      onClick={onAddItem}
      fit="container"
      loading={isAddingToCart.value}
      disabled={loading.value}
    >
      Adicionar à Sacola
    </Button>
  );
}
