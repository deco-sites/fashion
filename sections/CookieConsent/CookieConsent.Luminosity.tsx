export interface CookieConsentProps {
  description?: string;
}

export default function CookieConsent({ description }: CookieConsentProps) {
  return (
    <div className="w-full h-full bg-white p-2 flex justify-center items-center">
      <div className="w-5/6 lg:w-fit p-4 bg-white shadow-lg flex flex-col gap-4 lg:gap-2 fixed bottom-0 mb-2 lg:left-2">
        <header className="flex justify-between items-center">
          <h1 className="text-xl">Política de cookies</h1>

          <div className="w-10 h-10 flex justify-center items-center cursor-pointer">
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
              />
            </svg>
          </div>
        </header>

        <p>
          {description ??
            "Usamos cookies de terceiros para personalizar sua experiência."}
        </p>

        <div></div>
        <a className="flex justify-start items-center gap-1 cursor-pointer">
          <p className="text-sm text-[#6D8B61] underline">
            Ler política de cookies
          </p>
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

        <button className="group w-full h-10 p-2 flex justify-center items-center bg-[#273746] hover:bg-white hover:border hover:border-[#546F4A]">
          <p className="text-white group-hover:text-[#546F4A]">
            Aceitar
          </p>
        </button>
      </div>
    </div>
  );
}
