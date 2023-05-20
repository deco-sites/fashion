import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  /**
   * @title Shortcuts
   * @description Cadastre cada shortcurt
   */
  shortcuts?: Array<{
    label: string;
    /**
     * @title Icon
     * @description Image src
     */
    icon: AvailableIcons;
    tooltipLabel: string;
    link?: string;
  }>;
}

function Shortcuts({ shortcuts = [] }: Props) {
  return (
    <div class="fixed top-2/4 right-0 -translate-y-2/4">
      <ul class={"flex flex-col"}>
        {shortcuts.map(({ icon, link = "#", tooltipLabel }) => {
          return (
            <li class="tooltip tooltip-left" data-tip={tooltipLabel}>
              <a
                class="text-base-500 bg-white border-base-300 border py-3 px-[0.625rem] block"
                aria-label={`Ir para ${tooltipLabel}`}
                href={link}
              >
                <Icon id={icon} width={20} height={20} class="text-base-500" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shortcuts;
