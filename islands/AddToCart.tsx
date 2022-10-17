import { tw } from "twind";
import { useState } from "preact/hooks";
import { useCart } from "../data/cartHooks.ts";

// TODO: Is this really called skuId?
interface Props {
  skuId: string;
  sellerId: string;
  class?: string;
  large?: boolean;
}

export default function AddToCart(
  { skuId, sellerId, large, class: className }: Props,
) {
  const [loading, setLoading] = useState(false);
  const { addItem } = useCart();

  const onAddItem = () => {
    setLoading(true);
    addItem(skuId, sellerId).finally(() => {
      setLoading(false);
    });
  };

  return (
    <button
      class={tw`${
        loading ? "bg-gray-500" : "bg-black"
      } text-white ${large ? 'px-14 py-4 text-lg' : 'px-6 py-2 text w-full'} uppercase bg-primary-red hover:bg-primary-red-dark`}
      onClick={onAddItem}
    >
      Adicionar à sacola
    </button>
  );
}
