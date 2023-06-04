import Icon from "$store/components/ui/Icon.tsx";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Shortcut {
  label?: string;
  icon?: AvailableIcons;
  link?: string;
}

export interface Props {
  shortcuts?: Shortcut[];
  layout?: {
    tooltip?: boolean;
  };
}

const DEFAULT_PROPS: Props = {
  shortcuts: [
    {
      icon: "WhatsApp",
      label: "Whastapp",
      link: "/",
    },
    {
      icon: "Message",
      label: "Chat",
      link: "/",
    },
    {
      icon: "Ruler",
      label: "Medidas",
      link: "/",
    },
    {
      icon: "Truck",
      label: "Entrega",
      link: "/",
    },
    {
      icon: "ArrowsPointingOut",
      label: "Devolução",
      link: "/",
    },
  ],
};

export default function Shortcuts(props: Props) {
  const { shortcuts, layout } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="join join-vertical fixed top-1/2 right-0 z-20">
      {shortcuts?.map(({ link, icon, label }) => (
        <a
          href={link}
          target="_blank"
          class={`btn btn-square join-item inline-flex items-center justify-center ${
            layout?.tooltip ? "tooltip tooltip-left" : ""
          }`}
          data-tip={label}
        >
          <Icon id={icon || "WhatsApp"} size={24} />
        </a>
      ))}
    </div>
  );
}
