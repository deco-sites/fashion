import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title?: string;
  subtitle?: string;
  imageUrl: LiveImage;
  coluna?: Array<{
    titleColuna: string;
    linhaColuna: Array<{
      textLinha: string;
    }>;
  }>;
}

const Modal = ({
  title = "Medidas",
  subtitle = "Compare suas medidas com as deste produto:",
  imageUrl = `https://i.ibb.co/LdLBLLp/photo.png`,
  coluna = [
    {
      titleColuna: "Col 1",
      linhaColuna: [
        {
          textLinha: "cel",
        },
      ],
    },
  ],
}: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center max-md:bg-slate-300">
      <div className="bg-white shadow-lg">
        <div className="relative max-md:h-[90vh]">
          <button className="absolute top-2 right-2 border border-gray-300 rounded-full p-2 decoration-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293A1 1 0 0 0 4.293 5.707L8.586 10l-4.293 4.293a1 1 0 0 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="flex items-center relative">
            <div className="max-w-xs w-72 h-96 flex items-center justify-center bg-slate-50 max-md:hidden">
              <Image
                src={imageUrl}
                sizes="(max-width: 80px) 100vw, 50vw"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                preload
              />
            </div>

            <div className="p-6 px-8">
              {title && (
                <h2 className="font-medium my-6 text-3xl">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="text-gray-500">
                  {subtitle}
                </p>
              )}
              <div className="mt-4 flex item-center auto-cols-max justify-center grid-flow">
                {coluna.map(({ titleColuna, linhaColuna }) => (
                  <div className="text-center flex flex-col w-full">
                    <div className="px-4 py-2">{titleColuna}</div>
                    {linhaColuna?.map(({ textLinha }) => (
                      <div className="px-4 py-2 border-b">{textLinha}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
