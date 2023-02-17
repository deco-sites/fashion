import { ProductDetailsPage } from "$live/std/commerce/types.ts";
import { LoaderReturnType } from "$live/std/types.ts";
import { Head } from "$fresh/runtime.ts";
import Image from "$live/std/ui/components/Image.tsx";
import SKUSelector from "$store/components/product/SKUSelector.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import ScriptLDJson from "$store/components/seo/ScriptLDJson.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function ProductDetails({ page }: Props) {
  if (!page) {
    return null;
  }

  const {
    breadcrumbList: { numberOfItems, itemListElement },
    product: {
      description,
      isVariantOf,
      productID,
      offers,
      image,
      name,
    },
  } = page;
  const { price, listPrice, seller, installments } = useOffer(offers);

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
              {installments && (
                <span className="text-gray-600">
                  {installments}
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
              <AddToCartButton skuId={productID} sellerId={seller} large />
            </div>
          )}
          {description && (
            <div class="border-b border-solid border-gray-300 p-10 flex flex-col justify-center items-center">
              <div className="w-full border-b border-t border-solid border-black mt-8">
                <div class="border-b border-gray-200">
                  <details class="w-full p-4 px-2 cursor-pointer flex flex-row justify-between">
                    <summary>
                      <span class="font-bold">Descrição</span>
                    </summary>
                    <p class="p-4 pt-4 pb-2 text-sm text-gray-500">
                      {description}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
