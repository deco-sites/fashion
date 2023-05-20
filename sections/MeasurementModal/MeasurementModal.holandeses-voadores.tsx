import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PropsBanner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  columns: Array<{
    label: string;
    cells: string[];
  }>;
  banner: PropsBanner;
}

export default function MeasurementModal({ columns, banner }: Props) {
  return (
    <div className="p-8 md:fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="flex w-full h-full box-border bg-white rounded-lg shadow-lg md:max-w-3xl md:max-h-96">
        <figure className="hidden md:flex justify-center items-center w-1/3 h-{400} bg-base-200 m">
          {banner && (
            <a
              href={banner.href}
              className="h-auto"
            >
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={banner.srcMobile}
                  width={100}
                  height={100}
                />
                <Source
                  media="(min-width: 768px)"
                  src={banner.srcDesktop ? banner.srcDesktop : banner.srcMobile}
                  width={100}
                  height={150}
                />
                <img
                  class="w-full"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={banner.srcMobile}
                  alt={banner.alt}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            </a>
          )}
        </figure>
        <div className="relative md:w-2/3 p-10">
          <section className="w-full">
            <button className="absolute top-4 right-4 w-10 h-10 p-2 rounded-full flex items-center justify-center border border-gray-300 hover:bg-black hover:border-gray-100 hover:text-gray-100 focus:bg-black">
              X
            </button>
            <h2 className="text-3xl mb-6 text-gray-500 leading-9">Medidas</h2>
            <p className="text-lg mb-6 text-gray-500 leading-7">
              Compare suas medidas com as deste produto:
            </p>
          </section>
          <section className="w-full">
            <div className="w-full">
              <div className="flex pb-8">
                {columns.map((column) => (
                  <span className="w-1/3 text-center text-gray-500 leading-6">
                    {column.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full">
              {Array.from({ length: columns[0].cells.length }).map((
                _,
                index,
              ) => (
                <div className="flex">
                  {columns.map((column) => (
                    <span className="w-1/3 text-center text-gray-500 leading-6 p-1 border border-transparent border-b-gray-300">
                      {column.cells[index]}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}