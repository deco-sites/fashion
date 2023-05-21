export interface Props {
  informacao?: string;
  link?: string;
}

export default function Contact({ informacao, link }: Props) {
  return (
    <main class="flex justify-center w-screen h-screen items-center bg-[#DCDCDC] ">
      <div class="font-sans bg-[#ffffff] w-[600px] h-[668px] px-16 flex flex-col items-center shadow-lg max-sm:h-full max-sm:w-full">
        <div class="w-[472px] h-[100px] mt-16 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col">
          <h1 class="text-5xl font-sans mb-3">Contact Us</h1>
          <p class="text-lg font-sans mb-5">{informacao || "teste"}</p>
        </div>

        <form class="w-full">
          <div class=" flex justify-evenly mb-6">
            <div class="w-full  flex flex-col justify-start max-sm:pr-6">
              <label class="w-full mb-2" for="name">Nome</label>
              <input
                class="w-[200px] h-[30px] focus:border-transparent border-gray-300 border-[1px]"
                id="name"
                type="text"
                placeholder=""
              />
            </div>
            <div class="  flex flex-col justify-start">
              <label class="w-full mb-2" for="last">Sobre Nome</label>
              <input
                class="w-[200px] h-[30px] focus:border-transparent border-gray-300 border-[1px]"
                id="last"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div class=" flex justify-evenly mb-6">
            <div class="w-full  flex flex-col justify-start max-sm:pr-6">
              <label class="w-full mb-2" for="email">Email</label>
              <input
                class="w-[200px] h-[30px] focus:border-transparent border-gray-300 border-[1px]"
                id="email"
                type="text"
                placeholder=""
              />
            </div>
            <div class=" flex flex-col justify-start">
              <label class="w-full mb-2" for="number">Numero</label>
              <input
                class="w-[200px] h-[30px] focus:border-transparent border-gray-300 border-[1px]"
                id="number"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div class="w-full flex flex-col justify-start mb-6">
            <label class="mb-2" for="msn">Mensagem</label>
            <input
              class="w-full h-[80px] border-gray-300 border-[1px]"
              id="msn"
              type="text"
            />
          </div>
          <div class="mb-2 flex max-sm:pb-28">
            <input type="checkbox" />
            <p class="ml-2">
              I accept the <a class="underline" href={link || "teste"}>terms</a>
            </p>
          </div>
          <button
            type="submit"
            class="w-full h-10 bg-[#273746] text-center text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
