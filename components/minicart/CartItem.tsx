import Image from "$live/std/ui/components/Image.tsx";

import QuantitySelector from "../ui/QuantitySelector.tsx";
import { useCart } from "../../sdk/cart/useCart.ts";
import Button from "../ui/Button.tsx";

interface Props {
  index: number;
}

export const formatPrice = (cents: number) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    detailUrl,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <li class="flex gap-2 py-6">
      <div class="overflow-hidden rounded-md border border-gray-200">
        <Image
          src={imageUrl}
          alt={skuName}
          width={100}
          height={100}
          class="object-cover object-center"
        />
      </div>
      <div class="flex flex-grow flex-col justify-between">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900 overflow-hidden">
            <a href={detailUrl}>
              <h3>{name} {skuName === name ? "" : skuName}</h3>
            </a>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-sm line-through font-extralight">
            {formatPrice(listPrice)}
          </span>
          {isGift
            ? <span class="text-lg font-semibold text-green-600">Grátis</span>
            : (
              <span class="text-lg font-semibold text-primary-red">
                {formatPrice(sellingPrice)}
              </span>
            )}
        </div>
        <div class="flex items-end justify-between text-sm">
          <p class="text-gray-500">
            <QuantitySelector
              disabled={loading.value || isGift}
              quantity={quantity}
              onChange={(quantity) =>
                updateItems({ orderItems: [{ index, quantity }] })}
            />
          </p>

          {!isGift && (
            <div class="flex">
              <Button
                onClick={() =>
                  updateItems({ orderItems: [{ index, quantity: 0 }] })}
                disabled={loading.value}
                variant="tertiary"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
