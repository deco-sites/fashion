/**
 * Estou usando tokens do DaisyUI e Tailwind CSS
 * Fiz alterações somente no arquivo destinado a section do meu grupo
 * O componente esta editável no admin da Deco
 * Adicionei link de preview da section do admin da deco no PR
 * Minha section funciona com propriedades padrão
 * link preview : https://deco.cx/admin/sites/fashion/blocks/previews?ref=%23%2Fdefinitions%2FZGVjby1zaXRlcy9mYXNoaW9uL3NlY3Rpb25zL0Nvb2tpZUNvbnNlbnRUaW1lNy50c3g%3D&type=sections
 */

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
  title: string;
  description: string;
  button: string;
  link: {
    href: string;
    title: string;
    target: "" | "_blank" | "_self";
  };
}

export default function CookieConsentTime7(props: Props) {
  const {
    title,
    description,
    link,
    button,
  } = props;
  const id = `cookie-consent-${useId()}`;
  return (
    <>
      <div
        id={id}
        className="flex flex-col items-start justify-start p-4 bottom-0 left-0  fixed sm:p-8
        z-50
        "
      >
        <div className="bg-base-100 shadow-lg p-4 sm:p-6 space-y-4 text-default  sm:w-[360px]">
          <div className="flex items-center justify-between">
            <h1 className="text-xl mt-0">{title ? title : "Cookie policy"}</h1>
            <button
              className="flex btn btn-square min-h-[40px] h-10 w-10 rounded-none bg-base-100 border-none fill-base-500 hover:bg-base-100 hover:opacity-75"
              data-button-cc-close
            >
              <svg
                className="w-[14px] h-[14px]"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                />
              </svg>
            </button>
          </div>
          <p>{description}</p>
          <a
            className="link text-sm text-secondary focus:text-secondary-focus hover:text-secondary-focus flex items-center gap-1"
            href={link.href ? link.href : "https://deco.cx"}
            target={link.target ? link.target : "_blank"}
          >
            {link.title ? link.title : "Read our cookie policy"}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.9107 4.41076C7.23614 4.08533 7.76378 4.08533 8.08921 4.41076L13.0892 9.41077C13.4147 9.7362 13.4147 10.2638 13.0892 10.5893L8.08921 15.5893C7.76378 15.9147 7.23614 15.9147 6.9107 15.5893C6.58527 15.2638 6.58527 14.7362 6.9107 14.4108L11.3214 10L6.9107 5.58928C6.58527 5.26384 6.58527 4.7362 6.9107 4.41076Z"
                fill="#6D8B61"
              />
            </svg>
          </a>
          <button
            className="btn btn-block bg-primary text-primary-content h-9 min-h-[36px] py-1 mt-5  w-full rounded-none normal-case focus:bg-primary-focus hover:bg-primary-focus"
            data-button-cc-accept
          >
            {button ? button : "Allow"}
          </button>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}
