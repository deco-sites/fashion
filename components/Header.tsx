import Alert, {
  Props as AlertProps,
  schema as alertSchema,
} from "./ui/Alert.tsx";
import type { h } from "preact";
import type { JSONSchema7 } from "https://esm.sh/v92/@types/json-schema@7.0.11/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmQvcHJlYWN0QDEwLjEwLjY/index.d.ts";
import ZeedogLogoTitle from "./icons/ZeedogLogoTitle.tsx";
import ZeedodKitchenLogo from "./icons/ZeedogKitchenLogo.tsx";
import ZeedogHumanLogo from "./icons/ZeedogHumanLogo.tsx";
import TimeLapseIcon from "./icons/TimeLapseIcon.tsx";
import PercentageCircle from "./icons/PercentageCircle.tsx";
import ZeedogLogo from "./icons/ZeedogLogo.tsx";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon.tsx";
import PersonIcon from "./icons/PersonIcon.tsx";
import HeartIcon from "./icons/HeartIcon.tsx";
import Minicart from "../islands/Minicart.tsx";

function StoreAnchor({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      class={`h-full w-1/3 md:w-[8.75rem] flex items-center justify-center border-r border-[#d3d5db] ${
        className ?? ""
      }`}
    >
      {children}
    </a>
  );
}

function Button({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button class="flex gap-2 items-center h-10 px-[0.625rem] font-bold transition duration-150 ease-in hover:bg-[#e2e2e2]">
      {children}
    </button>
  );
}

function StoreNavbar() {
  return (
    <section class="bg-custom-gray w-full flex justify-between h-10 md:border-b border-[#d3d5db] text-sm text-[#353535]">
      <div class="w-full md:w-auto flex items-center">
        <StoreAnchor class="bg-white">
          <ZeedogLogoTitle />
        </StoreAnchor>
        <StoreAnchor>
          <ZeedodKitchenLogo />
        </StoreAnchor>
        <StoreAnchor class="border-r-0">
          <ZeedogHumanLogo />
        </StoreAnchor>
      </div>
      <div class="hidden md:flex items-center mr-8">
        <Button>
          <TimeLapseIcon /> <span>assinaturas</span>
        </Button>
        <Button>
          <PercentageCircle /> <span>10% off na primeira compra</span>
        </Button>
        <Button>Ganhe 25R$</Button>
      </div>
    </section>
  );
}

function NavItem({
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={`/search?q=${children}`}
      class={`flex items-center text-sm px-5 ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  return (
    <section class="bg-white flex h-[70px] md:border-b border-[#d3d5db]">
      <div class="pl-6 pr-4 flex items-center">
        <a href="/">
          <ZeedogLogo />
        </a>
      </div>
      <nav class="w-full flex justify-end md:justify-between">
        <ul class="hidden md:flex list-none">
          <NavItem>Novidades</NavItem>
          <NavItem>Cachorros</NavItem>
          <NavItem>Gatos</NavItem>
          <NavItem>Human</NavItem>
          <NavItem>Coleções</NavItem>
          <NavItem>Zee.Now</NavItem>
          <NavItem>Sobre</NavItem>
          <NavItem>Black Friday</NavItem>
        </ul>
        <div class="flex justify-end md-5 md:mr-8">
          <ul class="hidden md:flex list-none">
            <NavItem class="mr-[2.125rem]">
              <span class="flex items-center">
                <MagnifyingGlassIcon class="mr-3" />
                buscar
              </span>
            </NavItem>
          </ul>
          <ul class="list-none flex">
            <NavItem>
              <HeartIcon />
            </NavItem>
            <NavItem>
              <PersonIcon />
            </NavItem>
            <Minicart />
          </ul>
        </div>
      </nav>
    </section>
  );
}

export const schema: JSONSchema7 = {
  title: "Header",
  type: "object",
  properties: {
    alert: alertSchema,
  },
};

interface Props {
  alert: AlertProps;
}

export default function Header({
  alert = { message: "Frete gratis a partir de 1000 reais" },
}: Props) {
  return (
    <header>
      <Alert {...alert} class="hidden md:flex" />
      <StoreNavbar />
      <Navbar />
      <Alert {...alert} class="flex md:hidden h-7" />
    </header>
  );
}
