import { default as MenuButtonComponent } from "$store/components/header/Buttons/Menu.tsx";
import { default as SearchButtonComponent } from "$store/components/header/Buttons/Search.tsx";

export function MenuButton() {
  return <MenuButtonComponent />;
}

export function SearchButton() {
  return <SearchButtonComponent />;
}
