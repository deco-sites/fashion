import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: string;
  subtitle: string;
  imgUrl?: Array<{
    url?: ImageType;
    textAlt?: string;
  }>;
}

export default function Logos({
  imgUrl,
  title = "Title",
  subtitle = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
}: Props) {
  return (
    <div className="w-full">
      <div className="text-center py-10">
        <h1 className="text-4xl">{title}</h1>
        <h2 className="px-14">{subtitle}</h2>
      </div>
      <div className="carousel px-auto py-2 flex flex-row justify-center">
        {imgUrl?.map((element) => (
          <div className="carousel-item">
            <Image
              className="mx-4"
              src={element.url}
              alt={element.textAlt}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
