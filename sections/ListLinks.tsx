export default function ListLinks() {
  return (
    <ul
      class="flex flex-col items-start w-full justify-between p-4 w-full border-b border-gray-300 text-lg lg:text-base lg:flex-row lg:space-x-8 lg:p-0 lg:pt-5 lg:items-center lg:border-t lg:border-b-0 border-t-0"
      role="menubar"
      aria-label="Lista de categorias"
    >
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Frutas
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Verduras
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Legumes
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Grãos
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Mercearia
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Bebidas
        </a>
      </li>
      <li class="pb-2.5 lg:pb-0" role="none">
        <a
          role="menuitem"
          class="no-underline hover:text-gray-500 hover:cursor-pointer"
        >
          Padaria
        </a>
      </li>
    </ul>
  );
}
