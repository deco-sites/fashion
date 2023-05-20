import { Hamburguer } from "$store/sections/Header/components/Hamburguer/index.tsx";
import { Logo } from "$store/sections/Header/components/Logo/index.tsx";
import { Nav } from "$store/sections/Header/components/Nav/index.tsx";
import { Search } from "$store/sections/Header/components/Search/index.tsx";
import { Favorites } from "$store/sections/Header/components/Favorites/index.tsx";
import { Locations } from "$store/sections/Header/components/Locations/index.tsx";
import { Profile } from "$store/sections/Header/components/Profile/index.tsx";
import { Cart } from "$store/sections/Header/components/Cart/index.tsx";
import { Languages } from "$store/sections/Header/components/Languages/index.tsx";
import { Button } from "$store/sections/Header/components/Button/index.tsx";
import { ProductSpotlight } from "$store/sections/Header/components/ProductSpotlight/index.tsx";
import { ProductCategories } from "$store/sections/Header/components/ProductCategories/index.tsx";
import { ProductSizes } from "$store/sections/Header/components/ProductSizes/index.tsx";
import { ColorFilter } from "$store/sections/Header/components/ColorFilter/index.tsx";
import { PriceFilter } from "$store/sections/Header/components/PriceFilter/index.tsx";

const Header: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div>
        <div>
          {/* Hamburguer */}
          <Hamburguer />
          {/* Logo */}
          <Logo />
        </div>

        <div>
          {/* Nav Menu */}
          <Nav />
        </div>

        <div>
          {/* Search */}
          <Search />
          {/* Favorites */}
          <Favorites />
          {/* Locations */}
          <Locations />
          {/* Profile */}
          <Profile />
          {/* Cart */}
          <Cart />
          {/* Langueages */}
          <Languages />
          {/* Button */}
          <Button />
        </div>
      </div>

      {/* Filters */}
      <div>
        <div>
          {/* Product Spotlight */}
          <ProductSpotlight />
        </div>
        <div>
          {/* Porduct Categories */}
          <ProductCategories />
        </div>
        <div>
          {/* Product sizes */}
          <ProductSizes />
        </div>
        <div>
          {/* Color filter */}
          <ColorFilter />
        </div>
        <div>
          {/* Price Filter */}
          <PriceFilter />
        </div>
      </div>
    </>
  );
};

export default Header;
