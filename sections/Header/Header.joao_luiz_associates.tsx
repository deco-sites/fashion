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

export interface Props {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function Header({ questions }: Props) {
  return (
    <div className="inline-flex flex-col navbar">
      {/* Header */}
      <div className="w-screen flex-row justify-around">
        <div className="inline-flex flex-row gap-4">
          {/* Hamburguer */}
          <Hamburguer />
          {/* Logo */}
          <Logo />
        </div>

        {/* Nav Menu */}
        <Nav />

        <div className="inline-flex flex-row">
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
      <div className="inline-flex flex-row">
        {/* Product Spotlight */}
        <ProductSpotlight />
        {/* Porduct Categories */}
        <ProductCategories />
        {/* Product sizes */}
        <ProductSizes />
        {/* Color filter */}
        <ColorFilter />
        {/* Price Filter */}
        <PriceFilter />
      </div>
    </div>
  );
}
