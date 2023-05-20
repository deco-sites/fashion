import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  /**
   * @default Lorem ipsum dolor sit amet, consectetur adipiscing elit
   */
  description: string;
  /**
   * @default []
   */
  testimonials: Array<{
    text: string;
    image: {
      src: ImageType;
      alt: string;
    };
    user: {
      name: string;
      surname: string;
      position: string;
      company: string;
    };
  }>;
}

export default function Testimonials({ description, testimonials= [] }: Props) {
  return (
    <div class="flex flex-col gap-16 px-4 py-10 sm:gap-20 sm:px-10">
      <div class="sm:gab-6 flex flex-col gap-4">
        <h1 class="sm:text-6xl sm:leading:18 text-center text-4xl leading-10 text-neutral-900">
          Testimonials
        </h1>
        <h6 class="text-center text-2xl leading-7 text-neutral-900">
          {description}
        </h6>
      </div>

      <div class="flex flex-col gap-20 sm:grid sm:grid-cols-3 sm:gap-x-10">
        {testimonials.map(
          (testimonial) => (
            <div class="flex flex-col gap-9 sm:pr-10">
              <div class="flex justify-center">
                <Icon
                  id={"Logo"}
                  width={80}
                  height={20}
                  strokeWidth={0.01}
                />
              </div>

              <h6 class="text-center text-xl leading-7 text-neutral-900 sm:text-2xl sm:leading-8">
                {testimonial.text}
              </h6>

              <div class="flex flex-col items-center justify-center gap-4">
                <Image
                  src={testimonial.image?.src}
                  alt={testimonial.image?.alt}
                  width={60}
                  height={60}
                  class="rounded-full"
                />
                <div>
                  <p class="text-center font-sans text-lg leading-7 text-neutral-900">
                    {testimonial.user.name} {testimonial.user.surname}
                  </p>
                  <p class="text-center font-sans text-lg leading-7 text-neutral-900">
                    {testimonial.user.position}, {testimonial.user.company}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
