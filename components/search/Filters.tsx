import { useMemo } from "preact/hooks";
import { ProductListingPage } from "$live/std/commerce/types.ts";

import { createFiltersManager } from "../../sdk/searchFilters.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

export default function Filters({ filters: initialFilters }: Props) {
  const { filters, filtersToSearch, toggleFilter } = useMemo(
    () => createFiltersManager(initialFilters),
    [initialFilters],
  );

  return (
    <div class="h-full flex flex-col">
      <div class="flex flex-col overflow-scroll flex-1">
        {filters.value.map((filter, index) => {
          if (filter["@type"] !== "FilterToggle") {
            return null;
          }

          const selectedFacetsQuantity = filter.values.reduce(
            (acc, { selected }) => selected ? acc + 1 : acc,
            0,
          );

          return (
            <div class="flex flex-col mt-2 w-full">
              <span>
                <span class="text-lg font-bold mt-2">{filter.label}</span>
                <span class="text-gray-500 ml-1">
                  {selectedFacetsQuantity || null}
                </span>
              </span>
              <div
                class="max-h-40 overflow-scroll"
                style={filter.values.length > 7
                  ? { boxShadow: "inset 0 -10px 10px -10px #b2b2b2" }
                  : undefined}
              >
                {filter.values.map((value) => (
                  <div class="flex flex-row">
                    <input
                      id={`${filter.key}:${value.value}`}
                      class="mr-2"
                      type="checkbox"
                      checked={value.selected}
                      onInput={() => toggleFilter(value.label, index)}
                    />
                    <label
                      for={`${filter.key}:${value.value}`}
                      class="cursor-pointer"
                    >
                      <span>{value.label}</span>
                      <span class="font-italic ml-2">
                        ({value.quantity})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center px-2 py-3">
        <button
          class="inline-flex w-3/4 justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-primary text-white hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green-light"
          onClick={() => window.location.search = filtersToSearch()}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}
