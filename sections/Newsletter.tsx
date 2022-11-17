export default function Newsletter() {
  return (
    <div class="bg-gray-100 flex flex-row flex-wrap p-6 md:p-10 items-center justify-center">
      <div class="flex flex-col md:w-1/4 px-5">
        <span class="font-bold uppercase text-center md:text-left">
          Cadastre-se
        </span>
        <span class="text-sm text-gray-700 py-2">
          E receba antecipadamente as nossas novidades e promoções. Aproveite e
          ganhe 15% de desconto na sua primeira compra.
        </span>
        <span class="text-sm text-left text-gray-700">
          Para mais informações,{" "}
          <a href="#" class="underline hover:text-black">
            clique aqui.
          </a>
        </span>
      </div>
      <div class="flex w-full md:w-1/4 flex-col items-center justify-center mt-4 md:mt-0">
        <input
          type="text"
          class="bg-white border text-sm h-9 border-gray-100 w-full mb-3 w-5/6 px-2 py-1 text-gray-600"
          placeholder="Nome"
        />
        <select class="bg-white text-sm h-9 border border-gray-100 w-full mb-3 w-5/6 px-2 py-1 text-gray-600">
          <option value={""}>Interesse</option>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Infantil">Infantil</option>
        </select>

        <div class="flex flex-row w-full w-[83.3%]">
          <input
            type="text"
            class="bg-white h-9 text-sm border border-gray-100 flex-1 mb-3 w-5/6 px-2 py-1 text-gray-600"
            placeholder="Email"
          />
          <button class="bg-white h-9 border border-gray-300 px-2 py-1 ml-2">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
