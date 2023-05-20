function CookieConsent() {
  return (
    <>
      <div class="w-11/12 md:w-4/5 p-6 shadow-md bg-white object-bottom flex flex-col gap-3 absolute bottom-4 right-1/2 translate-x-2/4">
        <div class="flex justify-between">
          <h1 class="text-[#161616] text-xl w-auto">Cookie policy</h1>
          <button>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                fill="#292929"
              />
            </svg>
          </button>
        </div>
        <p class="text-[#161616] text-base">
          We use third-party cookies order to personalize your experience.
        </p>
        <div class="flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between">
          <a
            class="text-[#6D8B61] flex items-center gap-2 text underline underline-offset-2"
            href=""
          >
            Read our cookie policy{" "}
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.910704 0.410765C1.23614 0.0853278 1.76378 0.0853278 2.08921 0.410765L7.08921 5.41077C7.41465 5.7362 7.41465 6.26384 7.08921 6.58928L2.08921 11.5893C1.76378 11.9147 1.23614 11.9147 0.910704 11.5893C0.585267 11.2638 0.585267 10.7362 0.910704 10.4108L5.32145 6.00002L0.910704 1.58928C0.585267 1.26384 0.585267 0.736202 0.910704 0.410765Z"
                fill="#6D8B61"
              />
            </svg>
          </a>
          <button class="btn py-1 leading-4 px-4 rounded-none w-full md:w-auto capitalize">
            Allow
          </button>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;
