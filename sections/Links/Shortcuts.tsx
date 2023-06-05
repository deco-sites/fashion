import Icon from "$store/components/ui/Icon.tsx";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Shortcut {
  label?: string;
  icon?: AvailableIcons;
  link?: string;
}

export interface Props {
  shortcuts?: Array<Shortcut>;
  onHover?: "Show label" | "Show tooltip";
}

export default function Shortcuts({ shortcuts, onHover }: Props) {
  return (
    <div class="group fixed flex flex-col top-1/2 right-0 z-20">
      {shortcuts?.map((shortcut) => {
        return (
          <a
            href={shortcut.link}
            target="_blank"
            class={`flex items-center h-10 bg-base-100 text-base-content hover:bg-base-content hover:text-base-100 border-2 border-neutral mt-[-2px] ${
              onHover === "Show tooltip" && "tooltip tooltip-left"
            }`}
            data-tip={shortcut.label}
          >
            <div class="w-10 flex justify-center">
              {shortcut.icon && <Icon id={shortcut.icon} size={24} />}
            </div>
            {(!onHover || onHover === "Show label") && (
              <div class="flex-none max-w-0 lg:group-hover:max-w-[200px] lg:group-hover:w-auto lg:group-hover:pr-2 duration-200">
                {shortcut.label}
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}
