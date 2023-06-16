import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import Button from "$store/components/ui/Button.tsx";

function SellerCode() {
  const { cart, loading, addCouponsToCart } = useCart();
  const ref = useRef<HTMLInputElement>(null);
  const displayInput = useSignal(false);
  const sellerCode = cart.value?.marketingData?.coupon;

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
      <span class="text-sm">Código do vendedor</span>
      {!displayInput.value && (
        <Button
          class="btn-ghost underline font-normal"
          onClick={toggleInput}
        >
          {sellerCode || "Adicionar"}
        </Button>
      )}
      {displayInput.value && (
        <form class="join">
          <input
            id="coupon"
            name="coupon"
            ref={ref}
            class="input join-item"
            type="text"
            value={sellerCode ?? ""}
            placeholder={"Código do vendedor"}
          />
          <Button
            class="join-item"
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

export default SellerCode;
