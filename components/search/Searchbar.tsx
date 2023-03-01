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
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

// Editable props
export interface EditableProps {
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

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[];
};

const terms = [
  "Vestido",
  "Polo",
  "Saia",
];

function Searchbar({
  placeholder = "What are you looking for?",
  action = "/s",
  name = "q",
  query,
  products,
}: Props) {
  return (
    <div class="mt-6 sm:mt-10 overflow-y-auto">
      <form
        id="searchbar"
        action={action}
        class="flex gap-3 p-3 border border-default"
      >
        <Button
          variant="icon"
          aria-label="Search"
          htmlFor="searchbar"
        >
          <Icon
            class="text-icon-subdued"
            id="MagnifyingGlass"
            width={20}
            height={20}
            strokeWidth={0.01}
          />
        </Button>
        <input
          class="flex-grow outline-none"
          name={name}
          defaultValue={query}
          placeholder={placeholder}
        />
      </form>
      <div class="flex flex-col divide-y divide-default">
        <div class="flex flex-col gap-6 py-6">
          <Text variant="body-strong">Termos mais buscados</Text>
          <ul class="flex flex-col gap-6">
            {terms.map((term) => (
              <li>
                <a href={`/s?q=${term}`} class="flex gap-4 items-center">
                  <Text variant="body-regular">
                    <Icon
                      id="MagnifyingGlass"
                      width={20}
                      height={20}
                      strokeWidth={0.01}
                    />
                  </Text>
                  <Text variant="body-regular">
                    {term}
                  </Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {products && (
          <div class="flex flex-col gap-6 py-6">
            <Text variant="body-strong">Produtos sugeridos</Text>
            <Slider>
              {products.map((product) => (
                <div class="min-w-[200px] max-w-[200px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
