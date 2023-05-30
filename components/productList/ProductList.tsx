import Header, {
  type Props as HeaderProps,
} from "$store/components/productList/Header.tsx";
import ProductShelf from "$store/components/productList/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  header: HeaderProps;
  products: LoaderReturnType<Product[] | null>;
  seeAllButton: {
    href: string;
    target?: string;
    label: string;
  };
}

function ProductList({
  header,
  products = [],
  seeAllButton,
}: Props) {
  return (
    <div className="p-4 sm:p-10 w-full mx-auto">
      <Header {...header} />
      <ProductShelf products={products} />
      {seeAllButton
        ? (
          <div className="flex justify-center mt-6">
            <a href={seeAllButton.href} target={seeAllButton.target}>
              <button className="py-1.5 rounded-none bg-transparent px-20 color-secondary-focus hover:underline transition duration-200 border border-secondary-focus">
                {seeAllButton.label ?? "See all products"}
              </button>
            </a>
          </div>
        )
        : null}
    </div>
  );
}

export default ProductList;
