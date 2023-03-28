import { useId } from "preact/hooks";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Dots from "$store/components/ui/Dots.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export type Variant = "front-back" | "slider";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
  variant: Variant;
}

const WIDTH = 360;
const HEIGHT = 500;

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
    <div class="">
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
          />
        )}
        <Button variant="secondary">
          <Icon id="Heart" width={20} height={20} strokeWidth={2} /> Favoritar
        </Button>
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
    </div>
  );
}

function Details({
  page,
  variant,
}: { page: ProductDetailsPage; variant: Variant }) {
  const id = `product-image-gallery:${useId()}`;
  const { product: { image = [] } } = page;
  const images = [...image, ...image, ...image];

  return (
    <>
      <Container class="py-0 sm:py-10">
        <div
          id={id}
          class="grid grid-cols-1 gap-4 sm:(grid-cols-[max-content_30vw_minmax(min-content,25vw)] grid-rows-1 justify-center gap-10)"
        >
          {/* Image Slider */}
          <div class="relative sm:(col-start-2 col-span-1 row-start-1)">
            <Slider class="gap-6">
              {images.map((img, index) => (
                <Image
                  style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
                  class={`scroll-snap-center min-w-[100vw] sm:(min-w-[30vw])`}
                  sizes="(max-width: 640px) 100vw, 30vw"
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
          </div>

          {/* Dots preview */}
          <Dots class="gap-2 sm:(flex-col justify-start col-start-1 col-span-1 row-start-1)">
            {images.map((img, _) => (
              <Image
                class="group-disabled:(border-interactive border) rounded w-[63px] w-[100px]"
                width={100}
                height={100}
                src={img.url!}
                alt={img.alternateName}
              />
            ))}
          </Dots>

          {/* Product Info */}
          <div class="px-4 sm:(px-0 col-start-3 col-span-1 row-start-1)">
            <ProductInfo page={page} />
          </div>
        </div>
      </Container>
      <SliderJS rootId={id}></SliderJS>
    </>
  );
}

function ProductDetails({ page, variant }: Props) {
  if (page) {
    return <Details page={page} variant={variant} />;
  }

  return <NotFound />;
}

export default ProductDetails;
