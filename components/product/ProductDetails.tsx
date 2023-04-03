import { useId } from "preact/hooks";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { Slider, SliderDots } from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import ViewSendEvent from "$store/islands/ViewSendEvent.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";

import ProductSelector from "./ProductVariantSelector.tsx";
import ProductImageZoom from "$store/islands/ProductImageZoom.tsx";

export type Variant = "front-back" | "slider" | "auto";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
  /**
   * @title Product view
   * @description Ask for the developer to remove this option since this is here to help development only and should not be used in production
   */
  variant?: Variant;
}

const WIDTH = 360;
const HEIGHT = 500;
const ASPECT_RATIO = `${WIDTH} / ${HEIGHT}`;

/**
 * Rendered when a not found is returned by any of the loaders run on this page
 */
function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function ProductInfo({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      {/* Code and name */}
      <div class="mt-4 sm:mt-8">
        <div>
          <Text tone="subdued" variant="caption">
            Cod. {gtin}
          </Text>
        </div>
        <h1>
          <Text variant="heading-3">{name}</Text>
        </h1>
      </div>
      {/* Prices */}
      <div class="mt-4">
        <div class="flex flex-row gap-2 items-center">
          <Text
            class="line-through"
            tone="subdued"
            variant="list-price"
          >
            {formatPrice(listPrice, offers!.priceCurrency!)}
          </Text>
          <Text tone="price" variant="heading-3">
            {formatPrice(price, offers!.priceCurrency!)}
          </Text>
        </div>
        <Text tone="subdued" variant="caption">
          {installments}
        </Text>
      </div>
      {/* Sku Selector */}
      <div class="mt-4 sm:mt-6">
        <ProductSelector product={product} />
      </div>
      {/* Add to Cart and Favorites button */}
      <div class="mt-4 sm:mt-10 flex flex-col gap-2">
        {seller && (
          <AddToCartButton
            skuId={productID}
            sellerId={seller}
            price={price ?? 0}
            discount={price && listPrice ? listPrice - price : 0}
            name={product.name ?? ""}
            productGroupId={product.isVariantOf?.productGroupID ?? ""}
          />
        )}
        <Button variant="secondary">
          <Icon id="Heart" width={20} height={20} strokeWidth={2} /> Favoritar
        </Button>
      </div>
      {/* Shipping Simulation */}
      <div class="mt-8">
        <ShippingSimulation
          items={[{
            id: Number(product.sku),
            quantity: 1,
            seller: seller ?? "1",
          }]}
        />
      </div>
      {/* Description card */}
      <div class="mt-4 sm:mt-6">
        <Text variant="caption">
          {description && (
            <details>
              <summary class="cursor-pointer">Descrição</summary>
              <div class="ml-2 mt-2">{description}</div>
            </details>
          )}
        </Text>
      </div>
      <ViewSendEvent
        event={{
          name: "view_item",
          params: {
            items: [
              mapProductToAnalyticsItem({
                product,
                breadcrumbList,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
    </>
  );
}

function Details({
  page,
  variant,
}: { page: ProductDetailsPage; variant: Variant }) {
  const id = `product-image-gallery:${useId()}`;
  const { product: { image: images = [] } } = page;

  /**
   * Product slider variant
   *
   * Creates a three columned grid on destkop, one for the dots preview, one for the image slider and the other for product info
   * On mobile, there's one single column with 3 rows. Note that the orders are different from desktop to mobile, that's why
   * we rearrange each cell with col-start- directives
   */
  if (variant === "slider") {
    return (
      <>
        <div
          id={id}
          class={`grid grid-cols-1 gap-4 sm:(grid-cols-[max-content_40vw_40vw] grid-rows-1 justify-center max-h-[calc(${
            (HEIGHT / WIDTH).toFixed(2)
          }*40vw)])`}
        >
          {/* Image Slider */}
          <div class="relative sm:(col-start-2 col-span-1 row-start-1)">
            <Slider class="gap-6">
              {images.map((img, index) => (
                <Image
                  class={`scroll-snap-center min-w-[100vw] sm:(min-w-[40vw])`}
                  sizes="(max-width: 640px) 100vw, 40vw"
                  style={{ aspectRatio: ASPECT_RATIO }}
                  src={img.url!}
                  alt={img.alternateName}
                  width={WIDTH}
                  height={HEIGHT}
                  // Preload LCP image for better web vitals
                  preload={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </Slider>

            <div class="absolute left-2 top-1/2  bg-interactive-inverse rounded-full border-default border">
              <Button variant="icon" data-slide="prev" aria-label="Previous">
                <Icon size={20} id="ChevronLeft" strokeWidth={3} />
              </Button>
            </div>
            <div class="absolute right-2 top-1/2 bg-interactive-inverse rounded-full border-default border">
              <Button variant="icon" data-slide="next" aria-label="Next">
                <Icon size={20} id="ChevronRight" strokeWidth={3} />
              </Button>
            </div>

            <div class="absolute top-2 right-2 bg-interactive-inverse rounded-full">
              <ProductImageZoom
                images={images}
                width={1280}
                height={1280 * HEIGHT / WIDTH}
              />
            </div>
          </div>

          {/* Dots */}
          <SliderDots class="gap-2 override:(justify-start) overflow-auto px-4 sm:(px-0 flex-col col-start-1 col-span-1 row-start-1)">
            {images.map((img, _) => (
              <Image
                style={{ aspectRatio: ASPECT_RATIO }}
                class="group-disabled:(border-interactive) border rounded min-w-[63px] sm:min-w-[100px]"
                width={63}
                height={87.5}
                src={img.url!}
                alt={img.alternateName}
              />
            ))}
          </SliderDots>

          {/* Product Info */}
          <div class="px-4 sm:(pr-0 pl-6 col-start-3 col-span-1 row-start-1)">
            <ProductInfo page={page} />
          </div>
        </div>
        <SliderJS rootId={id}></SliderJS>
      </>
    );
  }

  /**
   * Product front-back variant.
   *
   * Renders two images side by side both on mobile and on desktop. On mobile, the overflow is
   * reached causing a scrollbar to be rendered.
   */
  return (
    <div class="grid grid-cols-1 gap-4 sm:(grid-cols-[50vw_25vw] grid-rows-1 justify-center)">
      {/* Image slider */}
      <Slider class="gap-6">
        {[images[0], images[1] ?? images[0]].map((img, index) => (
          <Image
            class={`scroll-snap-center min-w-[100vw] sm:(min-w-[24vw])`}
            sizes="(max-width: 640px) 100vw, 24vw"
            style={{ aspectRatio: ASPECT_RATIO }}
            src={img.url!}
            alt={img.alternateName}
            width={WIDTH}
            height={HEIGHT}
            // Preload LCP image for better web vitals
            preload={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </Slider>

      {/* Product Info */}
      <div class="px-4 sm:(pr-0 pl-6)">
        <ProductInfo page={page} />
      </div>
    </div>
  );
}

function ProductDetails({ page, variant: maybeVar = "auto" }: Props) {
  /**
   * Showcase the different product views we have on this template. In case there are less
   * than two images, render a front-back, otherwhise render a slider
   * Remove one of them and go with the best suited for your use case.
   */
  const variant = maybeVar === "auto"
    ? page?.product.image?.length && page?.product.image?.length < 2
      ? "front-back"
      : "slider"
    : maybeVar;

  return (
    <Container class="py-0 sm:py-10">
      {page ? <Details page={page} variant={variant} /> : <NotFound />}
    </Container>
  );
}

export default ProductDetails;
