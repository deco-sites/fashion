import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";

export interface Props {
  /**
   * @title Cookie Title
   * @description Text displayed on first row
   */
  cookieTitle: string;
  /**
   * @title Icon
   * @description Close modal icon
   */
  closeIcon: AvailableIcons;
  /**
   * @title Cookie content text
   * @description Modal text content
   */
  cookieTextContent: string;
  /**
   * @title Policy text
   * @description
   */
  policyText: string;
  /**
   * @title Police Url
   * @description
   */
  policyUrl: string;
  /**
   * @title Police target
   * @description Where to open the linked document.
   */
  policyTarget?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * @title Icon
   * @description Policy Icon
   */
  policyIcon: AvailableIcons;
  /**
   * @title Allow button text
   * @description Button text
   */
  allowButtonText: string;
  /**
   * @title Modal width
   * @description .
   */
  modalWidth: "small" | "medium" | "large";
  /**
   * @title Modal width
   * @description .
   */
  modalPosition: "left" | "center" | "right";
}

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

const CookieConsentV2 = (
  {
    cookieTitle,
    closeIcon,
    cookieTextContent,
    policyText,
    policyUrl,
    policyTarget,
    policyIcon,
    allowButtonText,
    modalWidth,
    modalPosition,
  }: Props,
) => {
  const id = `cookie-consent-${useId()}`;

  const widthModal = modalWidth === "small"
    ? "md:w-96"
    : modalWidth === "medium"
    ? "md:w-1/2"
    : "md:w-[calc(100%-32px)]";

  const positionModal = modalPosition === "left"
    ? "md:left-8"
    : modalPosition === "right"
    ? "md:right-8 inset-x-auto"
    : "md:-translate-x-1/2 md:left-1/2";

  return (
    <>
      <div
        id={id}
        class={`fixed w-[calc(100%-32px)] inset-x-4 bottom-4 bg-base-100 px-4 pb-4 pt-5 z-50 shadow-lg ${widthModal} ${positionModal}`}
      >
        <div class="flex flex-row justify-between pb-5">
          <h3 class="text-xl">{cookieTitle}</h3>

          <button data-button-cc-close>
            <Icon
              className="block"
              id={closeIcon}
              width={24}
              height={24}
              strokeWidth={1}
            />
          </button>
        </div>

        <p class="pb-4 text-base">
          {cookieTextContent}
        </p>

        <div>
          <a
            class="flex flex-row items-center pb-4 hover:cursor-pointer text-secondary"
            href={policyUrl}
            target={policyTarget}
          >
            {policyText}{" "}
            <Icon
              className="block ml-3"
              id={policyIcon}
              width={16}
              height={16}
              strokeWidth={1}
            />
          </a>

          <button
            class="w-full font-normal text-base text-white bg-primary h-9"
            data-button-cc-accept
          >
            {allowButtonText}
          </button>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
};

export default CookieConsentV2;
