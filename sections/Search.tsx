import Icon from "../components/ui/Icon.tsx";

export interface Props {
  query?: string;
}

export default function Search({ query }: Props) {
  return (
    <div class="flex flex-row">
      <form action="/search" class="w-full lg:w-96">
        <label class="hidden" for="search">
          Busca
        </label>
        <input
          id="search"
          class="border rounded bg-gray-50 p-2 text-sm text-left shadow-sm w-full"
          name="q"
          defaultValue={query}
          placeholder="O que você procura?"
        />
      </form>
      <button type="submit" class="p-2">
        <Icon id="Search" width={25} height={25} />
      </button>
    </div>
  );
}
