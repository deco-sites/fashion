import type { Props as MenuProps } from "$store/components/header/Menu.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Button from "$store/components/ui/Button.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import type { ComponentChildren } from "preact";
import { lazy, Suspense } from "preact/compat";

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));
const Cart = lazy(() => import("$store/components/minicart/Cart.tsx"));
const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

interface Props {
  menu: MenuProps;
  searchbar?: SearchbarProps;
  children?: ComponentChildren;
}

const Aside = (
  { title, onClose, children }: {
    title: string;
    onClose?: () => void;
    children: ComponentChildren;
  },
) => (
  <div class="bg-base-100 flex flex-col h-full divide-y overflow-y-hidden">
    <div class="flex justify-between items-center">
      <h1 class="px-4 py-3">
        <span class="font-medium text-2xl">{title}</span>
      </h1>
      {onClose && (
        <Button class="btn btn-ghost" onClick={onClose}>
          <Icon id="XMark" size={24} strokeWidth={2} />
        </Button>
      )}
    </div>
    <div class="flex-grow overflow-y-auto">
      <Suspense
        fallback={
          <div class="flex justify-center items-center w-full h-full">
            <span class="loading loading-ring" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  </div>
);

function Drawers({ menu, searchbar, children }: Props) {
  const { displayCart, displayMenu, displaySearchbar } = useUI();

  return (
    <Drawer // left drawer
      open={displayMenu.value || displaySearchbar.value}
      onClose={() => {
        displayMenu.value = false;
        displaySearchbar.value = false;
      }}
      aside={
        <Aside
          onClose={() => {
            displayMenu.value = false;
            displaySearchbar.value = false;
          }}
          title={displayMenu.value ? "Menu" : "Buscar"}
        >
          {displayMenu.value && <Menu {...menu} />}
          {displaySearchbar.value && <Searchbar {...searchbar} />}
        </Aside>
      }
    >
      <Drawer // right drawer
        class="drawer-end"
        open={displayCart.value}
        onClose={() => displayCart.value = false}
        aside={
          <Aside
            title="Minha sacola"
            onClose={() => displayCart.value = false}
          >
            <Cart />
          </Aside>
        }
      >
        {children}
      </Drawer>
    </Drawer>
  );
}

export default Drawers;
