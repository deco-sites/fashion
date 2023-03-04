import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";

function Navbar({ items }: {
  items: INavItem[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-4 gap-4`}
      >
        <HeaderButton variant="menu" />

        <a href="/" class="flex-grow" aria-label="Store logo">
          <Icon id="Logo" width={87.5} height={28} />
        </a>

        <div class="flex gap-2">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div
        class={`hidden md:flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-4`}
      >
        <a href="/" aria-label="Store logo">
          <Icon id="Logo" width={87.5} height={28} />
        </a>
        <ul class="flex-grow flex gap-6 justify-center h-full">
          {items.map((item) => <NavItem item={item} />)}
        </ul>
        <div class="flex items-center justify-end gap-6">
          <HeaderButton variant="search" />
          <a href="/login" aria-label="Log in">
            <Icon id="User" width={20} height={20} strokeWidth={2} />
          </a>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
