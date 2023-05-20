import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  title: string;
  subtitle?: string;
  testimonial: Array<{
    logo: {
      src: string;
      alt?: string;
    };
    textTestimonial: string;
    pictureTestimonial: {
      src: string;
      alt?: string;
    };
    nameTestimonial: string;
    subtextTestimonial: string;
  }>;
  interval?: number;
}

export default function Testimonials(
  {
    title,
    subtitle,
    testimonial,
    interval = 5,
  }: Props,
) {
  const id = useId();
  return (
    <div class="text-center">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div>
        <div
          id={id}
          class="container grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] py-10 px-0 sm:px-5"
        >
          <h2 class="text-center row-start-1 col-span-full">
            <span class="font-medium text-2xl">{title}</span>
          </h2>

          <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
            {testimonial.map((
              {
                logo,
                textTestimonial,
                pictureTestimonial,
                nameTestimonial,
                subtextTestimonial,
              },
              index,
            ) => (
              <Slider.Item
                index={index}
                class="carousel-item  first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
              >
                <Image
                  class=""
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  loading="lazy"
                />

                <p>{textTestimonial}</p>
                <Image
                  class="rounded-full"
                  src={pictureTestimonial.src}
                  alt={pictureTestimonial.alt}
                  width={60}
                  height={60}
                  loading="lazy"
                />
                <p>{nameTestimonial}</p>
                <small>{subtextTestimonial}</small>
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
          <SliderJS rootId={id} interval={interval && interval * 1e3} />
        </div>
      </div>
    </div>
  );
}
