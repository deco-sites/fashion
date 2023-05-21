import ProductListLoader from "deco-sites/std/packs/vtex/loaders/legacy/productList.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { SectionProps } from "$live/types.ts";
import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";
import type { ImageObject } from "deco-sites/std/commerce/types.ts";

export interface Props {
  /**
   * @description Title of the banner.
   */
  title?: string;
  /**
   * @description List of pins.
   */
  pins: Pins[];
  /**
   * @description Image at mobile.
   */
  srcMobile: LiveImage;
  /**
   * @description Image at desktop.
   */
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text.
   */
  alt: string;
}

export interface Pins {
  positionDesktop: Position;
  positionMobile: Position;
  /**
   * @description Product of the pin
   */
  productId: string;
}

export interface Position {
  /**
   * @description Horizontal position of the pin
   */
  x: number;
  /**
   * @description Vertical position of the pin
   */
  y: number;
}

export const loader = async (props: Props, req: Request, ctx: Context) => {
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

    console.log(
      "🚀 ~ file: InteractiveBanner.tsx:67 ~ handleProductAndPins ~ product:",
      product,
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
  title,
  srcMobile,
  srcDesktop,
  alt,
  pins,
}: SectionProps<typeof loader>) {
  return (
    <section class="container w-full px-4 md:px-0 mx-auto">
      {title &&
        (
          <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
            <h2 class="text-lg leading-5 font-semibold uppercase">
              {title}
            </h2>
          </div>
        )}
      <Picture class="flex relative w">
        <Source
          media="(max-width: 767px)"
          src={srcMobile}
          width={100}
          height={100}
        />
        <Source
          media="(min-width: 768px)"
          src={srcDesktop ? srcDesktop : srcMobile}
          width={250}
          height={250}
        />
        <img
          class="w-full"
          sizes="(max-width: 640px) 100vw, 30vw"
          src={srcMobile}
          alt={alt}
          decoding="async"
          loading="lazy"
        />
        {pins.map((unitPin) => {
          const { pin, product } = unitPin;

          return (
            <>
              <div
                class="absolute cursor-pointer group/item w-5 h-5 bg-white rounded-full hover:w-auto hover:h-auto lg:hidden"
                style={{
                  bottom: `${pin?.positionMobile?.y}%`,
                  left: `${pin?.positionMobile?.x}%`,
                }}
              >
                <a
                  href={product.url}
                  class="group/edit invisible group-hover/item:visible flex whitespace-nowrap text-base-100 text-caption rounded-3xl text-center w-full justify-center items-center min-h-[36px] hover:bg-base-100 hover:text-base-content border border-base-100 p-2"
                >
                  <span>{product?.name}</span>
                </a>
              </div>
              <div
                class="absolute cursor-pointer group/item w-5 h-5 bg-white rounded-full hover:w-auto hover:h-auto hidden lg:flex"
                style={{
                  bottom: `${pin?.positionDesktop?.y}%`,
                  left: `${pin?.positionDesktop?.x}%`,
                }}
              >
                <a
                  href={product.url}
                  class="group/edit invisible group-hover/item:visible flex whitespace-nowrap text-base-100 text-caption rounded-3xl text-center w-full justify-center items-center min-h-[36px] hover:bg-base-100 hover:text-base-content border border-base-100 p-2 "
                >
                  {product?.name}
                </a>
              </div>
            </>
          );
        })}
      </Picture>
    </section>
  );
}
