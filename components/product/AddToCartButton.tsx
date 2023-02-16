import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "$store/sdk/cart/useCart.ts";
import { useUI } from "$store/sdk/useUI.ts";

interface Props {
  skuId: string;
  sellerId: string;
  large?: boolean;
}

const useAddToCartButton = (
  { skuId, sellerId }: Pick<Props, "skuId" | "sellerId">,
) => {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const addItem = useCallback(async () => {
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

  return { addItem, disabled: loading.value, loading: isAddingToCart.value };
};

function AddToCartButton({ skuId, sellerId, large }: Props) {
  const { addItem, disabled, loading } = useAddToCartButton({
    skuId,
    sellerId,
  });

  return (
    <Button
      class={`${
        large ? "p-4 md:text-lg w-64 h-14" : "px-6 py-2 w-full"
      } bg-primary-red hover:bg-primary-red-dark focus:ring-1 focus:outline-none focus:ring-primary-red-light uppercase`}
      onClick={addItem}
      fit="container"
      loading={loading}
      disabled={disabled}
    >
      Adicionar à Sacola
    </Button>
  );
}

export default AddToCartButton;
