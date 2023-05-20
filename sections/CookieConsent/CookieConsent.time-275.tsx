import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  middleText: string;
  footerText: string;
  buttonText: string;
}

export default function CookieConsent(
  { title, middleText, footerText, buttonText }: Props,
) {
  return (
    <div class="w-full h-full flex justify-center content-end">
      <div class="w-4/5 flex justify-between flex-col shadow-md p-6 absolute bottom-4">
        <div>
          <div class="flex justify-between items-center">
            <h2 class="text-xl">{title}</h2>
            <button>
              <Icon
                class=" group-hover:text-black"
                id="XMark"
                width={20}
                height={20}
                strokeWidth={2}
              />
            </button>
          </div>
          <p class="my-2 text-base">
            {middleText}
          </p>
        </div>
        <div class="flex justify-between flex-col sm:flex-row">
          <a
            href="#"
            class="text-sm text-[#6d8b61] flex items-center underline"
          >
            {footerText}
            <Icon
              id="ChevronRight"
              size={14}
              stroke="currentColor"
              strokeWidth={2}
            />
          </a>
          <button class="btn rounded-none text-white normal-case mt-2 sm:mt-0 p bg-[#273746] hover:bg-[#273746]">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
