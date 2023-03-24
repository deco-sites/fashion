import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  label: "Instagram" | "Facebook";
  href: string;
}

export interface Props {
  title?: string;
  description?: string;
  links?: Link[];
  bgImage?: LiveImage;
  avatar?: LiveImage;
  social?: Social[];
}

function LinkTree({
  bgImage,
  avatar,
  title = "",
  description = "",
  links,
  social,
}: Props) {
  return (
    <div
      class="flex flex-col justify-start items-center gap-10 bg-interactive p-10 h-screen overflow-y-hidden"
      style={bgImage ? { background: `url(${bgImage})` } : undefined}
    >
      <header class="flex flex-col justify-center items-center gap-4">
        <div class="rounded-full w-min bg-default p-4">
          {avatar
            ? <Image src={avatar} width={150} height={150} />
            : <Icon id="Logo" size={150} />}
        </div>
        <Text tone="default-inverse" variant="heading-3">{title}</Text>
        <Text tone="default-inverse" variant="body">{description}</Text>
      </header>
      <main class="w-full max-w-[80%] sm:max-w-[50%]">
        <ul class="flex flex-col justify-center items-center gap-4">
          {links?.map((link) => (
            <li class="w-full">
              <a
                href={link.href}
                class="text-interactive-inverse text-caption rounded-3xl text-center w-full flex justify-center items-center min-h-[36px] hover:(bg-interactive-inverse text-interactive) border border-default"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <ul class="flex flex-row gap-4">
          {social?.map((link) => (
            <li>
              <a
                href={link.href}
                class="text-interactive-inverse block rounded"
              >
                <Icon id={link.label} size={36} strokeWidth={0.8} />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default LinkTree;
