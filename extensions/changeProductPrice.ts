import { Product } from "deco-sites/std/commerce/types.ts";
import { ExtensionOf } from "../../live/blocks/extension.ts";

export interface Props {
  newPrice: number;
}

export default function addProductPrice(
  { newPrice }: Props,
): ExtensionOf<Product> {
  return {
    offers: {
      offers: {
        _forEach: {
          price: (_, current) => current + newPrice,
        },
      },
    },
  };
}
