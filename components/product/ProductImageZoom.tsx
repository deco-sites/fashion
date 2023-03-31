import { useSignal } from "@preact/signals";
import Image from "deco-sites/std/components/Image.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { Slider } from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import type { ImageObject } from "deco-sites/std/commerce/types.ts";

interface Props {
  images: ImageObject[];
  width: number;
  height: number;
}

function ProductImageZoom({ images, width, height }: Props) {
  const open = useSignal(false);

  return (
    <>
      <Button
        class="hidden sm:block override:cursor-zoom-in"
        variant="icon"
        onClick={() => open.value = true}
      >
        <Icon
          id="ArrowsPointingOut"
          size={20}
          stroke="currentColor"
          strokeWidth={2}
        />
      </Button>
      <Modal
        loading="lazy"
        mode="center"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <div class="relative" id="product-zoom">
          <Slider class="max-w-[100vw] overflow-y-auto">
            {images.map((image) => (
              <Image
                style={{
                  aspectRatio: `${width} / ${height}`,
                  minWidth: `100vw`,
                }}
                src={image.url!}
                alt={image.alternateName}
                width={width}
                height={height}
              />
            ))}
          </Slider>
          <div class="absolute left-8 top-[50vh]  bg-interactive-inverse rounded-full border-default border">
            <Button variant="icon" data-slide="prev" aria-label="Previous">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Button>
          </div>
          <div class="absolute right-8 top-[50vh] bg-interactive-inverse rounded-full border-default border">
            <Button variant="icon" data-slide="next" aria-label="Next">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Button>
          </div>
        </div>
        <SliderJS rootId="product-zoom" />
      </Modal>
    </>
  );
}

export default ProductImageZoom;
