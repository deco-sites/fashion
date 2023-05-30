export interface Props {
  title: string;
  description: string;
  removeCloseButton?: boolean;
  inputs?: Array<{
    type: "text" | "email" | "password";
    label: string;
    placeholder: string;
  }>;
  buttons?: Array<{
    color?:
      | "btn-primary"
      | "btn-secondary"
      | "btn-accent"
      | "btn-ghost"
      | "btn-info"
      | "btn-success"
      | "btn-warning"
      | "btn-error"
      | "loading"
      | "btn-disabled";
    isOutlined?: boolean;
    title: string;
  }>;
  footerParagraph: {
    title: string;
    linkName: string;
    linkHref: string;
  };
}

export default function Auth(
  {
    title = "teste",
    description = "teste",
    removeCloseButton,
    inputs,
    buttons,
    footerParagraph,
  }: Props,
) {
  return (
    <div class="flex items-center justify-center h-screen mx-auto">
      <div class="relative max-w-[360px] lg:max-w-[600px] px-4 py-[72px] lg:px-16 lg:py-16 bg-white shadow-md drop-shadow-md">
        {!removeCloseButton && (
          <button class="btn btn-circle btn-outline absolute top-4 right-4 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <header class="flex flex-col w-full items-center text-center justify-center text-[#292929] gap-2 pt-4 lg:pt-0 pb-4">
          <h1 class="text-3xl leading-9 font-bold w-full items-center">
            {title}
          </h1>
          <span class="text-sm leading-5">{description}</span>
        </header>

        <main>
          <div class="flex flex-col gap-4 items-start text-[#292929]">
            {inputs?.map((input) => (
              <div key={input.placeholder} class="form-control w-full">
                <label class="label">
                  <span className="label-text">{input.label}</span>
                </label>

                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  class="input input-bordered w-full"
                />

                {input.type === "password" && (
                  <p class="flex self-end leading-5 text-sm text-[#787878] cursor-pointer pt-2 opacity-90 hover:opacity-100">
                    Esqueceu sua senha?
                  </p>
                )}
              </div>
            ))}
          </div>
        </main>

        <footer class="flex flex-col items-center justify-center pt-4 gap-3 w-full">
          {buttons?.map((button) => (
            <button
              class={`${
                button.isOutlined ? "btn btn-outline" : "btn btn-wide"
              } ${button.color} w-full flex text-white items-center justify-center`}
            >
              <span>{button.title}</span>
            </button>
          ))}

          {footerParagraph && (
            <span class="flex items-center pt-2 gap-1 text-[#787878]">
              {footerParagraph.title}
              <a
                href={`${footerParagraph.linkHref}`}
                class="cursor-pointer hover:underline"
              >
                {footerParagraph.linkName}
              </a>
            </span>
          )}
        </footer>
      </div>
    </div>
  );
}
