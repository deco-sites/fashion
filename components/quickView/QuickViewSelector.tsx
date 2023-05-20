import QuickViewAvatar from "./QuickViewAvatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  variant?: "ghost" | "default";
  shouldLink?: boolean;
}

function VariantSelector(
  { product, product: { url }, variant = "default", shouldLink = true }: Props,
) {
  const possibilities = useVariantPossibilities(product);

  const hasOnlyOneSize = Object.keys(possibilities).length === 0;
  return (
    <ul class="flex flex-col gap-4">
      {hasOnlyOneSize
        ? (
          <li class="flex flex-col gap-2">
            <span class="text-sm">Tamanho</span>
            <QuickViewAvatar
              content="TU"
              variant="active"
            />
          </li>
        )
        : (
          Object.keys(possibilities).map((name) => (
            <li class="flex flex-col gap-2" key={name}>
              <span class="text-sm">{name}</span>
              <ul class="flex flex-row gap-3">
                {Object.entries(possibilities[name]).map(([value, [link]]) => {
                  return (
                    <li key={value}>
                      {shouldLink
                        ? (
                          <a href={link}>
                            <QuickViewAvatar
                              content={value ?? "TU"}
                              variant={link === url ? "active" : variant}
                            />
                          </a>
                        )
                        : (
                          <QuickViewAvatar
                            content={value ?? "TU"}
                            variant={link === url ? "active" : variant}
                          />
                        )}
                    </li>
                  );
                })}
              </ul>
            </li>
          ))
        )}
    </ul>
  );
}

export default VariantSelector;
