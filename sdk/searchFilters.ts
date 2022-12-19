import { signal } from "@preact/signals";
import { Filter } from "$live/std/commerce/types.ts";

export const filtersToSearchParams = (filters: Filter[]): URLSearchParams =>
  filters.reduce((searchParams, filter) => {
    if (filter["@type"] !== "FilterToggle") {
      return searchParams;
    }

    for (const value of filter.values) {
      if (value.selected) {
        searchParams.append(`filter.${filter.key}`, value.value);
      }
    }

    return searchParams;
  }, new URLSearchParams());

export const filtersFromSearchParams = (
  searchParams: URLSearchParams,
) => {
  const filters: { key: string; value: string }[] = [];

  searchParams.forEach((value, key) => {
    if (key.startsWith("filter.")) {
      filters.push({ value, key: key.replace("filter.", "") });
    }
  });

  return filters;
};

export const createFiltersManager = (initialFilters: Filter[]) => {
  const filters = signal(initialFilters);

  const toggleFilter = (label: string, index: number) => {
    const filter = filters.value[index];

    if (filter["@type"] !== "FilterToggle") {
      return;
    }

    const value = filter.values.find((val) => val.label === label);

    if (!value) {
      return;
    }

    value.selected = !value.selected;

    filters.value = [...filters.value];
  };

  const filtersToSearch = () => {
    const currentParams = new URLSearchParams(location.search);
    const filtersParams = filtersToSearchParams(filters.value);

    currentParams.forEach((value, key) =>
      key.startsWith("filter.") || filtersParams.append(key, value)
    );

    return filtersParams.toString();
  };

  return {
    filters,
    toggleFilter,
    filtersToSearch,
  };
};
