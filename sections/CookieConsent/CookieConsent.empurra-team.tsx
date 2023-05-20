import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
}

function CookieConsent({ title }: Props) {
  return (
    <>
      <div class="container px-4 py-4 rounded border border-base-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow bg-base-100">
        <h1>
          <strong>Cookie policy</strong>
          <p class="text-center mt-auto">
            We use third-party cookies order to personalize your experience.
          </p>
          <a href="https://www.deco.cx">
            <span class="underline text-sm text-[#6D8B61]">
              Read our cookie policy
              <Icon
                id="ChevronRight"
                size={14}
                stroke="currentColor"
                strokeWidth={2}
              />
            </span>
          </a>
        </h1>

        <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button data-button-cc-accept>Aceitar</Button>
          <Button data-button-cc-close class="btn-outline">Fechar</Button>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;
