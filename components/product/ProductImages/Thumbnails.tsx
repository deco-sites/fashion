import type { ImageObject } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

type ThumbnailsProps = {
  image: ImageObject[];
  thumbWidth: number;
  thumbHeight: number;
  id: string;
  currentImage: number;
  setCurrentImage: (index: number) => void;
};

export function Thumbnails(
  { image, thumbWidth, thumbHeight, id, currentImage, setCurrentImage }:
    ThumbnailsProps,
) {
  return (
    <ul class="flex space-x-2 justify-center" role="tablist">
      {image.map((img, index) => (
        <li
          key={index}
          role="presentation"
        >
          <button
            className={`
                  transition-shadow
                  rounded
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${index === currentImage ? "ring-2 ring-blue-400" : ""}`}
            aria-selected={index === currentImage}
            aria-controls={`${id}-${index}`}
            role="tab"
            tabIndex={0}
            type="button"
            onClick={() => {
              setCurrentImage(index);
            }}
          >
            <Image
              className="rounded"
              width={thumbWidth}
              height={thumbHeight}
              src={img.url!}
              alt={img.alternateName}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
