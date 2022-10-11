import { TruckIcon, ChatBubbleLeftIcon } from "heroicons";
import { Product } from "../components/ProductCard.tsx";
import Image from "./ui/Image.tsx";
import AddToCart from "../islands/AddToCart.tsx";
import Head from "./Head.tsx";
import ProductInformation from "../islands/ProductInformation.tsx";

type LoaderData = { loaderData: Product };

export default function ProductDetails({ loaderData: product }: LoaderData) {
  return (
    <>
      <Head
        title={`${product.name} - Zee.Dog`}
        faviconUrl="https://www.zeedog.com.br/arquivos/favicon.png?v=635804457195470000"
        description={product.description}
        url={new URL(`https://www.zeedog.com.br/${product.slug}`)}
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
        </div>
        <div class="w-full lg:w-2/5 bg-white border border-solid border-gray-300 flex flex-col">
          <div class="flex flex-col p-10">
            <div class="pb-6 flex justify-between">
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
              <div>{"<3"}</div>
            </div>
            <h1 class="lg:text-2xl text-xl mb-2 font-semibold text-gray-800">
              {product.name}
            </h1>
            <div>SKU Selector</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="flex flex-row items-center">
              <TruckIcon className="w-6 h-6 mr-3" />
              <span>Adicione e garanta frete grátis</span>
            </div>
            <div class="flex flex-row w-full mt-2">
              <div class="bg-blue-500 w-3/4 h-1"></div>
            </div>
          </div>
          {/* Quantity Selector */}
          <div class="border-y border-solid border-gray-300 py-6 px-10 flex flex-row justify-between items-center">
            <span>Quantidade:</span>
            <div class="flex flex-row items-center">
              <button class="px-3 bg-gray-200 hover:bg-gray-300 rounded-1/2 w-8 h-8">
                -
              </button>
              <span class="px-5">1</span>
              <button class="px-3 bg-gray-200 hover:bg-gray-300 rounded-1/2 w-8 h-8">
                +
              </button>
            </div>
          </div>
          {/* Price + Add To Cart */}
          <div className="border-b border-solid border-gray-300 p-10 flex flex-row justify-between items-center">
            <div class="flex flex-col">
              <span class="font-bold">{`R$ 199,00`}</span>
              <span className="text-gray-600">{`(até 3x de R$ 66,33 s/ juros)`}</span>
            </div>
            <AddToCart skuId={product.id} sellerId={product.sellerId} />
          </div>
          {/* Avaliações + detalhes */}
          <div class="border-b border-solid border-gray-300 p-10 flex flex-col justify-center items-center">
            <button class="flex flex-row justify-between bg-gray-100 py-3 px-8 rounded-3xl w-full">
              <span class="font-bold">{`Avaliações (25)`}</span>
              <img
                width="130"
                alt="image"
                src="https://user-images.githubusercontent.com/18706156/194561155-ea3abac9-0c42-4b4e-8920-890965ffad45.png"
              ></img>
            </button>
            <ProductInformation
              description={product.description}
              detalhes={product.atributos}
            />
            <div className="bg-gray-100 rounded-3xl py-10 flex flex-col justify-center items-center w-full mt-6">
              <span class="pb-8">Precisa de ajuda?</span>
              <button class="border border-solid border-black rounded-2xl py-3 w-1/2 flex flex-row justify-center items-center">
                <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                Fale com a gente
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
