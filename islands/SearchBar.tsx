import { useEffect, useState } from "preact/hooks";
import type { JSX } from "preact";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const onSearch = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = `/search?ft=${query}`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get("q") ?? "");
  }, []);

  return (
    <form onSubmit={onSearch}>
      <label class="hidden" for="search">
        Busca
      </label>
      <input
        id="search"
        class="w-60 border rounded h-9"
        value={query}
        onKeyUp={(event) => {
          setQuery(event.currentTarget.value);
        }}
      />
      <button
        type="submit"
        class=" h-9 pointer-events-auto ml-8 rounded-md bg-gray-700 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-black"
      >
        Buscar
      </button>
    </form>
  );
}
