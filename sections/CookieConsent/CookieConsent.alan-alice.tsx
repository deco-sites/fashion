const SVG_MOCKS = {
  linkArrow: (
    <svg
      className={"ml-1"}
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
  ),

  closeX: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
        fill="#292929"
        className={"group-hover:fill-red-500 duration-200"}
      />
    </svg>
  ),
};

export interface LinkProps {
  label: string;
  url: string;
  openNewTab?: boolean;
}

const Link = (
  { label = "Read our cookie policy", url = "/", openNewTab = false }:
    LinkProps,
) => {
  return (
    <a
      className="flex items-center link text-sm text-[#6D8B61] font-normal"
      href={url}
      target={openNewTab ? "_blank" : ""}
    >
      {label}
      {SVG_MOCKS.linkArrow}
    </a>
  );
};

export interface CookieConsentProps {
  title: string;
  text: string;
  cookiePolicyLink: LinkProps;
}

const CookieConsent = (props: CookieConsentProps) => {
  const {
    title = "Cookie policy",
    text =
      "We use third-party cookies to personalize content, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.",
    cookiePolicyLink,
  } = props;

  // Click no botão Allow
  const handleAllowAction = () => {};

  // Click no X
  const handleCloseAction = () => {};

  return (
    <div
      class={"bg-white fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[480px] p-4 shadow-lg md:p-6"}
    >
      <div class={"flex flex-col gap-4"}>
        <div className="h-10 flex justify-between items-center">
          <h5 className={"text-xl font-normal text-[#161616]"}>{title}</h5>
          <button
            className={"group h-full aspect-square flex justify-center items-center peer"}
            onClick={handleCloseAction}
          >
            {SVG_MOCKS.closeX}
          </button>
        </div>

        <p className={"text-base font-normal text-[#161616]"}>{text}</p>

        <Link {...cookiePolicyLink} />

        <button
          className={"h-9 w-full bg-[#273746] py-2 px-3 text-white text-base leading-none font-normal hover:bg-[#39546d] duration-200"}
          onClick={handleAllowAction}
        >
          Allow
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
