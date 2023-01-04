import { useMemo } from "preact/hooks";
export const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const sortOptions = [
  { value: "price:desc", label: "Maior Preço" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "orders:desc", label: "Mais Pedidos" },
  { value: "name:asc", label: "Nome (A -> Z)" },
  { value: "name:desc", label: "Nome (Z -> A)" },
  { value: "release:desc", label: "Lançamentos Recentes" },
  { value: "discount:desc", label: "Maior Desconto" },
  { value: "", label: "Relevância" },
];

export default function SortSelector() {
  const selectedSort = useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);
  return (
    <div>
      <label for="location" class="block text-sm font-medium text-gray-700">
        Ordenar Por
      </label>
      <select
        id="sort"
        name="sort"
        onInput={(e) => {
          // TODO: Replace with "search utils"
          const urlSearchParams = new URLSearchParams(window.location.search);
          urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
          window.location.search = urlSearchParams.toString();
        }}
        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value} selected={value === selectedSort}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
