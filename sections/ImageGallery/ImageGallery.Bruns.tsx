import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Gallery {
  src: LiveImage;
  alt: string;
  href?: string;
  label: string;
}

export interface Props {
  gallery?: Gallery[];
  title: string;
  subtitle: string;
}

function Gallery({ gallery = [], title, subtitle }: Props) {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <p className="text-g text-center mt-4 text-black">{subtitle}</p>
      <div className="flex flex-wrap justify-center mt-4">
        {gallery.map(({ href, src, alt = "none", label = "none" }, index) => (
          <div key={index} className="w-1/2 sm:w-1/4 md:w-auto lg:w-auto">
            {href
              ? (
                <a href={href} className="card card-compact bg-base-100">
                  <figure className="flex justify-center">
                    <Image
                      className="rounded-[40px]"
                      src={src}
                      alt={alt}
                      width={190}
                      height={265}
                    />
                  </figure>
                </a>
              )
              : (
                <figure className="flex justify-center">
                  <Image
                    className="rounded-[40px]"
                    src={src}
                    alt={alt}
                    width={190}
                    height={265}
                  />
                </figure>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
