import { lazy, Suspense } from "preact/compat";

import { useUI } from "deco-sites/fashion/sdk/useUI.ts";
import Loading from "deco-sites/fashion/components/ui/Loading.tsx";
import { headerHeight } from "deco-sites/fashion/components/header/constants.ts";
import type { Props as SearchbarProps } from "deco-sites/fashion/components/search/Searchbar.tsx";

const Searchbar = lazy(() =>
  import("deco-sites/fashion/components/search/Searchbar.tsx")
);

interface Props {
  searchbar: SearchbarProps;
}

export default function HeaderSearchMenu({ searchbar }: Props) {
  const { displaySearchbar } = useUI();
  const open = displaySearchbar.value &&
    window?.matchMedia?.("(min-width: 768px)")?.matches;

  return (
    <div
      class={`${
        open ? "block border-y border-base-200 shadow" : "hidden"
      } absolute left-0 top-0 w-screen z-50 bg-base-100`}
      style={{ marginTop: headerHeight }}
    >
      {open && (
        <Suspense fallback={<Loading />}>
          <Searchbar {...searchbar} variant="desktop" />
        </Suspense>
      )}
    </div>
  );
}
