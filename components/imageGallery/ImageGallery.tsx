import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  titulo: string;
  subTitulo: string;
  imagem1: LiveImage;
  imagem2: LiveImage;
  imagem3: LiveImage;
  imagem4: LiveImage;
}

export default function ImageGallery(
  { titulo, subTitulo, imagem1, imagem2, imagem3, imagem4 }: Props,
) {
  return (
    <main class="flex justify-center w-screen h-screen bg-[#DCDCDC]">
      <div class="lg:flex lg:flex-col  lg:w-[1440px] lg:h-[1376px] lg:items-center lg:bg-[#ffffff] font-sans sm:w-[360px] sm:text-center sm:bg-[#ffffff] sm:h-[564px] sm:px-4 sm:py-6">
        <div class="items-center w-full p-10 flex flex-col ">
          <h1 class="lg:text-6xl sm:text-4xl sm:pb-4">{titulo}</h1>
          <p class=" lg:text-2xl lg:py-5 lg:text-center sm:text-xl sm:text-center">
            {subTitulo}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <div class="items-center">
            <img
              class="lg:m-4 lg:w-[600px] lg:h-[600px] sm:p-2 sm:w-[156px] sm:h-[156px] "
              src={imagem1}
            >
            </img>
            <img
              class="lg:m-4 lg:w-[600px] lg:h-[452px] sm:p-2 sm:w-[156px] sm:h-[156px] "
              src={imagem2}
            >
            </img>
          </div>
          <div class=" items-center">
            <img
              class="lg:m-4 lg:w-[600px] lg:h-[452px] sm:p-2 sm:w-[156px] sm:h-[156px] "
              src={imagem3}
            >
            </img>
            <img
              class="lg:m-4 lg:w-[600px] lg:h-[600px] sm:p-2 sm:w-[156px] sm:h-[156px]"
              src={imagem4}
            >
            </img>
          </div>
        </div>
      </div>
    </main>
  );
}
