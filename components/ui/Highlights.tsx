import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <Container class="flex flex-col items-center gap-10 py-10">
      {title && (
        <h2>
          <Text variant="heading-2">{title}</Text>
        </h2>
      )}

      <Slider class="gap-6">
        {highlights.map(({ href, src, alt, label }, index) => {
          const ml = index == 0 ? "ml-6 sm:ml-0" : "";
          const mr = index === highlights.length - 1 ? "mr-6 sm:mr-0" : "";

          return (
            <a
              href={href}
              class={`flex flex-col gap-4 items-center min-w-[190px] ${ml} ${mr}`}
            >
              <Image
                class="rounded-[40px]"
                src={src}
                alt={alt}
                width={190}
                height={265}
              />
              <Text variant="body">{label}</Text>
            </a>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Highlights;
