import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

export interface Image {
  image: ImageType;
  altText: string;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-12 lg:gap-16 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div class="grid gap-2 place-items-center grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
        {list.map((image) => (
          <Image
            height={27}
            width={75}
            src={image.image}
            alt={image.altText || ""}
            class="m-8"
          />
        ))}
      </div>
    </div>
  );
}

export default Logos;
