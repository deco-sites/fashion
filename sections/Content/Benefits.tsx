import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Container, { HeaderContent, Layout, ExtendedStyle as Style } from "$store/components/ui/Container.tsx"
import { Colors, colorClasses, borderColorClasses } from "$store/components/ui/Types.tsx"

export interface Props {
  header?: HeaderContent;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: Layout;
  style?: Style;
  itemsStyle?: {
    showDivider?: boolean;
    iconPosition?: "Top" | "Left"
    bgColor?: Colors;
  }
}

export default function Benefits(
  props: Props,
) {
  const {
    header = {
      title: "",
      description: "",
    },
    benefits = [
      {
        "icon": "Truck",
        "label": "Delivery Nationwide",
        "description": "Check the delivery timeframe during checkout."
      },
      {
        "icon": "Discount",
        "label": "15% off on first purchase",
        "description": "Applied directly in the shopping bag."
      },
      {
        "icon": "ArrowsPointingOut",
        "label": "Free Returns",
        "description": "See the conditions for returning your product."
      }
    ],
    layout,
    style,
    itemsStyle,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const hasBg = itemsStyle?.bgColor && itemsStyle?.bgColor !== "Transparent"
    const showDivider = !hasBg && itemsStyle?.showDivider && index < benefits.length - 1;

    return (
      <div
        class={`${
          hasBg ? `${colorClasses[itemsStyle?.bgColor || "Primary"]} p-4 lg:px-8 lg:py-4` : ""
        } flex gap-2 flex-col items-center text-center ${
          itemsStyle?.iconPosition == "Left" ? "lg:flex-row lg:items-start lg:text-left lg:gap-4" : ""
        } ${
          showDivider
            ? `border-b ${borderColorClasses[itemsStyle?.bgColor || style?.content?.bgColor || style?.section?.bgColor || "Transparent"]}`
            : ""
        } ${showDivider ? "pb-4 lg:pr-8 lg:border-r lg:border-b-0" : ""} ${
          showDivider && (!itemsStyle?.bgColor || itemsStyle?.bgColor == "Transparent") ? "lg:pb-0" : ""
        }`}
      >
        <div class="flex-none">
          <Icon
            id={benefit.icon}
            width={36}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
          />
        </div>
        <div class="flex-auto flex flex-col gap-1 lg:gap-2">
          <div
            class={`text-base lg:text-xl leading-7`}
          >
            {benefit.label}
          </div>
          <p
            class={`text-sm leading-5`}
          >
            {benefit.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <Container header={header} layout={layout} style={style}>
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-2 gap-4 w-full lg:gap-8 lg:grid-flow-col lg:auto-cols-fr">
          {listOfBenefits}
        </div>
      </div>
    </Container>
  );
}
