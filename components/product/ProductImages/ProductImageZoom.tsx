import type { HTMLAttributes } from "preact/compat";
import Image from "deco-sites/std/components/Image.tsx";
import type { ImageObject } from "deco-sites/std/commerce/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";

type ProductImageZoomProps = {
  image: ImageObject[];
  width: number;
  height: number;
  id: string;
  currentImage: number;
  setCurrentImage: (index: number) => void;
  open: boolean;
  setZoomOpen: (open: boolean) => void;
};

export function ProductImageZoom(
  {
    image,
    id,
    width,
    height,
    currentImage,
    setCurrentImage,
    open,
    setZoomOpen,
  }: ProductImageZoomProps,
) {
  return (
    <Modal
      open={open}
      mode="full"
      onClose={() => {
        setZoomOpen(false);
      }}
    >
      {open && (
        <div className="h-full w-full flex justify-center items-center overflow-hidden select-none relative">
          <LeftArrowButton
            visible={image.length > 1 && currentImage !== 0}
            onClick={() => {
              setCurrentImage(Math.max(0, currentImage - 1));
            }}
          />

          {image.map((img, index) => (
            <div
              key={index}
              id={`zoom-${id}-${index}`}
              role="tabpanel"
              aria-label={`Item ${index + 1}`}
              aria-hidden={currentImage === index}
              className={`h-full w-full ${
                currentImage === index ? "" : "hidden"
              }`}
            >
              <Image
                className="h-full w-full object-contain"
                width={width}
                height={height}
                src={img.url!}
                alt={img.alternateName}
              />
            </div>
          ))}

          <RightArrowButton
            visible={image.length > 1 && currentImage < image.length - 1}
            onClick={() => {
              setCurrentImage(Math.min(image.length - 1, currentImage + 1));
            }}
          />
        </div>
      )}
    </Modal>
  );
}

function RightArrowButton(
  { visible, onClick }: { visible: boolean; onClick: () => void },
) {
  return (
    <ArrowButton
      aria-label="Next"
      visible={visible}
      onClick={onClick}
      className="absolute right-0 md:static"
    >
      <Icon id="ChevronRight" className="h-10 w-10" strokeWidth={2} />
    </ArrowButton>
  );
}

function LeftArrowButton(
  { visible, onClick }: { visible: boolean; onClick: () => void },
) {
  return (
    <ArrowButton
      aria-label="Previous"
      onClick={onClick}
      visible={visible}
      className="absolute left-0 md:static"
    >
      <Icon id="ChevronLeft" className="h-10 w-10" strokeWidth={2} />
    </ArrowButton>
  );
}

function ArrowButton(
  { visible, className, ...props }:
    & { visible: boolean }
    & HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      type="button"
      tabIndex={0}
      className={`h-full flex items-center text-gray-500 transition-colors select-auto focus:outline-none focus-visible:text-gray-700 ${
        visible ? "visible" : "invisible"
      } ${className}`}
      {...props}
    />
  );
}
