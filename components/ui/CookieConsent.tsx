import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

import { useId } from "preact/hooks";

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
    });name
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
      <div class="container px-4 py-4 rounded border border-base-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow bg-opacity-75 bg-base-100">
          <div class="flex flex-row items-center sm:flex-row gap-2 sm:w-auto">
            <span class="flex text-xl">
              Cookie policy
            </span>
          </div>


          <span class="flex-grow text-base">
            We use third-party cookies order to
            personalize your experience.
          </span>

          <a href="https://www.deco.cx">
            <span class="underline text-sm">
              Read our cookie policy
            </span>
          </a>

          <div class="flex flex-col  sm:flex-row gap-2 w-full md:w-auto">
            <Button class="" data-button-cc-accept>Allow</Button>
            <Button data-button-cc-close class="btn-outline">
              <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;
