import { Product } from "../components/ProductCard.tsx";

interface Props {
  current: string;
  options: Product["skuOptions"];
}

export default function SKUSelector({ options, current }: Props) {
  return (
    <div class="border border-gray-300 flex flex-row justify-between px-3 py-2 md:w-1/4">
      <label class="font-bold" for="tamanho">Tamanho</label>
      <select
        id="tamanho"
        onInput={(e) => {
          location.href = e.currentTarget.value;
        }}
      >
        {options.map(({ skuUrl, variationValue }) => (
          <option
            key={skuUrl}
            value={skuUrl}
            selected={current === variationValue}
          >
            {variationValue}
          </option>
        ))}
      </select>
    </div>
  );
}
