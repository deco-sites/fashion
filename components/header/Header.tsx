import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Modals from "deco-sites/fashion/islands/HeaderModals.tsx";
import { Product } from "deco-sites/std/commerce/types.ts";
import { Suggestion } from "deco-sites/std/commerce/vtex/types.ts";
import type { Image } from "deco-sites/std/components/types.ts";

import Alert from "deco-sites/fashion/components/header/Alert.tsx";
import { headerHeight } from "deco-sites/fashion/components/header/constants.ts";
import Navbar from "deco-sites/fashion/components/header/Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: Product[];

  /**
   * @title Enable Top Search terms
   */
  suggestions?: Suggestion;
}

function Header(
  { alerts, searchbar, products, navItems = [], suggestions }: Props,
) {
  return (
    <header class={`h-[${headerHeight}]`}>
      <div class="bg-default fixed w-full z-50">
        <Alert alerts={alerts} />
        <Navbar items={navItems} />
      </div>

      <Modals
        menu={{ items: navItems }}
        searchbar={{ ...searchbar, products, suggestions }}
      />
    </header>
  );
}

export default Header;
