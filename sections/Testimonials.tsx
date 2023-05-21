import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle: string
  user: Array<{
    userName: string;
    position: string;
    comment: string;
    userImage: LiveImage[];
    positionImage: LiveImage[];
  }>;
}

export default function Testimonails({ user, title, subtitle }: Props) {
  return (
    <div class="container sm:p-10 text-center py-10 px-4">
      <h2 class="text-6xl pb-6">{title}</h2>
      <p class="pb-10 text-2xl">
        {subtitle}
      </p>
      <article class="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-10 gap-x-10">
        {user && user.map(({ userName, position, comment, userImage:[src, alt], positionImage:[srcPosition, altPosition] }) => (
          <section class="flex flex-col items-center">
            <img
              alt={altPosition}
              height={32}
              loading="lazy"
              src={srcPosition}
              width={92}
            />
            <h4 class="text-2xl py-9">
              {comment}
            </h4>
            <img
              src={src}
              alt={alt}
            />
            <p class="text-lg pt-3">
              {userName}
            </p>
            <p class="text-lg">
              {position}
            </p>
          </section>
        ))}
      </article>
    </div>
  );
}
