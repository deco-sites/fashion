import Image from "deco-sites/std/components/Image.tsx";
import Avatar from "deco-sites/fashion/components/ui/Avatar.tsx";
import WishlistIcon from "deco-sites/fashion/islands/WishlistButton.tsx";
import { useOffer } from "deco-sites/fashion/sdk/useOffer.ts";
import { formatPrice } from "deco-sites/fashion/sdk/format.ts";
import { useVariantPossibilities } from "deco-sites/fashion/sdk/useVariantPossiblities.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { sendEventOnClick } from "deco-sites/fashion/sdk/analytics.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;
}

const relative = (url: string) => {
  const link = new URL(url);
  return `${link.pathname}${link.search}`;
};

function ProductCard({ product, preload, itemListName }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
  } = product;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price } = useOffer(offers);
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );
  const clickEvent = {
    name: "select_item" as const,
    params: {
      item_list_name: itemListName,
      items: [
        mapProductToAnalyticsItem({
          product,
          price,
          listPrice,
        }),
      ],
    },
  };

  return (
    <div
      class="card card-compact card-bordered border-transparent hover:border-base-200 group w-full"
      data-deco="view-product"
      id={`product-card-${productID}`}
      {...sendEventOnClick(clickEvent)}
    >
      <figure class="relative">
        <div class="absolute top-0 right-0">
          <WishlistIcon productGroupID={productGroupID} productID={productID} />
        </div>
        <a
          href={url && relative(url)}
          aria-label="view product"
          class="contents"
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </a>
        <figcaption class="glass card-body card-actions absolute bottom-0 left-0 w-full invisible group-hover:visible">
          <ul class="flex justify-center items-center gap-2 w-full">
            {options.map(([value, [link]]) => (
              <a href={link}>
                <Avatar
                  variant={link === url ? "active" : "default"}
                  content={value}
                />
              </a>
            ))}
          </ul>
        </figcaption>
      </figure>
      <div class="card-body">
        <h2 class="card-title whitespace-nowrap overflow-hidden">{name}</h2>
        <div class="flex items-end gap-2">
          <span class="line-through text-base-300 text-xs">
            {formatPrice(listPrice, offers!.priceCurrency!)}
          </span>
          <span class="text-secondary">
            {formatPrice(price, offers!.priceCurrency!)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
