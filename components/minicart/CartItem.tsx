import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/cart/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-start gap-4">
      <Image
        src={imageUrl}
        alt={skuName}
        width={108}
        height={150}
        class="object-cover object-center"
      />
      <div class="flex-grow">
        <Text variant="body-regular">
          {name}
        </Text>
        <div class="flex items-center gap-2">
          <Text tone="subdued" variant="subcaption-regular">
            {formatPrice(listPrice / 100, currencyCode!, locale)}
          </Text>
          <Text tone={isGift ? "default" : "critical"} variant="caption-strong">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currencyCode!, locale)}
          </Text>
        </div>
        <div class="mt-6 max-w-min">
          <QuantitySelector
            disabled={loading.value || isGift}
            quantity={quantity}
            onChange={(quantity) =>
              updateItems({ orderItems: [{ index, quantity }] })}
          />
        </div>
      </div>
      <Button
        onClick={() => updateItems({ orderItems: [{ index, quantity: 0 }] })}
        disabled={loading.value || isGift}
        loading={loading.value}
        variant="icon"
      >
        <Icon id="XMark" width={20} height={20} strokeWidth={2} />
      </Button>
    </div>
  );
}

export default CartItem;
