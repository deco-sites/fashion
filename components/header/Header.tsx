import Modals from "$store/islands/HeaderModals.tsx";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import type { NavItem as Item } from "./NavItem.ts";

const item: Item[] = [
  {
    label: "Sale",
    href: "/brindes",
    children: [],
  },
  {
    label: "Feminino",
    href: "/feminino",
    children: [
      { label: "Roupas", href: "/feminino/roupas" },
    ],
  },
  {
    label: "Masculino",
    href: "/masculino",
    children: [
      { label: "Polos", href: "/masculino/polos" },
      { label: "Shorts", href: "/masculino/shorts" },
    ],
  },
];

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: Item[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[]>;
}

function Header({ alerts, searchbar, products, navItems = item }: Props) {
  return (
    <header class="h-[93px]">
      <div class="bg-default fixed w-full z-50">
        <Alert alerts={alerts} />
        <Navbar items={navItems} />
      </div>

      <Modals
        menu={{ items: navItems }}
        searchbar={{ ...searchbar, products }}
      />
    </header>
  );
}

export default Header;
