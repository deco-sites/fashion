import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Image {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title: string;
  subtitle: string;
  images: Image[];
}

export default function ImageGallery(params: Props) {
  return (
    <div className="px-4 py-10">
      <p className="text-4xl text-center">{params.title}</p>
      <p className="text-2xl text-center mt-4">{params.subtitle}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-11">
        {params.images?.map((image) => (
          <a
            href={image.href}
            className="aspect-[1/1] bg-base-200 flex items-center justify-center overflow-hidden"
          >
            <Picture>
              <img
                class="w-full"
                src={image.src}
                alt={image.alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </a>
        ))}
      </div>
    </div>
  );
}
