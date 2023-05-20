import Avatar from "$store/components/ui/Avatar.tsx";
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

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <span class="text-sm">{name}</span>
          <ul class="flex flex-row gap-3">
            {Object.entries(possibilities[name]).map(([value, [link]]) => (
              <li>
                {shouldLink
                  ? (
                    <a href={link}>
                      <Avatar
                        content={value}
                        variant={link === url ? "active" : variant}
                      />
                    </a>
                  )
                  : (
                    <Avatar
                      content={value}
                      variant={link === url ? "active" : variant}
                    />
                  )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
