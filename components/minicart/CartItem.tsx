// TODO: Default schema
import { OrderFormItem } from "../../clients/vtex/checkout.ts";
import QuantitySelector from "../QuantitySelector.tsx";

interface Props {
  item: OrderFormItem;
  onRemove(): void;
}

export const formatPrice = (cents: number) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);

export default function CartItem({
  item: { imageUrl, skuName, detailUrl, name, price, quantity, uniqueId },
  onRemove,
}: Props) {
  return (
    <li class="flex py-6">
      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageUrl}
          alt={skuName}
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <a href={detailUrl}>
              <h3>{name}</h3>
            </a>
            <p class="ml-4">{formatPrice(price)}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">
            {skuName === name ? "" : skuName}
          </p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
          <p class="text-gray-500">
            Quantidade:
            <QuantitySelector initialQuantity={quantity} itemId={uniqueId} />
          </p>

          <div class="flex">
            <button
              type="button"
              class="font-medium"
              onClick={() => onRemove()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
