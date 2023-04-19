import Icon, {
  AvailableIcons,
} from "deco-sites/fashion/components/ui/Icon.tsx";
import Text from "deco-sites/fashion/components/ui/Text.tsx";
import Container from "deco-sites/fashion/components/ui/Container.tsx";

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
      <div class="border-base-200 border border-solid">
        <div class="flex flex-col justify-evenly divide-y divide-base-200 mx-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row gap-4 py-6 sm:flex-col sm:py-0 sm:px-8">
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <div class="flex flex-col gap-2">
                <Text variant="heading-3">{title}</Text>
                <Text variant="caption">
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
