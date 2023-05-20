import type { Logo } from "$store/components/logos/Logos.tsx";
export interface Props {
  logos?: Array<Logo>;
}

function LogosGrid({ logos }: Props) {
  return (
    <div className="grid gap-x-20 gap-y-16 grid-cols-[repeat(auto-fill,_100px)] place-items-center justify-center">
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
  );
}

export default LogosGrid;
