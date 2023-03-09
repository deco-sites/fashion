import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

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
  products?: LoaderReturnType<Product[]>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion>;
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
