import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type {
  ImageObject,
  ProductDetailsPage,
} from "deco-sites/std/commerce/types.ts";

import ProductImages from "$store/islands/ProductImages.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);

  /**
   * I did not really liked the images from our default base store.
   * To overcome this issue without generating another catalog altogether
   * I decided to get images from unsplash. However, you should get the images
   * front the catalog itself. To do this, just uncomment the code below
   */
  // const allImages: ImageObject[] = images ?? [];
  const allImages: ImageObject[] = [{
    "@type": "ImageObject",
    url: `https://source.unsplash.com/user/nikutm?v=${productID}`,
    alternateName: "nikutm-front",
  }, {
    "@type": "ImageObject",
    url: `https://source.unsplash.com/user/nikutm?v=${productID}-2`,
    alternateName: "nikutm-back",
  }];

  return (
    <Container class="py-0 sm:py-10">
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row overflow-auto scroll-x-mandatory scroll-smooth sm:gap-2">
          <ProductImages
            width={572}
            height={572}
            thumbWidth={46}
            thumbHeight={46}
            image={allImages}
          />
        </div>
        {/* Product Info */}
        <div class="px-4 sm:px-0">
          {/* Breadcrumb */}
          <Breadcrumb breadcrumbList={breadcrumbList} />
          {/* Code and name */}
          <div class="mt-4 sm:mt-8">
            <div>
              <Text tone="subdued" variant="subcaption-regular">
                Cod. {gtin}
              </Text>
            </div>
            <h1>
              <Text variant="heading-regular">{name}</Text>
            </h1>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              <Text
                class="line-through"
                tone="subdued"
                variant="subcaption-regular"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
              <Text tone="critical" variant="heading-strong">
                {formatPrice(price, offers!.priceCurrency!)}
              </Text>
            </div>
            <Text tone="subdued" variant="caption-regular">
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
            <Button variant="quiet">
              <Icon id="Heart" width={20} height={20} strokeWidth={2} />{" "}
              Favoritar
            </Button>
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption-regular">
              {description && (
                <details>
                  <summary class="cursor-pointer">Descrição</summary>
                  <div class="ml-2 mt-2">{description}</div>
                </details>
              )}
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
