import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Alert from "./Alert.tsx";
import CampaignTimer, { CampaignTimerProps } from "./CampaignTimer.tsx";
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
  campaignTimerProps: CampaignTimerProps;
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
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;
}

function Header(
  {
    alerts,
    campaignTimerProps,
    searchbar: _searchbar,
    products,
    navItems = [],
    suggestions,
  }: Props,
) {
  const testData: CampaignTimerProps = {
    campaign_data: {
      text:
        "Ganhe 15% de desconto em sua primeira compra em vestidos femininos",
      link: "/feminino/vestidos",
      endTime: "23/05/2023 00:00:00",
      coupon: "BEMVINDA15",
      bg_color: "#E37A69",
      btnText: "Copiar Cupom",
      text_side: "left",
      text_color: "#ffffff",
    },
  };

  const searchbar = { ..._searchbar, products, suggestions };

  return (
    <>
      <header style={{ height: headerHeight }}>
        <div class="bg-base-100 fixed w-full z-50">
          <Alert alerts={alerts} />
          {campaignTimerProps && (
            <CampaignTimer
              campaign_data={testData.campaign_data}
            />
          )}

          <Navbar items={navItems} searchbar={searchbar} />
        </div>
        <Modals
          menu={{ items: navItems }}
          searchbar={searchbar}
        />
      </header>
    </>
  );
}

export default Header;
