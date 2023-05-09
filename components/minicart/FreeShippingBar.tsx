import Icon from "deco-sites/fashion/components/ui/Icon.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

import { formatPrice } from "deco-sites/fashion/sdk/format.ts";

export interface Props {
  /**
   * @title Free shipping bar calculation value
   * @description Amount used for free shipping rule calculation
   */
  value?: number;
  messages?: Messages;
}

export interface Messages {
  /**
   * @title Default message
   * @description Default message displayed when I don't have free shipping
   */
  defaultMessage: string;

  /**
   * @title Free shipping message
   * @description Message displayed when I have free shipping
   */
  freeShippingMessage: string;
}

function FreeShippingBar(
  { value, messages }: Props,
) {
  const { cart } = useCart();

  const total = cart.value?.totalizers.find((item) => item.id === "Items");

  if (!total || !value || !messages) return null;

  const { defaultMessage, freeShippingMessage } = messages;
  
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
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
            ? defaultMessage.replace(
              "{value}",
              String(
                formatPrice(
                  (value - total?.value) / 100,
                  currencyCode!,
                  locale,
                ),
              ),
            )
            : freeShippingMessage}
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
