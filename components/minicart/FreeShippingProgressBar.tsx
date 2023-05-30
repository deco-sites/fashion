import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import type { Image } from "deco-sites/std/components/types.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface FreeShippingProgressBarProps {
  freeShippingObjectiveQuantity: number;
  shippingIcon?: {
    src?: Image;
    alt?: string;
  };
}

function FreeShippingProgressBar(
  { freeShippingObjectiveQuantity, shippingIcon }: FreeShippingProgressBarProps,
) {
  const { cart, loading } = useCart();
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const cartTotal = cart.value?.totalizers.find((item) => item.id === "Items")
    ?.value || 0;
  const objectiveQuantity = freeShippingObjectiveQuantity * 100;
  const remainingAmount = cartTotal
    ? (objectiveQuantity - cartTotal) / 100
    : objectiveQuantity;
  const progressBarWidth = ((cartTotal * 100) / objectiveQuantity > 100)
    ? 100
    : (cartTotal * 100) / objectiveQuantity;

  return (
    <div class="w-full flex flex-col justify-center items-center gap-3 pt-2 mt-6 mb-3">
      <div
        class="w-full flex justify-center items-center gap-2"
        style={{ color: "#186740" }}
      >
        <img src={shippingIcon?.src} alt={shippingIcon?.alt} />
        {remainingAmount && remainingAmount <= 0
          ? <p class="text-base">Você ganhou frete grátis!</p>
          : (
            <p class="text-base">
              Faltam {formatPrice(remainingAmount, currencyCode!, locale)}{" "}
              para ganhar frete grátis!
            </p>
          )}
      </div>
      <div
        class="w-[80%] h-2  relative rounded-md"
        style={{ background: "#EAFAF2" }}
      >
        <div
          class={`h-2 rounded-md`}
          style={{ width: `${progressBarWidth}%`, background: "#186740" }}
        >
          <span
            class={`w-4 h-4 rounded-full border-1 border- bg-white bg-progress-bar absolute top-[50%] translate-y-[-50%]`}
            style={{
              left: `calc(${progressBarWidth}% - 12px`,
              border: "1px solid #186740",
            }}
          >
          </span>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingProgressBar;
