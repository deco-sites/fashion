import { Product } from "$live/std/commerce/types/Product.ts";
import Image from "$components/ui/Image.tsx";
import AddToCart from "../islands/AddToCart.tsx";
import Head from "./Head.tsx";
import ProductInformation from "../islands/ProductInformation.tsx";
import SKUSelector from "../islands/SKUSelector.tsx";
import ColorSelector from "../islands/ColorSelector.tsx";

export interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  if (!product) {
    return null;
  }

  const brand = product?.brand;

  return (
    <>
      <Head
        title={`${product.name} — ${brand} — OFF Premium`}
        faviconUrl="https://www.offpremium.com.br/favicon-32x32.png"
        description={product.description + `— OFF Premium`}
        url={new URL(`https://fashion.deco.page/${product.slug}/p`)}
      />
      <section class="w-full bg-gray-100 flex flex-col lg:flex-row">
        <div class="w-full lg:w-3/5 bg-gray-100 flex justify-center items-center">
          <Image
            class="object-cover col-span-4 lg:w-[600px] pb-5 w-full"
            sizes="(max-width: 640px) 75vw, 50vw"
            src={product.image.src}
            alt={product.image.alt}
            width={300}
            height={300}
          />
          {product.imageHover && (
            <Image
              class="object-cover col-span-4 lg:w-[600px] pb-5 w-full hidden md:block"
              sizes="(max-width: 640px) 75vw, 50vw"
              src={product.imageHover.src}
              alt={product.imageHover.alt}
              width={300}
              height={300}
            />
          )}
        </div>
        <div class="w-full lg:w-2/5 bg-white border border-solid border-gray-300 flex flex-col">
          <div class="flex flex-col px-10 mt-10">
            <div class="pb-2 flex justify-between">
              <div>
                {product.breadcrumb
                  .map((_, i) => ({
                    ..._,
                    isLast: i === product.breadcrumb.length - 1,
                  }))
                  .map(({ label, url, isLast }) => (
                    <>
                      <a
                        href={url}
                        class={`${
                          isLast ? "font-bold" : "text-gray-400"
                        } hover:underline`}
                      >
                        {label}
                      </a>
                      {!isLast && <span class="px-2 text-gray-400">|</span>}
                    </>
                  ))}
              </div>
              {/* <div>{"<3"}</div> */}
            </div>
            <h1 class="lg:text-2xl text-xl  uppercase text-gray-800">
              {product.name}
            </h1>
          </div>
          <div className="border-b border-solid border-gray-300 p-10 flex flex-row justify-between items-center">
            <div class="flex flex-col w-full">
              <div>
                <span class="line-through">
                  De:
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.listPrice)}
                </span>
              </div>
              <div>
                <span class="">Por:</span>
                <span class="text-primary-red">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </span>
              </div>
              <span className="text-gray-600">{product?.installments}</span>
              <div class="flex flex-row justify-between py-3 w-full">
                <SKUSelector
                  options={product.skuOptions}
                  current={product.specifications["Tamanho"]}
                />
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
              <ColorSelector product={product} />
            </div>
          </div>
          <div className="border-b border-solid border-gray-300 p-10 flex flex-row justify-between items-center">
            <AddToCart skuId={product.id} sellerId={product.sellerId} large />
          </div>
          {/* Avaliações + detalhes */}
          <div class="border-b border-solid border-gray-300 p-10 flex flex-col justify-center items-center">
            {
              /* <button class="flex flex-row justify-between bg-gray-100 py-3 px-8 rounded-3xl w-full">
              <span class="font-bold">{`Avaliações (25)`}</span>
              <img
                width="130"
                alt="image"
                src="https://user-images.githubusercontent.com/18706156/194561155-ea3abac9-0c42-4b4e-8920-890965ffad45.png"
              >
              </img>
            </button> */
            }
            {product?.description && (
              <ProductInformation description={product.description} />
            )}
            {
              /* <div className="bg-gray-100 py-10 flex flex-col justify-center items-center w-full mt-6">
              <span class="pb-8">Precisa de ajuda?</span>
              <button class="border border-solid border-black py-3 w-1/2 flex flex-row justify-center items-center">
                <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                Fale com a gente
              </button>
            </div> */
            }
          </div>
        </div>
      </section>
    </>
  );
}
