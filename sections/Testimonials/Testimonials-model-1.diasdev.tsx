import { Testimonial } from "./typeTestimonial.ts";
import CardTestimonial from "./cardTestimonial.tsx";

export interface Props {
  description: string;
  testimonials: Testimonial[];
}

function Testimonials({ description, testimonials }: Props) {
  return (
    <div className="w-full">
      <div className="w-80 text-center m-auto mb-8 md:w-full">
        <h1 class="text-center font-sans text-3xl font-normal text-neutral-800 mt-10 mb-4 md:text-6xl">
          Testimonials
        </h1>
        <p className="font-sans text-2xl font-normal text-neutral-800">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3">
        {testimonials.map(({
          content,
          photo,
          name,
          company,
        }: Testimonial, index: number) => (
          <CardTestimonial
            key={index}
            content={content}
            photo={photo}
            name={name}
            company={company}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
