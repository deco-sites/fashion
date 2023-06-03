import ProductListLoader from "deco-sites/std/packs/vtex/loaders/legacy/productList.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { SectionProps } from "$live/types.ts";
import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";

export interface Props {
  image?: {
    mobile: LiveImage;
    desktop?: LiveImage;
    altText: string;  
  }
  pins: Pin[];
  card?: card;
}

export interface card {
  title?: string;
  /** @format textarea */
  text?: string;
  buttonText?: string;  
  buttonHref?: string;  
}

export interface Pin {
  /** @description Numbers in %. Format: X,Y */
  positionMobile: string;
  /** @description Numbers in %. Format: X,Y */
  positionDesktop: string;
  productId: string;
}

export const loader = async (
  props: Props,
  req: Request,
  ctx: Context,
) => {
  const { pins } = props;

  const productIds = pins.map((pin) => pin.productId);

  const resProduct = await ProductListLoader(
    { ids: productIds },
    req,
    ctx,
  );

  const handleProductAndPins = pins.map((pin) => {
    const product = resProduct?.find((item) =>
      item.productID === pin.productId
    );

    return {
      pin,
      product: {
        name: product?.name,
        url: product?.url,
      },
    };
  });

  return { ...props, pins: handleProductAndPins };
};

export default function InteractiveBanner({
  card,
  image,
  pins,
}: SectionProps<typeof loader>) {
  return (
    <section class="container w-full px-4 md:px-0 mx-auto flex flex-col lg:flex-row gap-3 rounded">
      {card?.title &&
        (
          <div class="flex flex-col bg-secondary h-100 text-white p-4 w-100 lg:w-2/5 rounded">
            <h2 class="text-left text-lg leading-5 font-semibold uppercase mb-3">
              {card?.title}
            </h2>
            {card?.text && <p class="mb-3">{card?.text}</p>}
            {card?.buttonText && card?.buttonHref && <a href={card?.buttonHref} class="btn mt-auto">{card?.buttonText}</a>}
          </div>
        )}
      <div class="lg:h-[500px] lg:w-3/5 overflow-hidden">
        <Picture class="flex relative rounded">
          <Source
            media="(max-width: 767px)"
            src={image?.mobile}
            width={150}
            height={150}
          />
          <Source
            media="(min-width: 768px)"
            src={image?.desktop ? image?.desktop : image?.mobile}
            width={250}
            height={250}
          />
          <img
            class="w-full rounded bg-cover"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image?.mobile}
            alt={image?.altText}
            decoding="async"
            loading="lazy"
          />
          {pins.map((unitPin) => {
            const { pin, product } = unitPin;
            const m = pin.positionMobile.split(',')
            const d = pin.positionDesktop.split(',')

            return (
              <>
                <div
                  class="absolute cursor-pointer group/item w-5 h-5 bg-accent border-4 border-white rounded-full hover:w-auto hover:h-auto lg:hidden "
                  style={{
                    left: `${m[0]}%`,
                    top: `${m[1]}%`,
                  }}
                >
                  <a
                    href={product.url}
                    class="group/edit invisible group-hover/item:visible flex whitespace-nowrap text-base-100 text-caption rounded-full text-center w-full justify-center items-center min-h-[36px] hover:bg-secondary border border-base-100 py-2 px-3"
                  >
                    <span>{product?.name}</span>
                  </a>
                </div>
                <div
                  class="absolute cursor-pointer group/item w-5 h-5 bg-accent border-4 border-white rounded-full hover:w-auto hover:h-auto hidden lg:flex"
                  style={{
                    left: `${d[0]}%`,
                    top: `${d[1]}%`,
                  }}
                >
                  <a
                    href={product.url}
                    class="group/edit invisible group-hover/item:visible flex whitespace-nowrap text-base-100 text-caption rounded-full text-center w-full justify-center items-center min-h-[36px] hover:bg-secondary border border-base-100 py-2 px-3 "
                  >
                    {product?.name}
                  </a>
                </div>
              </>
            );
          })}
        </Picture>
      </div>
    </section>
  );
}