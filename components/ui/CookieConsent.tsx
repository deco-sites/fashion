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

export interface Props {
  title?: string;
  /** @format textarea */
  text?: string;
  policy?: {
    text: string;
    link: string;
  };
  buttons?: {
    allowText: string;
    /**    denyText?: string; */
  };
  layout?: {
    position?: "Expanded" | "Left" | "Center" | "Right";
    content?: "Tiled" | "Piled up";
  };
}

function CookieConsent({ title, text, policy, buttons, layout }: Props) {
  const id = `cookie-consent-${useId()}`;

  return (
    <>
      <div
        id={id}
        class={`
          transform-gpu translate-y-[200%] transition fixed bottom-0 lg:bottom-2 w-screen z-50 lg:flex
          ${layout?.position === "Left" ? "lg:justify-start" : ""}
          ${layout?.position === "Center" ? "lg:justify-center" : ""}
          ${layout?.position === "Right" ? "lg:justify-end" : ""}
        `}
      >
        <div
          class={`
          p-4 mx-4 my-2 flex flex-col gap-4 shadow bg-base-100 rounded border border-base-200 
          ${
            !layout?.position || layout?.position === "Expanded"
              ? "lg:container lg:mx-auto"
              : `
            ${layout?.content === "Piled up" ? "lg:w-[480px]" : ""}
            ${
                !layout?.content || layout?.content === "Tiled"
                  ? "lg:w-[520px]"
                  : ""
              }
          `
          }
          ${
            !layout?.content || layout?.content === "Tiled"
              ? "lg:flex-row lg:items-end"
              : ""
          }
          
        `}
        >
          <div
            class={`flex-auto flex flex-col gap-4 ${
              !layout?.content || layout?.content === "Tiled" ? "lg:gap-2" : ""
            }`}
          >
            <h3 class="text-xl">{title}</h3>
            <div class="text-base">{text}</div>

            <a href={policy.link} class="text-sm link link-secondary">
              {policy.text}
            </a>
          </div>

          <div
            class={`flex flex-col gap-2 ${
              !layout?.position || layout?.position === "Expanded"
                ? "lg:flex-row"
                : ""
            }`}
          >
            <button class="btn" data-button-cc-accept>
              {buttons.allowText}
            </button>
            <button
              class="btn"
              data-button-cc-close
              class="btn btn-outline hidden"
            >
              {buttons.denyText}
            </button>
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}

CookieConsent.defaultProps = {
  title: "Cookies",
  text:
    "Guardamos estatísticas de visitas para melhorar sua experiência de navegação.",
  policy: {
    text: "Saiba mais sobre sobre política de privacidade",
    link: "/politica-de-privacidade",
  },
  buttons: {
    allowText: "Aceitar",
    denyText: "",
  },
  layout: {
    position: "Expanded",
    content: "Tiled",
  },
};

export default CookieConsent;
