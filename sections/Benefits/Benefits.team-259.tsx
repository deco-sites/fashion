import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  description: string;
  benefits: Array<{
    title: string;
    icon: AvailableIcons;
    description: string;
  }>;
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "Benefits title",
    description = "Benefits description",
    benefits = [{
      title: "Benefício",
      icon: "Heart",
      description: "Descrição do benefício",
    }],
  } = props;
  return (
    <div class="flex flex-col pt-6 sm:pt-10 pb-6 sm:pb-10 pl-6 sm:pl-16 pr-6 sm:pr-16 gap-8 sm:gap-10">
      <div class="flex flex-col gap-2">
        <h1 class="text-center font-sans text-4xl leading-8 sm:leading-10 text-black">
          {title}
        </h1>
        <h6 class="text-center font-sans text-2xl leading-6 sm:leading-8 text-neutral-500">
          {description}
        </h6>
      </div>
      <div class="w-full flex justify-center">
        <div class="flex flex-col sm:flex-row justify-around w-10/12 sm:w-full">
          {benefits.map((benefit, index) => (
            <>
              <div class="flex flex-1 justify-stretch ">
                <Icon
                  id={benefit.icon}
                  width={30}
                  height={30}
                  strokeWidth={0.01}
                />
                <div class="ml-4">
                  <h1 class="font-sans text-xl leading-7 text-black">
                    {benefit.title}
                  </h1>
                  <h6 class="font-sans text-sm leading-5 text-neutral-500">
                    {benefit.description}
                  </h6>
                </div>
              </div>
              {index < benefits.length - 1 && (
                <hr class="h-[1px] sm:h-auto sm:w-[1px] bg-neutral-300 sm:ml-8 sm:mr-8 mt-4 sm:mt-0 mb-4 sm:mb-0" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
