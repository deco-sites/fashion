export interface Props {
  title?: string;
  description?: string;
  href?: string;
  labelName?: string;
  labelEmail?: string;
  labelPassword?: string;
  btnSignUp?: string;
  btnSignUpGoogle?: string;
  btnSignIn?: string;
  haveAccountSpan?: string;
}

export default function Auth({
  title,
  description,
  href,
  labelName,
  labelEmail,
  labelPassword,
  btnSignUp,
  btnSignUpGoogle,
  btnSignIn,
  haveAccountSpan,
}: Props) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white md:bg-[#0000001a]">
      <div className="absolute right-0 top-0 md:m-[2.5rem] m-4 hover:opacity-60 cursor-pointer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z"
            fill="#292929"
          />
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="19.5"
            stroke="#AAAAAA"
          />
        </svg>
      </div>
      <div className="flex w-full min-h-screen pt-[4.5rem] items-center shadow-none p-8 md:min-h-[41.75rem] md:w-[37.5rem] flex-col gap-6 bg-white md:p-16 md:shadow-xl">
        <h1 className="text-center text-5xl font-normal">
          {title ?? "Sign up"}
        </h1>
        <p className="text-center text-lg font-normal">
          {description ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        <div className="flex w-full flex-col gap-1">
          <span className="text-normal text-[1rem]">{labelName ?? "Name"}</span>
          <input className="w-full border-2 bg-white py-2 pl-3" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="text-normal text-[1rem]">
            {labelEmail ?? "E-mail"}
          </span>
          <input
            className="w-full border-2 bg-white py-2 pl-3"
            type={"email"}
          />
        </div>

        <div className="wflex w-full flex-col gap-1">
          <span className="text-normal text-[1rem]">
            {labelPassword ?? "Password"}
          </span>
          <input
            className="w-full border-2 bg-white py-2 pl-3"
            type={"password"}
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <button className="btn btn-block bg-[#273746] normal-case rounded-none text-white font-normal transition ease-in-out delay-75 hover:bg-[#17222b] hover:opacity-40">
            {btnSignUp ?? "Sign Up"}
          </button>
          <button className="btn btn-block border-[#273746] bg-white text-[#546F4A] bg-primary-content rounded-none normal-case font-normal items-center gap-2 transition ease-in-out delay-75 hover:bg-white hover:opacity-40">
            <strong
              className={"text-[#273746] text-2xl normal-case font-normal"}
            >
              G
            </strong>{" "}
            {btnSignUpGoogle ?? "Sign Up with Google"}
          </button>
        </div>

        <span className="text-center text-sm text-[#787878]">
          {haveAccountSpan ?? "Already have an account?"}{"  "}
          <a
            className="underline cursor-pointer"
            href={href}
          >
            {btnSignIn ?? "Log in"}
          </a>
        </span>
      </div>
    </div>
  );
}
