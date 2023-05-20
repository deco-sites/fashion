import Image from "deco-sites/std/components/Image.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import QuickView from "$store/components/quickView/QuickView.tsx";
import { priceFormatter } from "$store/sdk/formatPrice.ts";

export interface Props {
  product: Product;
}

function StarIcon({ fill = "none", stroke }: {
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke ?? fill}
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function ProductCard({
  product,
}: Props) {
  const [quickViewIsOpen, setQuickViewIsOpen] = useState(false);

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
      {
        /* We actually don't have the rating yet, so we'll just hardcode it for now.
      And we can't use tailwind colors, cause they don't work with svg. */
      }
      <div className="flex gap-1 ">
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="none" stroke="#FFC240" />
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
