import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";

const script = (id: string) => `
  const callback = () => {
    const KEY = 'store-cookie-consent';
    const ACCEPTED = 'accepted';
    const HIDDEN = "translate-y-[200%]";
    
    const consent = localStorage.getItem(KEY);
    const element = document.getElementById("${id}");
    
    if (consent !== ACCEPTED) {
      element.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
        localStorage.setItem(KEY, ACCEPTED);
        element.classList.add(HIDDEN);
      });
      element.querySelector('[data-button-cc-close]').addEventListener('click', function () {
        element.classList.add(HIDDEN);
      });
      element.classList.remove(HIDDEN);
    }
  };
  
  window.addEventListener('scroll', callback, { once: true });
`;

const AVAILABLE_SIZES = {
  "xs": "w-full sm:max-w-[360px]",
  "sm": "max-w-[480px]",
  "md": "max-w-[560px]",
  "full": "max-w-full",
} as const;

export type Props = {
  title?: string;
  description?: string;
  policyURL?: string;
  policyLinkDescription?: string;
  acceptCookieButtonText?: string;
  centralize?: boolean;
  size?: "xs" | "sm" | "md" | "full";
}

function CookieConsent({
  title = "Cookie policy",
  description =
    "We use third-party cookies order to personalize your experience.",
  policyURL = "#",
  policyLinkDescription = "Read our cookie policy",
  acceptCookieButtonText = "Allow",
  centralize = false,
  size = "full",
}: Props) {
  const id = `cookie-consent-${useId()}`;

  return (
    <>
      <section
        id={id}
        class={`
          transform-gpu
          translate-y-[200%]
          transition
          fixed
          z-50
          bottom-4 md:bottom-8
          px-4 md:px-8
          w-full
          ${AVAILABLE_SIZES[size]}  
          ${centralize && "left-1/2 -translate-x-1/2 w-fit"}
        `}
      >
        <div
          class={`
            bg-white 
            flex flex-col gap-4 
            p-4 md:p-6
            shadow-md md:shadow-lg shadow-black/5 md:shadow-black/10
          `}
        >
          <header class="flex justify-between items-center">
            <span class="text-[#161616] text-xl">
              {title}
            </span>
            <Button
              data-button-cc-close
              class="
                btn-outline 
                border-none 
                w-10 h-10 
                rounded-none 
                hover:bg-transparent hover:text-inherit hover:brightness-90 
                transition-all
              "
            >
              <span>
                <Icon id="XMark" size={28} strokeWidth={2} />
              </span>
            </Button>
          </header>
          <p class="text-[#161616] text-base">
            {description}
          </p>
          <footer
            class={`
              flex flex-col justify-between gap-4 
              ${size !== "xs" && size !== "sm" && "md:flex-row"}
            `}
          >
            <span class="text-[#6D8B61] flex items-center gap-1 text-sm">
              <a href={policyURL} class="underline">
                {policyLinkDescription}
              </a>
              <Icon id="ChevronRight" size={14} strokeWidth={2} />
            </span>
            <Button
              data-button-cc-accept
              class="
              bg-[#273746] 
                rounded-none 
                hover:bg-[#273746] hover:brightness-90 
                transition-all
                text-white
              "
            >
              {acceptCookieButtonText}
            </Button>
          </footer>
        </div>
      </section>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

export default CookieConsent;
