export default function HomeFilter() {
  return (
    <div class="flex justify-center bg-gray-100 min-h-[80px]">
      <div class="w-full md:w-4/5 flex justify-between">
        <div class="flex items-center justify-center flex-1 md:flex-none w-1/4">
          <span class="text-gray-700 m-4">Filtro Rápido</span>
        </div>
        <div class="flex md:flex-row flex-col flex-1 items-center text-white">
          <select class="h-8 w-40 md:w-44 px-2 py-1 text-gray-500 uppercase text-sm mt-3 mr-3 md:mt-0 bg-white border border-gray-300">
            <option>Marca</option>
          </select>
          <select class="h-8 w-40 md:w-44 px-2 py-1 text-gray-500 uppercase text-sm mt-3 mr-3 md:mt-0 bg-white border border-gray-300">
            <option>Categoria</option>
          </select>
          <select class="h-8 w-40 md:w-44 px-2 py-1 text-gray-500 uppercase text-sm mt-3 mr-3 md:mt-0 bg-white border border-gray-300">
            <option>Tamanho</option>
          </select>
          <select class="h-8 w-40 md:w-44 px-2 py-1 text-gray-500 uppercase text-sm mt-3 mr-3 md:mt-0 bg-white border border-gray-300">
            <option>Cor</option>
          </select>
          <button
            type="submit"
            class="border-white flex items-center h-8 border bg-black px-6 uppercase text-sm my-3 cursor-pointer py-2"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}
