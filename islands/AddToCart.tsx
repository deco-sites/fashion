import { useState } from "preact/hooks";
import { useCart } from "../data/cartHooks.ts";
import Button from "../components/ui/Button.tsx";
import { OPEN_CART_EVENT_NAME } from "./Minicart.tsx";

// TODO: Is this really called skuId?
interface Props {
  skuId: string;
  sellerId: string;
  class?: string;
  large?: boolean;
}

export default function AddToCart({ skuId, sellerId, large }: Props) {
  const [loading, setLoading] = useState(false);
  const { addItem } = useCart();

  const onAddItem = () => {
    setLoading(true);
    addItem(skuId, sellerId)
      .then(() => {
        const openMinicart = new Event(OPEN_CART_EVENT_NAME);
        dispatchEvent(openMinicart);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button
      class={`${
        large ? "p-4 md:text-lg w-64 h-14" : "px-6 py-2 w-full"
      } bg-primary-red hover:bg-primary-red-dark focus:ring-1 focus:outline-none focus:ring-primary-red-light uppercase`}
      onClick={onAddItem}
      isLoading={loading}
    >
      Adicionar à Sacola
    </Button>
  );
}
