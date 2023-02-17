import Searchbar, {
  Props as SearchbarProps,
} from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import CartButton from "$store/islands/CartButton.tsx";
import Menu from "$store/islands/Menu.tsx";
import type { ComponentChildren } from "preact";

import type { NavItem as Item } from "./NavItem.ts";

function NavItem({
  href,
  label,
}: { href: string; label: ComponentChildren }) {
  return (
    <a
      href={href ?? `/s?ft=${label}`}
      class="flex items-center text-[15px] px-8 lg:px-6"
    >
      <span class="hover:border-black border-solid border-b border-white">
        {label}
      </span>
    </a>
  );
}

function Navbar({ searchbar, items }: {
  searchbar?: SearchbarProps;
  items: Item[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden">
        <div class="flex justify-between items-center p-2 pb-0">
          <Menu items={items} />

          <a href="/" class="block max-w-[10rem]" aria-label="Store logo">
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
        <a
          href="/"
          class="block min-w-[12rem] max-w-[14rem] p-3"
          aria-label="Store logo"
        >
          <Icon id="Logo" width="566" height="64" class="w-full" />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <Searchbar {...searchbar} />
          <a
            href="#"
            class="h-12 w-12 flex justify-center items-center"
            aria-label="Log in"
          >
            <Icon id="User" className="w-6 h-6" />
          </a>
          <CartButton />
        </div>
      </div>
    </>
  );
}

export default Navbar;
