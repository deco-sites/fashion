import Image from "$live/std/ui/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

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

function HighlightCard(
  { highlight: { src, alt, href, label }, index }: {
    highlight: Highlight;
    index: number;
  },
) {
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <Container class="flex flex-col items-center gap-10 py-10">
      {title && (
        <h2>
          <Text class="uppercase" variant="subheading-strong">{title}</Text>
        </h2>
      )}
      <Slider>
        {highlights.map(({ href, src, alt, label }, index) => {
          const ml = index == 0 ? "ml-4" : "";
          const mr = index === highlights.length - 1 ? "mr-4" : "";

          return (
            <a
              href={href}
              class={`flex flex-col gap-4 items-center min-w-[200px] max-w-[200px] ${ml} ${mr}`}
            >
              <Image
                src={src}
                alt={alt}
                width={200}
                height={309}
              />
              <Text variant="body-strong">{label}</Text>
            </a>
          );
        })}
      </Slider>
    </Container>
  );
}

export default Highlights;
