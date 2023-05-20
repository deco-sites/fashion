import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  /**
   * @title Tooltip label
   * @description Text displayed on tooltip
   * @default Label
   */
  label: string;
  /**
   * @title Icon
   * @description Icon displayed inside the button
   * @default Bars3
   */
  icon: AvailableIcons;
  /**
   * @title Href
   * @description URL or ID to redirect to
   */
  href?: string;
  /**
   * @title Target
   * @description Where to open the linked document.
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
}

function ShortcutButton({ label, icon, href, target }: Props) {
  return (
    <a
      href={href}
      target={target}
      className="tooltip group:tooltip-open tooltip-left relative block border-b border-base-300 group-last:border-b-0 p-2 cursor-pointer"
      data-tip={label}
    >
      <Icon
        className="block"
        id={icon}
        width={24}
        height={24}
        strokeWidth={0.01}
      />
    </a>
  );
}

export default ShortcutButton;
