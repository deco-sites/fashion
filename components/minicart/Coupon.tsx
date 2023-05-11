import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import Button from "deco-sites/fashion/components/ui/Button.tsx";

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
    <div class="flex justify-between items-center px-4">
      <span class="text-sm">Cupom de desconto</span>
      {!displayInput.value && (
        <Button
          class="btn-ghost underline"
          onClick={toggleInput}
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
            class="w-[140px] border rounded p-2 text-caption font-caption"
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
