import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  /**
   * @title Tooltip label
   * @description Text displayed on tooltip
   */
  cookieTitle: string;
  /**
   * @title Icon
   * @description Icon displayed inside the button
   */
  closeIcon: AvailableIcons;
  /**
   * @title Icon
   * @description Icon displayed inside the button
   */
  cookieTextContent: string;
  /**
   * @title Href
   * @description URL or ID to redirect to
   */
  allowButtonText: string;
  /**
   * @title Href
   * @description URL or ID to redirect to
   */
  policyIcon: AvailableIcons;
  /**
   * @title Target
   * @description Where to open the linked document.
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const CookieConsentV2 = (
  { cookieTitle, closeIcon, cookieTextContent, policyIcon, allowButtonText }:
    Props,
) => {
  return (
    <div class="fixed bottom-4 inset-x-0 mx-4 px-4 pb-4 pt-5 shadow-lg">
      <div class="flex flex-row justify-between pb-5">
        <h3>{cookieTitle}</h3>

        <button>
          <Icon
            className="block"
            id={closeIcon}
            width={24}
            height={24}
            strokeWidth={0.01}
          />
        </button>
      </div>

      <p class="pb-4">
        {cookieTextContent}
      </p>

      <div class="">
        <a class="flex flex-row pb-4 hover:cursor-pointer text-secondary">
          Read our cookie policy{" "}
          <Icon
            className="block"
            id={policyIcon}
            width={24}
            height={24}
            strokeWidth={0.01}
          />
        </a>

        <button class="w-full font-normal text-base text-white bg-primary h-9 ">
          {allowButtonText}
          aaa
        </button>
      </div>
    </div>
  );
};

export default CookieConsentV2;
