import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Img {
  image: ImageType;
  altText?: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Img[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

export default function Logos({
  title,
  description,
  images,
  layout,
}: Props) {
  const image1 = {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  };
  const image2 = {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  };

  const defaultImages = [];

  Array(10).fill().forEach(() => {
    defaultImages.push(image1);
    defaultImages.push(image2);
  });

  const imgList = images && images.length > 0 ? images : defaultImages

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-12 lg:gap-16 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="w-full text-center items-center">
        {imgList.map((element) => (
          <div class="w-[140px] lg:w-[200px] h-[70px] lg:h-[100px] px-2 lg:px-5 py-1 lg:py-4 inline-block align-middle">
            <div class="flex w-full h-full items-center justify-center">
              <Image
                src={element.image}
                alt={element.altText || ""}
                class="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
