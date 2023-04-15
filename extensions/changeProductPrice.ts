import { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  newPrice: number;
}

const addPrice = (price: number) => (p: Product): Partial<Product> => ({
  offers: p?.offers ? { ...p.offers, lowPrice: price } : undefined,
});
export default function addProductPrice(
  product: Product | Product[] | null,
  { newPrice }: Props,
): Partial<Product> | Partial<Product>[] | null {
  if (product === null) {
    return product;
  }
  const withPrice = addPrice(newPrice);
  if (Array.isArray(product)) {
    return product.map(withPrice);
  }
  return withPrice(product);
}
