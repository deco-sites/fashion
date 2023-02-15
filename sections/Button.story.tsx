import UIButton from "$store/components/ui/Button.tsx";

export interface Props {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "small" | "large";
  fit?: "container" | "content";
  loading?: boolean;
}

function Buttons(props: Props) {
  return (
    <div class="m-10 max-w-xl flex flex-col gap-4 divide-y">
      <div>
        <h1 class="text-base">
          Playground: Change the editor to play with the button props
        </h1>
        <div>
          <UIButton {...props}>Playground</UIButton>
        </div>
      </div>
      <div>
        <h2 class="text-base">Documentation: Detailed usage of each props</h2>
        <ul class="flex flex-col gap-4 divide-y">
          <li class="flex flex-col gap-2">
            <h3 class="text-sm">
              variant: "primary" | "secondary" | "tertiary"
            </h3>
            <div class="flex flex-row gap-3 justify-start items-center">
              <UIButton variant="primary">primary</UIButton>
              <UIButton variant="secondary">secondary</UIButton>
              <UIButton variant="tertiary">tertiary</UIButton>
            </div>
          </li>
          <li class="flex flex-col gap-2">
            <h3 class="text-sm">size: "large" | "small"</h3>
            <div class="flex flex-row gap-3 justify-start items-center">
              <UIButton size="large">large</UIButton>
              <UIButton size="small">small</UIButton>
            </div>
          </li>
          <li class="flex flex-col gap-2">
            <h3 class="text-sm">loading: true | false</h3>
            <div class="flex flex-row gap-3 justify-start items-center">
              <UIButton size="large" loading>large</UIButton>
              <UIButton variant="secondary" size="large" loading>
                small
              </UIButton>
              <UIButton size="small" loading>small</UIButton>
              <UIButton variant="secondary" size="small" loading>
                small
              </UIButton>
            </div>
          </li>
          <li class="flex flex-col gap-2">
            <h3 class="text-sm">fit: "container" | "content"</h3>
            <div class="flex flex-row gap-3 justify-start items-center w-full">
              <UIButton fit="container">fit</UIButton>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Buttons;
