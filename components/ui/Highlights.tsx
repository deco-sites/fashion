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

function HighlightItem(
  {
    highlight,
    first,
    last,
  }: {
    highlight: Highlight;
    first: boolean;
    last: boolean;
  },
) {
  const { href, src, alt, label } = highlight;
  const ml = first ? "ml-6 sm:ml-0" : "";
  const mr = last ? "mr-6 sm:mr-0" : "";

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
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <Text variant="heading-2">{title}</Text>
      </h2>

      <Slider>
        {highlights.map((highlight, index) => (
          <HighlightItem
            highlight={highlight}
            first={index === 0}
            last={index === highlights.length - 1}
          />
        ))}
      </Slider>
    </Container>
  );
}

export default Highlights;
