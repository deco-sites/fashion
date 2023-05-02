import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

import { formatPrice } from "deco-sites/fashion/sdk/format.ts";

export interface Props {
  value?: number;
}

function FreeShippingBar({ value }: Props) {
  const { cart } = useCart();

  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  const total = cart.value?.totalizers.find((item) => item.id === "Items");

  if (!total || !value) return null;

  const progress = ((total?.value / 100) / value) * 100;

  return (
    <>
      <div className="pt-4 mx-4">
        <div className="mb-2 text-[#1A7346]">
          <Icon
            className="mr-2 inline-block"
            id="TruckShippingBar"
            size={21}
            stroke="currentColor"
            strokeWidth={0}
          />
          {progress < 100
            ? `Faltam R$ ${
              formatPrice(value - total?.value / 100, currencyCode!, locale)
            } para o frete grátis`
            : "Parabéns! Você tem frete grátis"}
        </div>
        <div
          className="bg-[#D4DBD7] h-2.5 rounded-full"
          style={{ width: `100%` }}
        >
          <div
            className="max-w-full bg-[#1A7346] h-2.5 rounded-full after:content-[''] after:h-[10px] after:w-[10px] after:ml-0.5 after:bg-[#FFFFFF] after:block after:rounded-full after:float-right block"
            style={{ width: `${progress}%` }}
          >
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeShippingBar;
