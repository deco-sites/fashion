/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */
import Icon from "../ui/Icon.tsx";

interface Props {
  placeholder?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

function Searchbar({
  placeholder = "What are you looking for?",
  query,
}: Props) {
  return (
    <form
      id="searchbar"
      action="/s"
      class="flex flex-row px-2 py-0 sm:p-2 text-sm text-left border rounded sm:min-w-[400px]"
    >
      <input
        class="flex-grow px-2 outline-none"
        id="search"
        name="q"
        defaultValue={query}
        placeholder={placeholder}
      />
      <button htmlFor="searchbar" type="submit" class="p-2 outline-none">
        <Icon id="MagnifyingGlass" className="w-6 h-6" />
      </button>
    </form>
  );
}

export default Searchbar;
