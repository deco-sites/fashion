import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  breadcrumbList: BreadcrumbList;
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
      <a href={item}>
        <Text variant="caption-regular">
          {name}
        </Text>
      </a>
    </li>
  );
}

function Breadcrumb({ breadcrumbList }: Props) {
  const { itemListElement } = breadcrumbList;

  return (
    <ul class="flex flex-row gap-2 items-center max-w-[360px]">
      <Item name="Home" item="/" />
      {itemListElement.map((item) => (
        <>
          <li>
            <Icon id="ChevronRight" width={16} height={16} strokeWidth={2} />
          </li>
          <Item {...item} />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
