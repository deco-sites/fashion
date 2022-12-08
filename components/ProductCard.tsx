import { Product } from "$live/std/commerce/types.ts";
import AddToCart from "../islands/AddToCart.tsx";
import Image from "$live/std/ui/components/Image.tsx";
import {
  bestInstallment,
  installmentToString,
} from "../sections/ProductDetails.tsx";

interface Image {
  src: string;
  alt?: string;
  label?: string;
}

export default function ProductCard({
  url,
  productID,
  name,
  image,
  brand,
  offers,
  additionalProperty,
}: Product) {
  const img = image?.[0];
  const offer = offers?.offers[0];
  const seller = offer?.seller;
  const listPrice = offer?.priceSpecification.find((spec) =>
    spec.priceType === "https://schema.org/ListPrice"
  );
  const price = offer?.price;
  const discountPercentage = listPrice && price && Math.trunc(
    Math.max(1 - price / listPrice.price, 0) * 100,
  );
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full p-2 group relative border border-white hover:border-black"
    >
      <div class="h-full z-10">
        <a href={url}>
          {img && img.url && (
            <Image
              class="w-full max-w-full h-auto"
              src={img.url}
              alt={img.alternateName}
              width={326}
              height={489}
              sizes="(max-width: 640px) 40vw, 20vw"
              loading="lazy"
              decoding="async"
            />
          )}
          <div class="mt-3">
            <div class="flex justify-between text-xs uppercase">
              <span class="text-[#737378] ">{brand}</span>
              {discountPercentage && (
                <span class="text-white bg-black px-2">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
            {name && (
              <span
                class="block text-base overflow-hidden whitespace-nowrap uppercase"
                style={{ textOverflow: "ellipsis" }}
                href={url}
              >
                {name.replace(/(.*)(\-).*$/, "$1$2")}
              </span>
            )}
            <div class="text-xs flex justify-between md:justify-start gap-2">
              {listPrice && (
                <span class="line-through">
                  R$ {listPrice.price.toFixed(2)}
                </span>
              )}
              {price && (
                <span class="text-[#D10923] ">
                  R$ {typeof price === "number" ? price.toFixed(2) : price}
                </span>
              )}
            </div>
            {installment && price && (
              <div class="text-xs text-[#737378] font-bold">
                ou {installmentToString(installment, price)}
              </div>
            )}
          </div>
        </a>
        <div class="absolute group-hover:md:block group-hover:md:border border-black bottom-0 left-[-1px] right-[-1px] z-10 opacity-0 group-hover:md:opacity-100 bg-white group-hover:md:translate-y-full transition ease-in duration-300">
          {additionalProperty?.[0] && (
            <div class="text-xs font-semibold mt-2">
              <div class="border-y border-[#000] py-2 px-1 flex flex-row justify-between">
                <span>Tamanho</span>
                <span class="font-bold">{additionalProperty[0].value}</span>
              </div>
            </div>
          )}
          {seller && (
            <div class="m-2">
              <AddToCart
                class="bg-[#D10923] w-full text-white text-xs uppercase py-2 cursor-pointer"
                skuId={productID}
                sellerId={seller}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
