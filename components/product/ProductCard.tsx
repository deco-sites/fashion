import { Product } from "$live/std/commerce/types.ts";
import Image from "$live/std/ui/components/Image.tsx";
import { useOffer } from "../../sdk/useOffer.ts";

function ProductCard({
  url,
  productID,
  name,
  image: images,
  offers,
}: Product) {
  const [image] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full p-2 border border-transparent rounded hover:border-gray-400"
    >
      <a href={url}>
        {image?.url && (
          <Image
            src={image.url}
            alt={image.alternateName}
            width={202}
            height={303}
            loading="lazy"
            decoding="async"
            class="w-full"
          />
        )}
        <div class="mt-3">
          {name && (
            <div
              class="block text-sm overflow-hidden whitespace-nowrap uppercase mb-3"
              style={{ textOverflow: "ellipsis" }}
              href={url}
            >
              {name.replace(/(.*)(\-).*$/, "$1$2")}
            </div>
          )}
          <div class="text-xs flex justify-start gap-2 mb-1">
            {listPrice && (
              <span class="text-gray-500 line-through">
                R$ {listPrice.price.toFixed(2)}
              </span>
            )}
            {price && (
              <span class="font-bold">
                R$ {typeof price === "number" ? price.toFixed(2) : price}
              </span>
            )}
          </div>
          {installments && (
            <div class="text-xs font-bold text-gray-500">
              ou {installments}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
