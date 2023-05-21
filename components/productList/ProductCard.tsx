import Image from "deco-sites/std/components/Image.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import QuickView from "$store/components/quickView/QuickView.tsx";
import { priceFormatter } from "$store/sdk/formatPrice.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  product: Product;
}

function ProductCard({
  product,
}: Props) {
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);

  if (!product) return null;

  const image = product.image ? product.image[0].url : "";

  const priceCurrency = product.offers?.priceCurrency || "pt-br";

  return (
    <div
      className="h-full w-full flex flex-col p-2 gap-4 cursor-pointer"
      onClick={() => setQuickViewIsOpen(true)}
    >
      <div className="w-full h-full">
        <Image
          className="w-full min-h-[128px] sm:min-w-[276px]"
          src={image || ""}
          alt={"image.alt"}
          width={800}
          loading="lazy"
          aspect-ratio="1:1"
        />
      </div>
      <div>
        <p className="text-sm text-info-content text-info-content">
          {product.brand}
        </p>
        <h4 className="text-lg text-base-500 truncate">
          {product.name}
        </h4>
        <p className="text-sm text-base-400 truncate">{product.description}</p>
      </div>
      <div>
        {product.offers?.highPrice
          ? (
            <p className="text-xs text-base-400 line-through">
              $ {product.offers?.highPrice}
            </p>
          )
          : null}
        <div className="text-sm text-light">
          <span className="text-xl text-accent mr-2">
            {priceFormatter(priceCurrency)
              .format(
                product?.offers?.lowPrice || 0,
              )}
          </span>ou 8x de {priceFormatter(priceCurrency)
            .format(
              (product?.offers?.lowPrice ?? 0) / 8,
            )}
        </div>
      </div>
      {/* We actually don't have the rating coming from API yet, so we'll just hardcode it for now. */}
      <div className="flex gap-1 text-custom-1">
        <Icon
          fill="currentColor"
          stroke="currentColor"
          id="Star"
          height={24}
          width={24}
          strokeWidth={0.01}
        />
        <Icon
          fill="currentColor"
          stroke="currentColor"
          id="Star"
          height={24}
          width={24}
          strokeWidth={0.01}
        />
        <Icon
          fill="currentColor"
          stroke="currentColor"
          id="Star"
          height={24}
          width={24}
          strokeWidth={0.01}
        />
        <Icon
          fill="currentColor"
          stroke="currentColor"
          id="Star"
          height={24}
          width={24}
          strokeWidth={0.01}
        />
        <Icon
          fill="none"
          stroke="currentColor"
          id="Star"
          height={24}
          width={24}
          strokeWidth={0.01}
        />
        <p className="text-base-400">(10)</p>
      </div>
      <QuickView
        onClose={() => setQuickViewIsOpen(false)}
        open={quickViewIsOpen}
        product={product}
        seeMoreButton={{
          href: product.url ?? "",
          label: "Ver mais",
          target: "_blank",
        }}
      />
    </div>
  );
}

export default ProductCard;
