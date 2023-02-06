import type { h } from "preact";
import Alert from "$components/Alert.tsx";
// import StoreLogo from "$components/icons/StoreLogo.tsx";
import Icon from "$components/ui/Icon.tsx";

import CartButton from "../islands/CartButton.tsx";
import CartModal from "../islands/CartModal.tsx";

function NavItem({
  href,
  children,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class="flex items-center text-[15px] px-8 lg:px-6"
    >
      <span class="hover:border-black border-solid border-b border-white">
        {children}
      </span>
    </a>
  );
}

function Navbar() {
  return (
    <>
      {/* Mobile Version */}
      <section class="md:hidden flex justify-between items-center p-2">
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
          <a
            href="#"
            class="flex items-center justify-center h-12 w-12"
            aria-label="search"
          >
            <Icon id="MagnifyingGlass" className="w-6 h-6" />
          </a>

          <CartButton />
        </div>
      </section>

      {/* Desktop Version */}
      <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
          <Icon id="Logo" width="566" height="64" class="w-full" />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          <NavItem href="/farm">Marcas</NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=feminino">
            Feminino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=masculino">
            Masculino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=infantil">
            Infantil
          </NavItem>
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <a href="#" class="h-12 w-12 flex justify-center items-center">
            <Icon id="MagnifyingGlass" className="w-6 h-6" />
          </a>
          <a href="#" class="h-12 w-12 flex justify-center items-center">
            <Icon id="User" className="w-6 h-6" />
          </a>
          <CartButton />
        </div>
      </section>
    </>
  );
}

export interface Props {
  alerts: string[];
}

function Header({ alerts }: Props) {
  return (
    <header>
      <Alert alerts={alerts} />
      <Navbar />
      <CartModal />
    </header>
  );
}

export default Header;
