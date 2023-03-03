import Text from "$store/components/ui/Text.tsx";

export interface INavItem {
  label: string;
  href: string;
  children: Array<{
    label: string;
    href: string;
  }>;
}

function NavItem({
  href,
  label,
}: INavItem) {
  return (
    <a href={href}>
      <Text
        class="hover:border-black border-solid border-b border-white"
        variant="menu"
      >
        {label}
      </Text>
    </a>
  );
}

export default NavItem;
