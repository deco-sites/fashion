import { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  newCategory: string;
}

const changeCategory =
  (category: string) => (_p: Product): Partial<Product> => ({
    category,
  });
export default function addProductPrice(
  product: Product | Product[] | null,
  { newCategory }: Props,
): Partial<Product> | Partial<Product>[] | null {
  if (product === null) {
    return product;
  }
  const withCategory = changeCategory(newCategory);
  if (Array.isArray(product)) {
    return product.map(withCategory);
  }
  return withCategory(product);
}
