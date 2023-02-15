import Searchbar, {
  Props as SearchbarProps,
} from "$components/search/Searchbar.tsx";
import Icon from "$components/ui/Icon.tsx";
import Alert from "$components/Alert.tsx";
import type { JSX } from "preact";

import CartButton from "../islands/CartButton.tsx";
import CartModal from "../islands/CartModal.tsx";

function NavItem({
  href,
  children,
}: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href ?? `/s?ft=${children}`}
      class="flex items-center text-[15px] px-8 lg:px-6"
    >
      <span class="hover:border-black border-solid border-b border-white">
        {children}
      </span>
    </a>
  );
}

function Navbar({ searchbar }: { searchbar?: SearchbarProps }) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden">
        <div class="flex justify-between items-center p-2 pb-0">
          <button
            aria-label="open menu"
            class="flex items-center justify-center h-12 w-12"
          >
            <Icon id="Bars3" className="w-8 h-8" />
          </button>

          <a href="/" class="block max-w-[10rem]">
            <Icon id="Logo" width="566" height="64" class="w-full" />
          </a>
          <div class="flex justify-end">
            <CartButton />
          </div>
        </div>
        <div class="px-2 pb-2">
          <Searchbar {...searchbar} />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
          <Icon id="Logo" width="566" height="64" class="w-full" />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          <NavItem href="/vtex-fashion">Marcas</NavItem>
          <NavItem href="/feminino">Feminino</NavItem>
          <NavItem href="/masculino">Masculino</NavItem>
          <NavItem href="/137?map=productClusterIds">Inverno</NavItem>
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <Searchbar {...searchbar} />
          <a href="#" class="h-12 w-12 flex justify-center items-center">
            <Icon id="User" className="w-6 h-6" />
          </a>
          <CartButton />
        </div>
      </div>
    </>
  );
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
}

function Header({ alerts, searchbar }: Props) {
  return (
    <header>
      <Alert alerts={alerts} />
      <Navbar searchbar={searchbar} />
      <CartModal />
    </header>
  );
}

export default Header;
