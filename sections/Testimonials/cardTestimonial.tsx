import { Testimonial } from "./typeTestimonial.ts";

function CardTestimonial(testimonial: Testimonial) {
  const srcDefault =
    "https://raw.githubusercontent.com/EversonDias/fashion/everson-dias/Testimonials/sections/Testimonials/logo-deco-testimonial.svg";
  return (
    <div className="mt-10 mb-10 w-80 flex flex-col m-auto text-center md:w-11/12">
      <img
        className="w-20 m-auto mb-9"
        src={testimonial.logo || srcDefault}
        alt="logo_deco"
      />
      <p className="text-xl text-neutral-800 font-normal mb-8 md:text-2xl">
        {testimonial.content}
      </p>
      <img
        className="w-14 m-auto rounded-full mb-6"
        src={testimonial.photo}
        alt={testimonial.name}
      />
      <p className="text-[18px] font-normal text-neutral-800">
        {testimonial.name}
      </p>
      <p className="text-[18px] font-normal text-neutral-800">
        {testimonial.company}
      </p>
    </div>
  );
}

export default CardTestimonial;
