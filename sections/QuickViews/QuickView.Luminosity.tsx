import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface QuickViewModalProps {
  productsImages: Array<LiveImage>;
  category: string;
  name: string;
  description: string;
  originalPrice: number;
  promotionalPrice: number;
  maximumInstallments: number;
  sizes: Array<string>;
}

export default function QuickViewModal(
  {
    productsImages,
    category,
    name,
    description,
    originalPrice,
    promotionalPrice,
    maximumInstallments,
    sizes,
  }: QuickViewModalProps,
) {
  function calcDiscount(): number {
    return ((originalPrice - promotionalPrice) / originalPrice) * 100;
  }

  return (
    <div className="w-full h-full bg-zinc-200 p-8">
      <div className="w-full bg-white flex flex-col lg:flex-row">
        <div className="w-full relative bg-white">
          {/* Carousel products */}
          <div className="carousel w-full h-full aspect-video">
            {productsImages.map((img, index) => (
              <div
                id={`slide-${index}`}
                className="carousel-item relative w-full"
                key={`slide-${index}`}
              >
                <img
                  src={img}
                  className="w-auto h-auto inline-block my-0 mx-auto align-middle"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={`#slide-${index - 1}`}
                    className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-zinc-400 hover:border-zinc-900 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                        fill="#292929"
                      />
                    </svg>
                  </a>
                  <a
                    href={`#slide-${index + 1}`}
                    className="w-10 h-10 flex justify-center items-center rounded-full bg-white border border-zinc-400 hover:border-zinc-900 focus:ring-2 focus:ring-blue-700 focus:outline-none"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
                        fill="#292929"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Close icon */}
          <a className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center rounded-full bg-white cursor-pointer border border-zinc-400 hover:border-zinc-900 focus:ring-2 focus:ring-blue-700 focus:outline-none lg:hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#292929"
              />
            </svg>
          </a>

          {/* Like product icon */}
          <a className="absolute top-2 left-2 w-10 h-10 flex justify-center items-center rounded-full bg-transparent cursor-pointer focus:ring-2 focus:ring-blue-700 focus:outline-none lg:left-[87%] transition-colors hover:bg-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.41135 5.01121C7.86226 4.95264 7.30699 5.00839 6.78051 5.17496C6.25402 5.34152 5.76773 5.6153 5.35225 5.97904C4.93677 6.34278 4.6011 6.7886 4.36638 7.28844C4.13167 7.78828 4.00299 8.33131 3.98845 8.88332C3.97391 9.43533 4.07382 9.98438 4.2819 10.4959C4.48997 11.0074 4.8017 11.4703 5.19746 11.8554L5.20377 11.8615L5.20375 11.8615L12.0001 18.5926L18.7964 11.8615C18.8171 11.841 18.8385 11.8216 18.8605 11.8033C19.2242 11.4302 19.5117 10.9894 19.7066 10.5056C19.9123 9.99503 20.0104 9.44746 19.9948 8.8972C19.9791 8.34694 19.8501 7.80583 19.6157 7.30775C19.3813 6.80966 19.0466 6.36531 18.6326 6.00252C18.2185 5.63973 17.7341 5.3663 17.2095 5.19935C16.685 5.03239 16.1316 4.9755 15.5841 5.03225C15.0365 5.08899 14.5066 5.25814 14.0274 5.52912C13.5482 5.80009 13.1302 6.16705 12.7993 6.60703C12.6098 6.85905 12.3126 7.00693 11.9973 7.00605C11.682 7.00517 11.3855 6.85564 11.1975 6.60257C10.8681 6.15937 10.4505 5.78918 9.97096 5.5153C9.49146 5.24142 8.96044 5.06979 8.41135 5.01121ZM20.1347 13.3509L12.7037 20.7106C12.314 21.0965 11.6861 21.0965 11.2964 20.7106L3.79935 13.2855C3.20729 12.7085 2.74085 12.0153 2.42931 11.2495C2.1172 10.4822 1.96733 9.65868 1.98914 8.83066C2.01095 8.00264 2.20397 7.1881 2.55605 6.43834C2.90812 5.68858 3.41162 5.01984 4.03484 4.47423C4.65806 3.92862 5.3875 3.51796 6.17723 3.26811C6.96696 3.01826 7.79986 2.93464 8.6235 3.0225C9.44713 3.11036 10.2437 3.3678 10.9629 3.77862C11.337 3.99227 11.6859 4.24499 12.0042 4.53187C12.3221 4.24846 12.6702 3.99898 13.0429 3.7882C13.7617 3.38174 14.5566 3.12802 15.3779 3.0429C16.1992 2.95779 17.0293 3.04312 17.8161 3.29355C18.603 3.54398 19.3296 3.95412 19.9507 4.49831C20.5717 5.0425 21.0737 5.70902 21.4253 6.45615C21.7769 7.20328 21.9705 8.01494 21.994 8.84033C22.0174 9.66572 21.8703 10.4871 21.5618 11.253C21.2532 12.0189 20.7899 12.7129 20.2008 13.2915C20.1795 13.3124 20.1574 13.3323 20.1347 13.3509Z"
                fill="#787878"
              />
            </svg>
          </a>

          {/* Badge discount */}
          <div className="absolute bottom-2 left-2 w-fit px-2 py-1 bg-secondary lg:bottom-[90%]">
            <p className="text-white">{Math.round(calcDiscount())}% OFF</p>
          </div>
        </div>

        <div className="w-full bg-white p-4 relative">
          {/* Close icon */}
          <a className="hidden absolute top-2 right-2 w-10 h-10 lg:justify-center lg:items-center rounded-full bg-white cursor-pointer border border-zinc-400 hover:border-zinc-900 focus:ring-2 focus:ring-blue-700 focus:outline-none lg:flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#292929"
              />
            </svg>
          </a>

          <div className="w-full">
            {/* Product infos */}
            <div>
              <p className="text-primary text-xs">{category}</p>
              <h1 className="text-xl text-zinc-900">{name}</h1>
              <p className="text-zinc-500 text-xs">
                {description}
              </p>
            </div>

            {/* Product price */}
            <div className="mt-2">
              <p className="text-xs line-through decoration-zinc-500 text-zinc-500">
                R$ {originalPrice.toFixed(2)}
              </p>
              <h1 className="text-secondary text-lg">
                R$ {promotionalPrice.toFixed(2)} {""}
                <span className="text-base text-zinc-600">
                  ou {maximumInstallments}x de R${" "}
                  {(promotionalPrice / maximumInstallments).toFixed(2)}
                </span>
              </h1>
            </div>

            {/* Product colors */}
            <div className="mt-2">
              <h1>Color</h1>
              <div className="flex gap-3 items-center justify-start mt-2">
                <div className="w-5 h-5 rounded-full cursor-pointer bg-[#C24620] ring-1 ring-zinc-900 border-2 border-white">
                </div>
                <div className="w-5 h-5 rounded-full cursor-pointer bg-[#EC986A] ring-1 ring-zinc-400">
                </div>
                <div className="w-5 h-5 rounded-full cursor-pointer bg-[#839F30] ring-1 ring-zinc-400">
                </div>
                <div className="w-5 h-5 rounded-full cursor-pointer bg-[#4FB0D3] ring-1 ring-zinc-400">
                </div>
              </div>
            </div>

            {/* Product sizes */}
            <div className="mt-2">
              <h1>Tamanhos</h1>
              <div className="flex gap-3 items-center justify-start mt-2">
                {sizes.map((size) => (
                  <div className="w-5 h-5 p-1 rounded-full cursor-pointer bg-white ring-1 ring-zinc-400 flex justify-center items-center">
                    <p className="uppercase text-xs">{size}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add do cart */}
          <div className="w-full flex flex-col gap-2 mt-4">
            {/* Counter */}
            <div className="w-full h-10 p-2 flex justify-between items-center border border-zinc-400">
              <button className="cursor-pointer w-4 h-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.66675 7.99992C2.66675 7.63173 2.96522 7.33325 3.33341 7.33325H12.6667C13.0349 7.33325 13.3334 7.63173 13.3334 7.99992C13.3334 8.36811 13.0349 8.66659 12.6667 8.66659H3.33341C2.96522 8.66659 2.66675 8.36811 2.66675 7.99992Z"
                    fill="#292929"
                  />
                </svg>
              </button>

              <p>10</p>

              <button className="cursor-pointer w-4 h-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 2.66675C8.36827 2.66675 8.66675 2.96522 8.66675 3.33341V7.33342H12.6667C13.0349 7.33342 13.3334 7.63189 13.3334 8.00008C13.3334 8.36827 13.0349 8.66675 12.6667 8.66675H8.66675V12.6667C8.66675 13.0349 8.36827 13.3334 8.00008 13.3334C7.63189 13.3334 7.33342 13.0349 7.33342 12.6667V8.66675H3.33341C2.96522 8.66675 2.66675 8.36827 2.66675 8.00008C2.66675 7.63189 2.96522 7.33342 3.33341 7.33342H7.33342V3.33341C7.33342 2.96522 7.63189 2.66675 8.00008 2.66675Z"
                    fill="#292929"
                  />
                </svg>
              </button>
            </div>

            {/* Add to cart button */}
            <button className="group w-full h-10 p-2 flex justify-center items-center bg-primary hover:bg-white hover:border hover:border-secondary">
              <p className="text-white group-hover:text-secondary">
                Adicionar ao carrinho
              </p>
            </button>

            {/* Product details button */}
            <button className="group w-full h-10 p-2 flex justify-center items-center bg-white">
              <p className="text-zinc-900 group-hover:underline">
                Mais detalhes
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
