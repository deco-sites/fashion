import { useMemo } from "preact/hooks";
import { JSONSchema7 } from "json-schema";

// TODO: The search query should also be from a commerce schema
const sortOptions = [
  { value: "price:desc", label: "Maior Preço" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "orders:desc", label: "Mais Pedidos" },
  { value: "name:desc", label: "Nome (A -> Z)" },
  { value: "name:asc", label: "Nome (Z -> A)" },
  { value: "release:desc", label: "Lançamentos Recentes" },
  { value: "discount:desc", label: "Maior Desconto" },
  { value: "", label: "Relevância" },
];

export const schema: JSONSchema7 = {
  title: "SearchControls",
  type: "object",
  properties: {},
};

interface Props {}

const SORT_QUERY_PARAM = "sort";

export default function SearchControls({}: Props) {
  const selectedSort = useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);
  return (
    <div class="flex flex-row justify-between items-center pt-4">
      <div class="flex-1"></div>
      <div>
        <h2>Search Results</h2>
      </div>

      <div class="p-4 flex-1 flex flex-row justify-end">
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">
            Ordenar Por
          </label>
          <select
            id="sort"
            name="sort"
            onInput={(e) => {
              // TODO: Replace with "search utils"
              const urlSearchParams = new URLSearchParams(
                window.location.search
              );
              urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
              window.location.search = urlSearchParams.toString();
            }}
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {sortOptions.map(({ value, label }) => (
              <option
                key={value}
                value={value}
                selected={value === selectedSort}
              >
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
