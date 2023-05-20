import Button from "$store/components/ui/Button.tsx";
import { useId } from "preact/hooks";
import Icon from "./Icon.tsx";

const script = (id: string) => `
const callback = () => {
  const KEY = 'store-cookie-consent';
  const ACCEPTED = 'accepted';
  const HIDDEN = "translate-y-[200%]";
  
  const consent = localStorage.getItem(KEY);
  const elem = document.getElementById("${id}");
  
  if (consent !== ACCEPTED) {
    elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
      localStorage.setItem(KEY, ACCEPTED);
      elem.classList.add(HIDDEN);
    });
    elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
      elem.classList.add(HIDDEN);
    });
    elem.classList.remove(HIDDEN);
  }
};

window.addEventListener('scroll', callback, { once: true });
`;

function CookieConsent() {
  const id = `cookie-consent-${useId()}`;

  return (
    <>
      <div
        id={id}
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 sm:bottom-4 w-screen z-50"
      >
        <div class="container px-4 py-4 rounded border border-base-200 flex flex-col gap-4 items-start justify-start sm:items-center shadow bg-base-100">
          <div class="flex w-full justify-between items-center">
            <h3 class="text-2xl">Cookie policy</h3>
            <Button
              data-button-cc-close
              class="bg-transparent border-none text-inherit text-xl"
              aria-label="Fechar"
            >
              <Icon id="XMark" width={30} height={30} strokeWidth={2} />
            </Button>
          </div>
          <span class="flex-grow text-sm">
            Usamos cookies de terceiros para personalizar o conteúdo, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos informações sobre o uso de nosso site com nossos parceiros de mídia social, publicidade e análise.
          </span>

          <a href="https://www.deco.cx" class="flex">
            <span class="underline text-sm">
              Leia nossa política de privacidade
            </span>
            <span class="underline">
              <Icon id="ChevronRight" width={18} height={18} strokeWidth={2} />
            </span>
          </a>
            <Button data-button-cc-accept class="w-full">Aceitar</Button>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;