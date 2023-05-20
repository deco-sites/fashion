import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface ImageGallery {
  image: LiveImage;
  alt: string;
}

export interface Props {
  title: string;
  description: string;
  images: ImageGallery[];
}

export default function ImageGallery({ images, title, description }: Props) {
  return (
    <div className="container lg:px-32 lg:pt-12 mx-auto px-5">
      <div className="p-8">
        <h2 className="mb-4 text-4xl text-center">{title}</h2>
        <p className="text-2xl text-center">{description}</p>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map(({ image, alt }, index) => (
          <div className="flex md:p-2 p-2 w-1/2 lg:w-1/4 md:w-1/3" key={index}>
            <div className="aspect-square">
              <img
                className="block h-full object-center object-cover w-full"
                src={image}
                alt={alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
