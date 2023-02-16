function Newsletter() {
  return (
    <div class="bg-gray-100 flex flex-col items-center justify-center">
      <div class="flex flex-col flex-wrap p-6 md:p-10 md:w-[32em]">
        <div class="flex flex-col">
          <span class="font-bold uppercase text-center md:text-left">
            Cadastre-se e fique por dentro das novidades
          </span>
        </div>
        <div class="flex w-full flex-col items-center justify-center mt-4">
          <div class="flex flex-row w-full">
            <input
              type="text"
              class="bg-white h-9 text-sm border border-gray-100 flex-1 mb-3 w-5/6 px-2 py-1 text-gray-600"
              placeholder="Email"
            />
            <button class="bg-white h-9 border border-gray-300 px-2 py-1 ml-2">
              Cadastrar
            </button>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-gray-700 py-2">
            Aproveite e ganhe 15% de desconto na sua primeira compra.
          </span>
          <span class="text-sm text-left text-gray-700">
            Para mais informações,{" "}
            <a href="#" class="underline hover:text-black">
              leia nosso regulamento.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
