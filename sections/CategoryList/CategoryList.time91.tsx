import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import SliderJS from "$store/islands/SliderJS.tsx";

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
  const id = useId();
  return (
    <section class="flex justify-evenly flex-col items-center w-full py-10 px-16 text-trueGray-800">
      <div class="flex justify-center flex-col items-center">
        <h1 class="text-4xl mb-4">Category list</h1>
        <span class="text-lg">Description</span>
      </div>
      <div
        class="container grid grid-cols-[40px_1fr_40px] grid-rows-[40px_1fr_40px_1fr] py-3 sm:py-6 px-0 sm:px-5"
        id={id}
      >
        <Slider class="carousel carousel-start sm:carousel-start gap-4 sm:gap-8 col-span-full row-start-2 row-end-5">
          {categoryList.map(({ href, src, alt, label }, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-40 h-full sm:w-80 sm:h-96 first:ml-3 sm:first:ml-6 last:mr-6 sm:last:mr-3"
            >
              <a
                href={href}
                class="card card-compact w-40 h-auto sm:w-80 sm:h-96"
              >
                <figure>
                  <Image
                    class="rounded-3xl"
                    src={src}
                    alt={alt}
                    height={340}
                    width={340}
                  />
                </figure>
                <div class="card-body items-center">
                  <h2 class="card-title text-base font-medium">{label}</h2>
                </div>
              </a>
            </Slider.Item>
          ))}
        </Slider>
        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle btn-outline absolute right-1/2 bg-base-100">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle btn-outline absolute left-1/2 bg-base-100">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />
      </div>
      <button class="btn btn-outline rounded-none w-80 h-9 flex normal-case text-base text-green-900
">
        View all
      </button>
    </section>
  );
}

export default CategoryList;
