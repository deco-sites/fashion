import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class="flex-grow min-h-[40px] flex items-center justify-start"
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li>
      <div
        class={`flex justify-between items-center w-full py-2 ${level > 0 ? "pl-2" : ""}`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button variant="icon">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="Plus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="Minus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul class={`flex-col ${open.value === true ? "flex" : "hidden"}`}>
          <li>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                Ver todos
              </Text>
            </a>
          </li>
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="px-4 flex-grow flex flex-col divide-y divide-default">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>

      <ul class="flex flex-col py-2 bg-hover">
        <li>
          <a class="flex items-center gap-4 px-4 py-2" href="https://www.deco.cx">
            <Icon id="Heart" width={20} height={20} strokeWidth={2} />
            <Text variant="caption">Lista de desejos</Text>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-4 px-4 py-2" href="https://www.deco.cx">
            <Icon id="MapPin" width={20} height={20} strokeWidth={2} />
            <Text variant="caption">Nossas lojas</Text>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-4 px-4 py-2" href="https://www.deco.cx">
            <Icon id="Phone" width={20} height={20} strokeWidth={2} />
            <Text variant="caption">Fale conosco</Text>
          </a>
        </li>
        <li>
          <a class="flex items-center gap-4 px-4 py-2" href="https://www.deco.cx">
            <Icon id="User" width={20} height={20} strokeWidth={2} />
            <Text variant="caption">Minha conta</Text>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
