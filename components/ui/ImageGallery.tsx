import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @description Title */
  title: string;

  /** @description Description */
  description: string;

  /** @description Image one */
  imageOne: LiveImage;

  /** @description Image two */
  imageTwo: LiveImage;

  /** @description Image Three */
  imageThree: LiveImage;

  /** @description Image Four */
  imageFour: LiveImage;

  /** @description Image's alt text */
  alt: string;
}

export default function ImageGallery({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  alt,
}: Props) {
  return (
    <section class="px-4 max-w-[1360px] lg:m-auto">
      <h1 class="text-base-content text-4xl text-center mt-10 mb-4 lg:text-6xl lg:mb-6">
        {title}
      </h1>
      <p class="text-center text-base-content text-2xl leading-7">
        {description}
      </p>
      <div class="grid grid-cols-2 gap-4 mt-11 lg:flex lg:gap-8 lg:mt-20">
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageOne}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageTwo}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageThree}
          alt={alt}
        />
        <img
          class="min-w-full object-cover max-w-[156px] max-h-[156px] "
          src={imageFour}
          alt={alt}
        />
      </div>
    </section>
  );
}
