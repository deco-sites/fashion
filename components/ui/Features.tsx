import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  src: LiveImage;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <section class="bg-gray-100 flex flex-row flex-wrap py-2 justify-center">
      {features.map(({ src, title, description }) => (
        <div key={title} class="w-1/2 md:w-1/5 p-6 flex flex-col items-center">
          <Image
            sizes="(min-width: 59px) 59px, 100vw"
            data-main-image=""
            style="object-fit:cover;opacity:1"
            width={59}
            height={31}
            src={src}
            alt={description}
            class=""
            decoding="async"
            loading="lazy"
          />
          <span class="font-bold uppercase text-center mt-3">{title}</span>
          <p class="text-xs text-center">{description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeatureHighlights;
