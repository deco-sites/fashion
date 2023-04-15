import { Product } from "deco-sites/std/commerce/types.ts";
import { ExtensionOf } from "../../live/blocks/extension.ts";

export interface Props {
  newCategory: string;
}

export default function addProductPrice(
  { newCategory }: Props,
): ExtensionOf<Product> {
  return {
    category: (_, cat) => (cat ?? "nao tem") + newCategory,
  };
}
