import { useState } from "preact/hooks";
import { tw } from "twind";
import { useDebouncedCallback } from "../utils.ts";
import { useCart } from "../data/cartHooks.ts";

interface Props {
  itemId: string;
  initialQuantity: number;
}

const QUANTITY_MAX_VALUE = 100;

export default function QuantitySelector({ initialQuantity, itemId }: Props) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { updateItem } = useCart();

  const inputClass =
    tw`text-center p-2 block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

  const onDecrement = () => onChangeQuantity(Math.max(0, quantity - 1));

  const onIncrement = () =>
    onChangeQuantity(Math.min(quantity + 1, QUANTITY_MAX_VALUE));

  const onChangeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  const ONE_SECOND = 1000;

  const updateQuantity = useDebouncedCallback(
    (newQuantity: number) => {
      updateItem(itemId, newQuantity);
    },
    ONE_SECOND,
    [itemId],
  );

  return (
    <div class="flex flex-row">
      <button class={inputClass} onClick={onDecrement}>
        -
      </button>
      <input
        class={`${inputClass} w-12 mx-1`}
        type="number"
        inputMode="numeric"
        pattern="[0-9]*"
        max={QUANTITY_MAX_VALUE}
        onInput={(e) => setQuantity(e.currentTarget.valueAsNumber)}
        value={quantity}
      />
      <button class={inputClass} onClick={onIncrement}>
        +
      </button>
    </div>
  );
}
