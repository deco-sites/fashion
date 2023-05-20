import Header, { type Props as HeaderProps } from "$store/components/ProductList/Header.tsx";
import ProductShelf from "$store/components/ProductList/ProductShelf.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  header: HeaderProps;
  products: LoaderReturnType<Product[] | null>;
};

function ProductList({
  header,
  products,
}: Props) {
  return (
    <div className="p-6 w-full max-w-[1280px] mx-auto">
      <Header {...header} />
      <ProductShelf products={products} />
    </div>
  );
}

export default ProductList;
