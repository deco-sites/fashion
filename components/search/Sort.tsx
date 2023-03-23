import type { JSX } from "preact";
import { useMemo } from "preact/hooks";
import Text from "$store/components/ui/Text.tsx";
import { SortOption } from "deco-sites/std/commerce/types.ts";

const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const DEFAULT_OPTIONS = [
  { value: "", label: "Relevância" },
  { value: "price:desc", label: "Maior Preço" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "orders:desc", label: "Mais Pedidos" },
  { value: "name:asc", label: "Nome (A -> Z)" },
  { value: "name:desc", label: "Nome (Z -> A)" },
  { value: "release:desc", label: "Lançamentos" },
  { value: "discount:desc", label: "Maior Desconto" },
];

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

interface Props {
  options?: SortOption[];
}

function Sort({ options = DEFAULT_OPTIONS }: Props) {
  const sort = useSort();

  return (
    <select
      id="sort"
      name="sort"
      onInput={applySort}
      class="w-min h-[36px] px-1 rounded m-2 text-button font-button text-default hover:bg-hover cursor-pointer outline-none"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value} selected={value === sort}>
          <Text variant="caption">{label}</Text>
        </option>
      ))}
    </select>
  );
}

export default Sort;
