import Image from "deco-sites/std/components/Image.tsx";
import { useMemo } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import Container, { HeaderContent, Layout, ExtendedStyle as Style } from "$store/components/ui/Container.tsx"

export interface Image {
  image: ImageType;
  altText: string;
}

export interface Props {
  header?: HeaderContent;
  images?: Image[];
  layout?: Layout;
  style?: Style;
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
    header,
    images,
    layout,
    style,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );

  return (
    <Container header={header} layout={layout} style={style}>
      <div class="flex flex-wrap justify-center">
        {list.map((element) => (
          <div class="w-36 lg:w-40 h-17 lg:h-20 px-4 lg:px-6 py-6 lg:py-4">
            <div class="flex w-full h-full items-center justify-center">
              <Image
                width={300}
                height={300}
                src={element.image}
                alt={element.altText || ""}
                class="max-w-full max-h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Logos;
