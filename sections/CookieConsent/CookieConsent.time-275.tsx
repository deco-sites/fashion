import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
export interface Props {
  title: string,
  middleText: string,
  footerText: string,
  buttonText: string,
}

const script = (id: string) => ``;

function CookieConsent({ title, middleText, footerText, buttonText}: Props) {
  // const id = `cookie-consent-${useId()}`;

  return (
    <>
      {/* <div
        id={id}
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 sm:bottom-4 w-screen z-50"
      > */}
      
        <div class="container px-3 py-3 rounded border border-base-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow bg-base-100 ">
        
          <div class="p-4 bg-gray-200 flex flex-col w-full font-serif">
          <span class="flex-grow text-xl ">
            {title}
          </span>
          <span class="flex-grow text-sm">
            {middleText}
          </span>

          <a href="https://www.deco.cx">
            <span class="underline text-sm">
              {footerText}
            </span>
          </a>
          </div>

          <div class="flex flex-col sm:flex-col w-full sm:w-auto ">
            <Button data-button-cc-close class="btn-outline">
            <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </Button>
            <Button class="bg-slate-700" data-button-cc-accept>{buttonText}</Button>
            
          </div>
        </div>
      {/* </div> */}
      {/* <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} /> */}
    </>
  );
}

export default CookieConsent;
