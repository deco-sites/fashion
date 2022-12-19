import {
  ProductDetailsPage,
  UnitPriceSpecification,
} from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";
import { Head } from "$fresh/runtime.ts";
import Image from "$live/std/ui/components/Image.tsx";
import SKUSelector from "$components/SKUSelector.tsx";

import AddToCart from "../islands/AddToCart.tsx";

import ProductInformation from "../islands/ProductInformation.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ScriptLDJson<T extends Record<string, unknown>>(props: T) {
  const innerHtml = JSON.stringify({
    "@context": "https://schema.org",
    ...props,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: innerHtml,
      }}
    />
  );
}

export const bestInstallment = (
  acc: UnitPriceSpecification | null,
  curr: UnitPriceSpecification,
) => {
  if (curr.priceComponentType !== "https://schema.org/Installment") {
    return acc;
  }

  if (!acc) {
    return curr;
  }

  if (acc.price > curr.price) {
    return curr;
  }

  if (acc.price < curr.price) {
    return acc;
  }

  if (
    acc.billingDuration && curr.billingDuration &&
    acc.billingDuration < curr.billingDuration
  ) {
    return curr;
  }

  return acc;
};

export const installmentToString = (
  installment: UnitPriceSpecification,
  sellingPrice: number,
) => {
  const { billingDuration, billingIncrement, price } = installment;

  if (!billingDuration || !billingIncrement) {
    return "";
  }

  const withTaxes = sellingPrice < price;

  return `${billingDuration} de R$ ${billingIncrement} ${
    withTaxes ? "com juros" : "s/ juros"
  }`;
};

export default function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    product: {
      image,
      name,
      productID,
      offers: aggregateOffer,
      description,
      isVariantOf,
    },
    breadcrumbList: { numberOfItems, itemListElement },
  } = page;
  const offer = aggregateOffer?.offers[0];
  const listPrice = offer?.priceSpecification.find((spec) =>
    spec.priceType === "https://schema.org/ListPrice"
  );
  const installment = offer?.priceSpecification.reduce(bestInstallment, null);
  const seller = offer?.seller;
  const price = offer?.price;

  return (
    <>
      <Head>
        <ScriptLDJson {...page.product} />
        <ScriptLDJson {...page.breadcrumbList} />
      </Head>
      <section class="w-full bg-gray-100 flex flex-col lg:flex-row">
        <div class="w-full lg:w-3/5 bg-gray-100 flex justify-center items-center">
          {image && (
            <Image
              class="object-contain col-span-4 lg:w-[600px] w-full h-full"
              sizes="(max-width: 640px) 100vw, 25vw"
              src={image[0].url!}
              alt={image[0].alternateName!}
              width={360}
              height={540}
            />
          )}
          {image && image.length > 1 && (
            <Image
              class="object-contain col-span-4 lg:w-[600px] w-full h-full hidden md:block"
              sizes="(max-width: 640px) 100vw, 25vw"
              src={image[1].url!}
              alt={image[1].alternateName!}
              width={360}
              height={540}
            />
          )}
        </div>
        <div class="w-full lg:w-2/5 bg-white border border-solid border-gray-300 flex flex-col">
          <div class="flex flex-col px-10 mt-10">
            <div class="pb-2 flex justify-between">
              <div>
                {itemListElement.map(({ item, position, name }) => (
                  <>
                    <a
                      href={item}
                      class={`${
                        position === numberOfItems
                          ? "font-bold"
                          : "text-gray-400"
                      } hover:underline`}
                    >
                      {name}
                    </a>
                    {position !== numberOfItems && (
                      <span class="px-2 text-gray-400">|</span>
                    )}
                  </>
                ))}
              </div>
            </div>
            <h1 class="lg:text-2xl text-xl  uppercase text-gray-800">
              {name?.includes(isVariantOf?.name ?? "")
                ? name
                : `${isVariantOf?.name ?? ""} - ${name}`}
            </h1>
          </div>
          <div className="border-b border-solid border-gray-300 p-10 flex flex-row justify-between items-center">
            <div class="flex flex-col w-full">
              {listPrice && (
                <div>
                  <span class="line-through">
                    De:
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(listPrice.price)}
                  </span>
                </div>
              )}
              {price && (
                <div>
                  <span class="">Por:</span>
                  <span class="text-primary-red">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(price)}
                  </span>
                </div>
              )}
              {installment && price && (
                <span className="text-gray-600">
                  {installmentToString(installment, price)}
                </span>
              )}
              <div class="flex flex-row justify-between py-3 w-full">
                <SKUSelector product={page.product} />
                <div class="border border-gray-300 flex flex-row justify-between items-center px-3 py-1 md:w-1/4">
                  <span class="font-bold">Qtd</span>
                  <div class="flex flex-row items-center">
                    <button class="px-1 rounded-1/2 w-8 h-8">-</button>
                    <span class="px-2">1</span>
                    <button class="px-1 hover:bg-gray-300 rounded-1/2 w-8 h-8">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {seller && (
            <div className="border-b border-solid border-gray-300 p-10 flex flex-row justify-between items-center">
              <AddToCart skuId={productID} sellerId={seller} large />
            </div>
          )}
          {description && (
            <div class="border-b border-solid border-gray-300 p-10 flex flex-col justify-center items-center">
              <ProductInformation description={description} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
