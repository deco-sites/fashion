import type { ImageObject } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useId, useState } from "preact/hooks";
import { ProductImageZoom } from "./ProductImageZoom.tsx";
import { Thumbnails } from "./Thumbnails.tsx";

export type Props = {
  image: ImageObject[];
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
};

export default function ProductImages(
  { image, width, height, thumbWidth, thumbHeight }: Props,
) {
  const id = useId();

  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomOpen, setZoomOpen] = useState<boolean>(false);

  return (
    <>
      <div class="flex flex-col space-y-2">
        <div>
          {image.map((img, index) => (
            <div
              key={index}
              id={`${id}-${index}`}
              tabIndex={currentImage === index ? 0 : -1}
              role="tabpanel"
              aria-label={`Item ${index + 1}`}
              aria-hidden={currentImage === index}
              className={`cursor-pointer ${
                currentImage === index ? "" : "hidden"
              }`}
              onClick={() => {
                setZoomOpen(true);
              }}
            >
              <Image
                width={width}
                height={height}
                src={img.url!}
                alt={img.alternateName}
                // Preload LCP image for better web vitals
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {image.length > 1 && (
          <Thumbnails
            image={image}
            thumbWidth={thumbWidth}
            thumbHeight={thumbHeight}
            id={id}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
          />
        )}
      </div>

      <ProductImageZoom
        id={id}
        image={image}
        width={width}
        height={height}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        open={isZoomOpen}
        setZoomOpen={setZoomOpen}
      />
    </>
  );
}
