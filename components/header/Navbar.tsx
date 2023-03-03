import HeaderButton from "$store/islands/HeaderButton.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

import NavItem from "./NavItem.tsx";
import type { INavItem as Item } from "./NavItem.tsx";

function Navbar({ items }: {
  items: Item[];
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden flex flex-row justify-between items-center h-[53px] border-b-1 border-default w-full px-4 gap-4">
        <HeaderButton variant="menu" />

        <a href="/" class="flex-grow" aria-label="Store logo">
          <Button variant="icon">
            <Icon id="Logo" width={87.5} height={28} />
          </Button>
        </a>

        <div class="flex gap-6">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center h-[53px] border-b-1 border-default w-full px-4">
        <a href="/" aria-label="Store logo">
          <Icon id="Logo" width={87.5} height={28} />
        </a>
        <div class="flex-grow flex gap-6 justify-center">
          {items.map((item) => <NavItem {...item} />)}
        </div>
        <div class="flex items-center justify-end gap-6">
          <HeaderButton variant="search" />
          <a href="/login" aria-label="Log in">
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </a>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
