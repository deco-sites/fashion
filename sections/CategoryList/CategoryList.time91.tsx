// import Carousel from "../Carousel.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Category {
    src: LiveImage;
    alt: string;
    href: string;
    label: string;
  }
  
  export interface Props {
    categoryList: Category[];
  }

function CategoryList({ categoryList = [] }: Props) {
  return (
    <section className="flex justify-evenly flex-col items-center w-full h-96 py-10 px-16 text-trueGray-800">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl mb-4">Category list</h1>
        <span className="text-lg">Description</span>
      </div>
      <div className="carousel flex h-80 border-trueGray-400">
        <Slider class="carousel carousel-center sm:carousel-end gap-6">
        {categoryList.map(({ href, src, alt, label }, index) => (
          <Slider.Item
            index={index}
            class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 min-w-[190px]"
          >
            <a href={href} class="card card-compact bg-base-100">
              <figure>
                <Image
                  class="rounded-[40px]"
                  src={src}
                  alt={alt}
                  height={664}
                  width={308}
                />
              </figure>
              <div class="card-body items-center">
                <h2 class="card-title text-base font-medium">{label}</h2>
              </div>
            </a>
          </Slider.Item>
        ))}
      </Slider>
      {/* todo implementar o <Carousel/>*/}


      </div>
      <button className="btn btn-outline rounded-none w-80 h-9 flex normal-case text-base text-green-900
">
        View all
      </button>
    </section>
  );
}

export default CategoryList;
