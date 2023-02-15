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

export interface Props {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  query,
}: Props) {
  return (
    <form
      id="searchbar"
      action={action}
      class="flex flex-row px-2 py-0 sm:p-2 text-sm text-left border rounded sm:min-w-[400px]"
    >
      <input
        class="flex-grow px-2 outline-none"
        name={name}
        defaultValue={query}
        placeholder={placeholder}
      />
      <button
        aria-label="Search"
        htmlFor="searchbar"
        type="submit"
        class="p-2 outline-none"
      >
        <Icon id="MagnifyingGlass" className="w-6 h-6" />
      </button>
    </form>
  );
}

export default Searchbar;
