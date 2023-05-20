import Button from "$store/components/ui/Button.tsx";
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
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 sm:bottom-4 z-50 lg:w-full"
      >
        <div class="m-4 lg:m-8 px-4 py-4 flex flex-col gap-4 items-start sm:items-center shadow bg-base-100">
          <div className="flex justify-between w-full">
            <span className="text-xl">Cookie Policy</span>
            <button data-button-cc-close>
              <img src="/svg/close.svg" alt="Close button" />
            </button>
          </div>

          <div className='flex w-full flex-col lg:flex-row justify-between'>
            <div className='flex flex-col'>
              <span className="text-sm">
                We use third-party cookies order to personalize your experience.
              </span>

              <a href="https://www.deco.cx" className='text-[#6D8B61] mt-4'>
                <span class="underline text-base]">
                  Read our cookie policy
                </span>
              </a>
            </div>

            <div class="lg:w-20 mt-4">
              <button data-button-cc-accept className='h-10 w-full bg-[#273746] text-white'>Allow</button>
            </div>

          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;
