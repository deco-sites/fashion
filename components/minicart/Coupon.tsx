import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useCart } from "$store/sdk/cart/useCart.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

function Coupon() {
  const { cart, loading, addCouponsToCart } = useCart();
  const ref = useRef<HTMLInputElement>(null);
  const displayInput = useSignal(false);
  const coupon = cart.value?.marketingData?.coupon;

  const toggleInput = () => {
    displayInput.value = !displayInput.value;
  };

  const applyCouponToCart = (e: MouseEvent) => {
    e.preventDefault();

    const text = ref.current?.value;

    if (typeof text === "string") {
      addCouponsToCart({ text });
      toggleInput();
    }
  };

  return (
    <div class="flex justify-between items-center">
      <Text variant="caption-regular">Coupon de desconto</Text>
      {!displayInput.value && (
        <Button
          class="underline text-caption-regular font-caption-regular"
          onClick={toggleInput}
          variant="icon"
        >
          {coupon || "Adicionar"}
        </Button>
      )}
      {displayInput.value && (
        <form class="flex gap-2">
          <input
            id="coupon"
            name="coupon"
            ref={ref}
            class="w-[140px] border rounded p-2 text-caption-regular font-caption-regular"
            type="text"
            value={coupon ?? ""}
            placeholder={"Coupom"}
          />
          <Button
            type="submit"
            htmlFor="coupon"
            loading={loading.value}
            onClick={applyCouponToCart}
          >
            Ok
          </Button>
        </form>
      )}
    </div>
  );
}

export default Coupon;
