import type { Logo } from "$store/components/logos/Logos.tsx";
export interface Props {
  logos?: Array<Logo>;
}

function LogosMarquee({ logos }: Props) {
  return (
    <div class="relative flex overflow-x-hidden">
      <div class="gap-x-20 gap-y-16 flex animate-marquee whitespace-nowrap">
        {logos?.map(({ alt, image, action }) => {
          return (
            <img
              href={action?.href}
              class="object-cover"
              src={image}
              alt={alt}
            />
          );
        })}
      </div>

      <div class="absolute flex left-10 top-0 gap-x-20 gap-y-16 animate-marquee2 whitespace-nowrap">
        {logos?.map(({ alt, image, action }) => {
          return (
            <img
              href={action?.href}
              class="object-cover"
              src={image}
              alt={alt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LogosMarquee;
