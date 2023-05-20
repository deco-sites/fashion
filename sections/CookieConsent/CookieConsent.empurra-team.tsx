import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  policy: string,
  useCookies: string, 
  buttonText: string,
  readCookie: string
}

function CookieConsent({ policy, useCookies, readCookie, buttonText }: Props) {
  return (
    <>
      <div class="container px-4 py-4 rounded border border-base-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center shadow bg-base-100">
        <h1>
          <strong class="">{policy}</strong>
          <p class="py-3 ">
            {useCookies}
          </p>
          <a href="https://www.deco.cx" class="flex items-center text-[#6D8B61] text-sm underline">
            <span>{readCookie}</span>
            <Icon
                id="ChevronRight"
                size={14}
                stroke="currentColor"
                strokeWidth={2}
              />
          </a>
        </h1>
          
          <button
              class="order-last self-end btn-outline flex items-start btn-outline rounded-none border-none justify-end align-top hover:bg-white w-main p-0 m-0 h-min">
              <Icon  class=" group-hover:text-black" id="XMark" width={20} height={20} strokeWidth={2} />
          </button>

          <button class="ml-auto self-end bg-slate-700 rounded-none border-none font-default" style="height: 40px; width: 80px;">
              <text class="text-white normal-case font-light">{buttonText}</text>
          </button>
      </div>
    </>
  );
}

export default CookieConsent;
