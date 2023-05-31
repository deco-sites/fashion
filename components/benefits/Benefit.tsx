import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export default function Benefits(
  props: { showDivider: boolean, icon:AvailableIcons, label:string, description:string, layout?: "piledup" | "tiled" | undefined, reverse?:boolean, class?:string },
) {
  return (
    <div class={`${props.reverse ? "bg-primary text-accent-content p-4 lg:p-8" : ""} flex gap-4 ${props.layout == "piledup" ? "flex-col items-center text-center" : ""} ${props.showDivider && props.layout !== "piledup" ? "border-b border-neutral-300" : ""} ${props.showDivider ? "pb-4 lg:pb-0 lg:pr-8 lg:border-r lg:border-b-0" : ""}`}>
        <div class="flex-none">
          <Icon
              id={props.icon}
              class={props.reverse ? "text-base-100" : "text-primary"}
              width={36}
              height={36}
              strokeWidth={0.01}
              fill="currentColor"
          />
        </div>
        <div class="flex-auto flex flex-col gap-1 lg:gap-2">
          <h3 class={`text-base lg:text-xl leading-7 ${props.reverse ? "text-base-100" : "text-base-content"}`}>
              {props.label}
          </h3>
          <p class={`text-sm leading-5 ${props.reverse ? "text-base-100" : "text-neutral"} ${props.layout == "piledup" ? "hidden lg:block" : ""}`}>
              {props.description}
          </p>
        </div>
    </div>
  );
}
