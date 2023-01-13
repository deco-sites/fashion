import type { h } from "preact";
import Alert from "$components/Alert.tsx";
import Icon from "$components/ui/Icon.tsx";
import Minicart, { CART_MODAL_NAME } from "../islands/Minicart.tsx";
import Modal from "../components/ui/Modal.tsx";
import CartInner from "../islands/CartInner.tsx";

function NavItem({
  href,
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class={`flex items-center text-[16px] font-bold uppercase px-8 lg:px-12 hover:border-black border-solid border-b border-white `}
    >
      {children}
    </a>
  );
}

function Navbar() {
  return (
    <div>
      <section class="md:hidden flex p-2 justify-between items-center px-12">
        <button aria-label="open menu" class="p-2">
          <Icon name="Bars3" className="w-8 h-8" />
        </button>
        <a href="#" class="p-2" aria-label="search">
          <Icon name="MagnifyingGlass" className="w-8 h-8" />
        </a>
        <a href="/" aria-label="home link" class="flex-grow">
        </a>
        <a href="#" class="p-2" aria-label="my account">
          <Icon name="User" className="w-8 h-8" />
        </a>
        <Minicart />
      </section>
      <section class="hidden md:flex bg-white flex-row h-[80px] justify-between md:border-b border-[#d3d5db]">
        <div class="flex items-center justify-center flex-1 min-w-[200px]">
          <a href="/" aria-label="home link">
          </a>
        </div>
        <div class="flex justify-center md:justify-between pl-12">
          <NavItem href="/farm">Marcas</NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=feminino">
            Feminino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=masculino">
            Masculino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=infantil">
            Infantil
          </NavItem>
        </div>
        <div class="flex-1 flex items-center justify-end md:mr-8">
          <a href="#" class="mr-6">
            <Icon name="MagnifyingGlass" className="w-8 h-8" />
          </a>
          <a href="#">
            <Icon name="Heart" className="w-8 h-8" />
          </a>
          <Minicart />
          <Modal title="Seu Carrinho" data-modal={CART_MODAL_NAME}>
            <CartInner />
          </Modal>
        </div>
      </section>
    </div>
  );
}

export interface Props {
  alerts: string[];
}

export default function Header({ alerts }: Props) {
  return (
    <header>
      <Alert alerts={alerts} />
      <Navbar />
    </header>
  );
}
