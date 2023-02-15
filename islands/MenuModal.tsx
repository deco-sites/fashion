import MenuModal from "../components/menu/MenuModal.tsx";
import type { NavItem } from "../components/menu/NavItem.ts";

export default ({ items }: { items: NavItem[] }) => <MenuModal items={items} />;
