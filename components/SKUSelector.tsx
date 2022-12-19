import type { Product } from "$live/std/commerce/types.ts";

interface Props {
  product: Product;
}

// Navigates the user the the choosen sku
const onChange = {
  onchange: "(function(e){ location.pathname = e.target.value; })(event)",
};

export default function SKUSelector(
  { product: { isVariantOf, url: currentUrl } }: Props,
) {
  const allProperties = (isVariantOf?.hasVariant ?? [])
    .flatMap(({ additionalProperty = [], url }) =>
      additionalProperty.map((property) => ({ property, url }))
    );

  const possibilities = allProperties.reduce((acc, { property, url }) => {
    const { name = "", value = "" } = property;

    if (!Array.isArray(acc[name])) {
      acc[name] = [];
    }

    if (url) {
      acc[name].push({ url, value });
    }

    return acc;
  }, {} as Record<string, { url: string; value: string }[]>);

  return (
    <div class="border border-gray-300 flex flex-row justify-between px-3 py-2 md:w-1/4">
      {Object.keys(possibilities).map((name) => (
        <>
          <label class="font-bold" for={name}>{name}</label>
          <select id={name} {...onChange}>
            {possibilities[name].map(({ value, url }) => {
              return (
                <option key={url} value={url} selected={url === currentUrl}>
                  {value}
                </option>
              );
            })}
          </select>
        </>
      ))}
    </div>
  );
}
