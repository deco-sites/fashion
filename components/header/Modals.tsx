import Modal from "$store/components/ui/Modal.tsx";
import { lazy, Suspense } from "preact/compat";
import { useUI } from "$store/sdk/useUI.ts";

import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Loading from "$store/components/ui/Loading.tsx";

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));
const Cart = lazy(() => import("$store/components/minicart/Cart.tsx"));
const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

interface Props {
  menu: MenuProps;
  searchbar?: SearchbarProps;
}

function Modals({ menu, searchbar }: Props) {
  const { displayCart, displayMenu, displaySearchbar } = useUI();

  return (
    <>
      <Modal
        title="Menu"
        mode="sidebar-left"
        loading="lazy"
        open={displayMenu.value}
        onClose={() => {
          displayMenu.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Menu {...menu} />
        </Suspense>
      </Modal>

      <Modal
        title="Buscar"
        mode="sidebar-right"
        loading="lazy"
        open={displaySearchbar.value &&
          window?.matchMedia("(max-width: 767px)")?.matches}
        onClose={() => {
          displaySearchbar.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Searchbar {...searchbar} />
        </Suspense>
      </Modal>

      <Modal
        title="Minha sacola"
        mode="sidebar-right"
        loading="lazy"
        open={displayCart.value}
        onClose={() => {
          displayCart.value = false;
        }}
      >
        <Suspense fallback={<Loading />}>
          <Cart />
        </Suspense>
      </Modal>
    </>
  );
}

export default Modals;
