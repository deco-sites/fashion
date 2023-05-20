import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  description: string;
  items: {
    icon: AvailableIcons;
    title: string;
    description: string;
  }[];
}

export default function Benefits(
  { title = "Benefícios", description = "Descrição", items }: Props,
) {
  return (
    <div class="p-10">
      <div class="text-center">
        <h1 class="text-4xl">{title}</h1>
        <p class="text-2xl text-neutral-400">{description}</p>
      </div>
      <div class="container p-6 sm:px-0 sm:py-10">
        <div class="border-base-200 border border-solid">
          <div class="flex flex-col justify-evenly divide-y divide-base-200 mx-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10">
            {items.map((
              {
                icon: id = "Deco",
                title = "Título",
                description = "Descrição",
              },
            ) => (
              <div
                class="flex flex-row gap-4 items-center py-6 sm:flex-col sm:py-0 sm:px-8"
                key={title}
              >
                <Icon id={id} width={40} height={40} strokeWidth={1} />
                <div class="text-center">
                  <h3 class="text-xl">{title}</h3>
                  <p class="text-sm text-neutral-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
