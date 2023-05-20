export interface NewsletterProps {
  title: string;
  inputPlaceholder?: string;
}

export default function Newsletter(
  { title, inputPlaceholder }: NewsletterProps,
) {
  return (
    <div className="w-full h-screen bg-zinc-100 p-4 flex justify-center items-center">
      <div className="w-96 lg:w-full bg-primary flex flex-col gap-10 p-4 lg:py-16 lg:justify-center items-center">
        <header>
          <h1 className="text-3xl lg:text-5xl text-white">
            {title}
          </h1>
        </header>
        <div className="w-full lg:w-96 flex justify-start items-start flex-col gap-4">
          <div className="w-full flex flex-col gap-4 lg:flex-row">
            <input
              className="w-full bg-transparent text-white border border-white px-3 py-2 placeholder:text-white focus:border focus:border-white focus:outline-none"
              placeholder={inputPlaceholder ?? "Insira seu e-mail"}
              type="text"
            />
            <button className="group w-fit h-10 p-2 flex justify-center items-center bg-white hover:bg-transparent hover:border hover:border-white">
              <p className="text-zinc-900 group-hover:text-white">
                Assinar
              </p>
            </button>
          </div>

          <p className="text-white text-sm">
            Para prosseguir com a assinatura você está aceitando com nossas{" "}
            <a className="underline">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
