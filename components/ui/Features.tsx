import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

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
  benefitsTitle: string;
  benefitsDescription: string;
  features: Feature[];
}

function FeatureHighlights(
  {
    features,
    benefitsTitle = "Benefits Title",
    benefitsDescription =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at erat non erat accumsan vulputate a eu tellus. Cras dapibus nibh quis blandit vulputate. Nunc rutrum sapien risus, non feugiat nulla efficitur at. Duis volutpat vel felis et consectetur. ",
  }: Props,
) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <div class="flex flex-col items-center w-full sm:w-auto">
        <span class="font-medium text-2xl text-center">{benefitsTitle}</span>
        <span class="text-center">{benefitsDescription}</span>
      </div>
      <div>
        <div class="flex flex-col justify-evenly divide-y divide-base-200 mx-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row gap-4 py-6 sm:flex-row sm:py-0 sm:px-8">
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <div class="flex flex-col gap-2">
                <span class="font-medium text-xl">{title}</span>
                <span class="text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;