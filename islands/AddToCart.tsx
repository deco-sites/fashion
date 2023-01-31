import { useSignal } from "@preact/signals";
import { useCart } from "../sdk/cart/useCart.ts";
import Button from "$components/ui/Button.tsx";
import { OPEN_CART_EVENT_NAME } from "./Minicart.tsx";

interface Props {
  skuId: string;
  sellerId: string;
  class?: string;
  large?: boolean;
}

export default function AddToCart({ skuId, sellerId, large }: Props) {
  const isAddingToCart = useSignal(false);
  const { addItems, loading } = useCart();

  const onAddItem = async () => {
    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: 1 }],
      });

      const openMinicart = new Event(OPEN_CART_EVENT_NAME);
      dispatchEvent(openMinicart);
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
      loading={isAddingToCart.value}
      disabled={loading.value}
    >
      Adicionar à Sacola
    </Button>
  );
}
