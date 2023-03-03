import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <Container class="min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div class="border-default border-1">
        <div class="flex flex-col justify-evenly sm:flex-row divide-y-1 sm:divide-y-0 sm:divide-x-1 divide-default mx-6 sm:mx-0 sm:my-10">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row sm:flex-col gap-4 py-6 sm:py-0 sm:px-10">
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <div class="flex flex-col gap-2">
                <Text variant="heading-3">{title}</Text>
                <Text tone="subdued" variant="caption">
                  {description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeatureHighlights;
