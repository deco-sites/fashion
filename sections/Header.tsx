import type { h } from "preact";
import Alert from "$components/Alert.tsx";
import StoreLogo from "$components/icons/StoreLogo.tsx";
import Icon from "$components/ui/Icon.tsx";

import Minicart from "../islands/Minicart.tsx";

function NavItem({
  href,
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class={`flex items-center text-[15px] px-8 lg:px-6`}
    >
      <span class="hover:border-black border-solid border-b border-white">
        {children}
      </span>
    </a>
  );
}

function Navbar() {
  return (
    <div>
      <section class="md:hidden flex p-2 justify-between items-center px-12">
        <div class="w-24">
          <button aria-label="open menu" class="p-2">
            <Icon name="Bars3" className="w-8 h-8" />
          </button>
        </div>
        <a href="/" class="block min-w-[10rem] max-w-[12rem] p-3">
          <StoreLogo />
        </a>
        <div class="flex mt-2 w-24 justify-end">
          <a href="#" class="p-1" aria-label="search">
            <Icon name="MagnifyingGlass" className="w-8 h-8" />
          </a>
          <a href="#" class="p-1 hidden" aria-label="my account">
            <Icon name="User" className="w-8 h-8" />
          </a>
          <div class="p-1">
            <Minicart />
          </div>
        </div>
      </section>
      <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db]">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3 ml-4">
          <StoreLogo />
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
        <div class="flex-1 flex items-center justify-end md:mr-8">
          <a href="#" class="mr-6">
            <Icon name="MagnifyingGlass" className="w-8 h-8" />
          </a>
          <a href="#" class="mr-6">
            <Icon name="User" className="w-8 h-8" />
          </a>
          <Minicart />
        </div>
      </section>
    </div>
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
    </header>
  );
}

export default Header;
