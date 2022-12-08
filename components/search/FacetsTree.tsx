import { useEffect, useMemo, useState } from "preact/hooks";
import { FacetsResponse } from "$live/std/commerce/vtex/types.ts";
import { SORT_QUERY_PARAM } from "./SortSelector.tsx";

interface Props {
  facetsResponse: FacetsResponse;
}

// * Example JSON: https://gist.github.com/lucis/7f625386e21fe6553be75b930f2c023f
type FacetValue = FacetsResponse["facets"][0]["values"][0];

// For "farm/top?map=ft,categoria", returns 'categoria
// TODO: Make sure this is really it
const getTranslatedKeyForFacetValue = (value: FacetValue) => {
  const keys = value?.href?.split("map=").pop();

  if (!keys) {
    return "";
  }

  const lastKey = keys?.split(",").pop();
  return lastKey;
};

export default function FacetsTree({ facetsResponse }: Props) {
  const { facets, queryArgs } = facetsResponse;

  // TODO: Check performace
  // If problematic, store selected values in an object
  const [localSelectedFacets, setLocalSelectedFacets] = useState(
    queryArgs.selectedFacets,
  );

  const numberOfSelectedFacetsForKey = (facet: FacetsResponse["facets"][0]) => {
    // TODO: Better way to do this
    return localSelectedFacets?.filter(
      ({ key }) => key === facet.name.toLowerCase() || key == facet.key,
    ).length;
  };

  const isFacetSelected = (facetValue: FacetValue) => {
    const translatedKey = getTranslatedKeyForFacetValue(facetValue);
    const isFacetSelected = localSelectedFacets.some(
      ({ key, value }) => key === translatedKey && value === facetValue.value,
    );
    return isFacetSelected;
  };

  const urlForLocalSelectedFacets = useMemo(() => {
    const params = new URLSearchParams();
    const SEPARATOR = "/";
    const uniqueParis = [
      ...new Set(
        localSelectedFacets.map(
          ({ key, value }) => `${key}${SEPARATOR}${value}`,
        ),
      ),
    ];
    uniqueParis
      .map((pair) => pair.split(SEPARATOR))
      .forEach(([key, value]) => {
        params.append(key, value);
      });

    // For some reason, the facets's selected doesn't return the selected sort value
    // TODO: Our search schema should do that
    const currentParams = new URLSearchParams(window?.location?.search);
    const sortValue = currentParams.get(SORT_QUERY_PARAM);
    if (sortValue) {
      params.append(SORT_QUERY_PARAM, sortValue);
    }

    const url = `${window.location.pathname}?${params.toString()}`;
    return url;
  }, [localSelectedFacets]);

  const isNextSearchDifferent = urlForLocalSelectedFacets !==
    `${window.location?.pathname}${window.location?.search}`;

  useEffect(
    function prefetchNextSearch() {
      // TODO: Get the facetsResponse regarding the returned products and add that to the UI
      fetch(urlForLocalSelectedFacets);
    },
    [urlForLocalSelectedFacets],
  );

  const onToggleFacet = (facetValue: FacetValue) => {
    const translatedKey = getTranslatedKeyForFacetValue(facetValue);
    if (!translatedKey || !facetValue?.value) {
      return;
    }

    if (isFacetSelected(facetValue)) {
      setLocalSelectedFacets(
        localSelectedFacets.filter(
          ({ key, value }) =>
            key !== translatedKey || value !== facetValue.value,
        ),
      );
    } else {
      setLocalSelectedFacets([
        ...localSelectedFacets,
        { key: translatedKey, value: facetValue.value },
      ]);
    }
  };

  return (
    <div class="h-full flex flex-col">
      <div class="flex flex-col overflow-scroll flex-1">
        {facets
          .filter(({ hidden }) => !hidden)
          .map((facet) => (
            <div class="flex flex-col mt-2 w-full" key={name}>
              <span>
                <span class="text-lg font-bold mt-2">{facet.name}</span>
                <span class="text-gray-500 ml-1">
                  {`${
                    numberOfSelectedFacetsForKey(facet) > 0
                      ? `${numberOfSelectedFacetsForKey(facet)} selecionado(s)`
                      : ""
                  }`}
                </span>
              </span>
              <div
                style={facet.values.length > 7
                  ? {
                    boxShadow: "inset 0 -10px 10px -10px #b2b2b2",
                  }
                  : {}}
                class="max-h-40 overflow-scroll"
              >
                {facet.values.map((facetValue) => (
                  <div
                    key={`${facet.name}-${facetValue.name}`}
                    class="flex flex-row"
                  >
                    <input
                      id={`${facetValue.key}/${facetValue.value}`}
                      type="checkbox"
                      checked={isFacetSelected(facetValue)}
                      onInput={() => onToggleFacet(facetValue)}
                      class="mr-2"
                    />

                    <label
                      class="cursor-pointer"
                      for={`${facetValue.key}/${facetValue.value}`}
                    >
                      <span>{facetValue.name}</span>
                      <span class="font-italic ml-2">
                        {`(${facetValue.quantity})`}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-row justify-center px-2 py-3">
        <a
          href={isNextSearchDifferent ? urlForLocalSelectedFacets : undefined}
          class={`inline-flex w-3/4 justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
            isNextSearchDifferent
              ? "bg-primary text-white hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green-light"
              : "bg-gray-400 text-gray-700 pointer-events-none cursor-default"
          } `}
        >
          Aplicar
        </a>
      </div>
    </div>
  );
}
