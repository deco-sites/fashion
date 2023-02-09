import { useMemo } from "preact/hooks";
import { ProductListingPage } from "$live/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

export default function Filters({ filters }: Props) {
  return (
    <div class="h-full flex flex-col">
      <div class="flex flex-col overflow-scroll flex-1">
        {filters.map((filter) => {
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
                      onInput={() => window.location.href = value.url}
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
    </div>
  );
}
