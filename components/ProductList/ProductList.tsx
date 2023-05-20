import Header, {
  type Props as HeaderProps,
} from "$store/components/ProductList/Header.tsx";
import ProductShelf from "$store/components/ProductList/ProductShelf.tsx";
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
  products,
  seeAllButton,
}: Props) {
  return (
    <div className="p-6 w-full max-w-[1100px] mx-auto">
      <Header {...header} />
      <ProductShelf products={products} />
      {seeAllButton
        ? (
          <div className="flex justify-center mt-6">
            <a href={seeAllButton.href} target={seeAllButton.target}>
              <button className="py-1.5 rounded-none bg-transparent px-20 color-base-300 hover:underline transition duration-200 border border-base-300">
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
