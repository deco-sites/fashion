import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Testimonial {
  company_logo: LiveImage;
  company_name: string;
  testimonial_text: string;
  author_image: LiveImage;
  author_name: string;
  author_surname: string;
  author_role: string;
  label: string;
}

export interface Props {
  testimonial?: Testimonial[];
  title: string;
  subtitle: string;
}

function Testimonial({ testimonial = [], title, subtitle }: Props) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-lg text-center mt-4 mb-6">{subtitle}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
        {testimonial.map((
          {
            company_logo,
            company_name,
            testimonial_text,
            author_image,
            author_name,
            author_surname,
            author_role,
            label,
          },
        ) => (
          <div>
            <figure class="flex flex-col items-center">
              <Image
                class="w-21 h-20 object-contain"
                src={company_logo}
                alt={company_name}
                width={200}
              />
              <span class="text-lg text-black text-center mb-2">
                "{testimonial_text}"
              </span>
            </figure>
            <figure class="flex flex-col items-center">
              <Image
                class="w-8 h-8 rounded-full object-cover mb-2"
                src={author_image}
                alt={author_name}
                width={100}
              />
              <span class="text-sm text-center">
                {company_name}, {author_role}
              </span>
              <span class="text-sm text-center mb-2">
                {author_name} {author_surname}
              </span>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
