export interface Props {
  title: string;
  paragraph: string;
  textToUrl: string;
  url: string;
  button: string;
}

export default function CookiePolicy(
  { title="Cookie Policy", paragraph="We use third-party cookies order to personalize your experience.", textToUrl="Read our cookie policy", url="https://www.deco.cx/en", button="Allow"}: Props,
) {
  return (
    <div class="container fixed bottom-0 right-0 left-0 w-11/12 my-5 p-5 bg-white shadow-[0px_10px15px-3px_rgba(0,0,0,0.1),0px_4px6px-2px_rgba(0,0,0,0.05)]">
      <div class="firstLine flex justify-between items-center py-2">
        <div>
          <h1 class="font-normal text-[#161616] text-xl leading-7">{title}</h1>
        </div>
        <div>
          <button
            type="button"
            class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-[#292929]"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="secondLine py-2">
        <span class="paragraph font-normal text-[#161616] text-base leading-6">
          {paragraph}
        </span>
      </div>
      <div class="thirdLine flex flex-col gap-2 justify-start items-start sm:flex-row sm:justify-between sm:items-center py-2">
        <span class="font-normal text-[#6D8B61] text-sm cursor-pointer leading-5">
          <a src={url} class="underline decoration-1">{textToUrl}</a>
          <span class="mx-2">&#10095;</span>
        </span>
        <button class="bg-[#273746] hover:bg-gray-700 text-white font-normal py-2 px-3 w-full leading-6 grow sm:grow-0 sm:w-auto">
          {button}
        </button>
      </div>
    </div>
  );
}