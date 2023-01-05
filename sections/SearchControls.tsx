import { ProductListingPage } from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";

import SearchControlsIsland from "../islands/SearchControls.tsx";

export interface Props {
  page: LoaderReturnType<ProductListingPage>;
}

export default function SearchControls({ page }: Props) {
  const filters = page?.filters;

  if (!filters || filters.length === 0) {
    return null;
  }

  return <SearchControlsIsland filters={filters} />;
}
