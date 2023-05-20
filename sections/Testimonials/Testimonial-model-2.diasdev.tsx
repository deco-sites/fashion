import { Testimonial } from "./typeTestimonial.ts";
import CardTestimonial from "./cardTestimonial.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import SliderJS from "$store/islands/SliderJS.tsx";

export interface Props {
  description: string;
  testimonials: Testimonial[];
}

function TestimonialsCarousel({ description, testimonials }: Props) {
  const id = useId();
  return (
    <div id={id} className="w-full">
      <div className="w-80 text-center m-auto mb-8">
        <h1 class="text-center font-sans text-3xl font-normal text-neutral-800 mt-10 mb-4">
          Testimonials
        </h1>
        <p className="font-sans text-2xl font-normal text-neutral-800">
          {description}
        </p>
      </div>
      <div className="flex">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-neutral-800"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
        {testimonials.map(({
          content,
          photo,
          name,
          company,
        }: Testimonial, index: number) => (
          <Slider.Item index={index} class="carousel-item w-full">
              <CardTestimonial
              key={index}
              content={content}
              photo={photo}
              name={name}
              company={company}
              />      
          </Slider.Item>
        ))}
      </Slider>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-neutral-800"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      <SliderJS rootId={id} interval={250 && 250 * 1e3} infinite />
      </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel