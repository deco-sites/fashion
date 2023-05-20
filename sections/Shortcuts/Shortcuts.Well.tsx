import Icon from "$store/components/ui/Icon.tsx";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Shortcut {
  icon: AvailableIcons;
  tooltip: string;
  link?: string;
}

export interface Props {
  shortcuts: Array<Shortcut>;
}

export default function Shortcuts({ shortcuts }: Props) {
  if (!shortcuts || shortcuts.length === 0) {
    shortcuts = [
      {
        icon: "WhatsApp",
        tooltip: "WhatsApp",
      },
      {
        icon: "Messages",
        tooltip: "Mensagens",
      },
      {
        icon: "Ruler",
        tooltip: "Régua",
      },
      {
        icon: "TruckDelivery",
        tooltip: "Entrega",
      },
      {
        icon: "ArrowsRightLeft",
        tooltip: "Ajustes",
      },
    ];
  }
  return (
    <div class="absolute bg-white top-1/2 right-0">
      {shortcuts.map((shortcut) => {
        return (
          <div class="h-10 w-10 border-2 border-[#AAA] cursor-pointer mt-[-2px]">
            <div
              className="flex justify-center items-center tooltip tooltip-left"
              data-tip={shortcut.tooltip}
            >
              <Icon id={shortcut.icon} size={20} class="mt-2" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
