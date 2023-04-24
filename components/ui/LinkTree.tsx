import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon from "deco-sites/fashion/components/ui/Icon.tsx";

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
      class="flex flex-col justify-start items-center gap-10 bg-base-content p-10 h-screen overflow-y-hidden"
      style={bgImage ? { background: `url(${bgImage})` } : undefined}
    >
      <header class="flex flex-col justify-center items-center gap-4">
        <div class="rounded-full w-min bg-base-100 p-4">
          {avatar
            ? <Image src={avatar} width={150} height={150} />
            : <Icon id="Logo" size={150} />}
        </div>
        <span class="font-medium text-xl text-base-100">{title}</span>
        <span class="text-base-100">{description}</span>
      </header>
      <main class="w-full max-w-[80%] sm:max-w-[50%]">
        <ul class="flex flex-col justify-center items-center gap-4">
          {links?.map((link) => (
            <li class="w-full">
              <a
                href={link.href}
                class="text-base-100 text-caption rounded-3xl text-center w-full flex justify-center items-center min-h-[36px] hover:bg-base-100 hover:text-base-content border border-base-100"
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
                class="text-base-100 block rounded-full hover:text-base-content hover:bg-base-100 p-2"
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
