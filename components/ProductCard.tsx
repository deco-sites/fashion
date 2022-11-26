import { Product } from "$live/std/commerce/types/Product.ts";
import AddToCart from "../islands/AddToCart.tsx";
import Image from "$live/std/ui/components/Image.tsx";

interface Image {
  src: string;
  alt?: string;
  label?: string;
}

// TODO: Schema.org
// TODO: Split between product/sku

export default function ProductCard({
  name,
  price,
  installments,
  image,
  imageHover,
  slug,
  brand,
  // nome_produto,
  listPrice,
  id,
  sellerId,
  specifications,
}: Product) {
  const discountPercentage = Math.trunc(
    Math.max(1 - price / listPrice, 0) * 100,
  );

  return (
    <div
      id={`product-card-${id}`}
      class="w-full p-2 group relative border border-white hover:border-black"
    >
      {/* <div class="absolute inset-0 before:p-2 hidden group-hover:block group-hover:border border-[#000]" /> */}

      <div class="h-full z-10">
        <a href={slug}>
          <Image
            class="w-full max-w-full h-auto"
            src={image.src}
            alt={image.alt}
            height={231}
            width={154}
            sizes="(max-width: 640px) 25vw, 25vw"
            loading="lazy"
          />
          <div class="mt-3">
            <div class="flex justify-between text-xs uppercase">
              <span class="text-[#737378] ">{brand}</span>
              <span class="text-white bg-black px-2">
                {discountPercentage}% OFF
              </span>
            </div>
            <span
              class="block text-base overflow-hidden whitespace-nowrap uppercase"
              style={{ textOverflow: "ellipsis" }}
              href={slug}
            >
              {name.replace(/(.*)(\-).*$/, "$1$2")}
            </span>
            <div class="text-xs flex justify-between md:justify-start gap-2">
              <span class="line-through">R$ {listPrice.toFixed(2)}</span>
              <span class="text-[#D10923] ">
                R$ {typeof price === "number" ? price.toFixed(2) : price}
              </span>
            </div>
            <div class="text-xs text-[#737378] font-bold">
              ou {installments}
            </div>
          </div>
        </a>
        <div class="absolute group-hover:md:block group-hover:md:border border-black bottom-0 left-[-1px] right-[-1px] z-10 opacity-0 group-hover:md:opacity-100 bg-white group-hover:md:translate-y-full transition ease-in duration-300">
          <div class="text-xs font-semibold mt-2">
            <div class="border-y border-[#000] py-2 px-1 flex flex-row justify-between">
              <span>Tamanho</span>
              <span class="font-bold">{specifications["Tamanho"]}</span>
            </div>
          </div>
          <div class="m-2">
            <AddToCart
              class="bg-[#D10923] w-full text-white text-xs uppercase py-2 cursor-pointer"
              skuId={id}
              sellerId={sellerId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
