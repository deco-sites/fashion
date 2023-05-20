import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  description: string;
  images: Array<{ link?: string; src: LiveImage }>;
}

export default function Gallery({ description, images }: Props) {
  return (
    <section className="py-10">
      <h2 className="text-4xl text-center mb-4">Testimonials</h2>
      <p className="text-center text-2xl">{description}</p>
      <div className="mt-11 gap-4 place-items-center  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {images.map((image, i) => (
          <a
            href={image.link}
            key={i}
            className="md:max-w-[316px] justify-self-center md:max-h-[316px] aspect-square"
          >
            <img
              src={image.src}
              alt="Imagem da Galeria"
              className="object-cover h-full w-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
