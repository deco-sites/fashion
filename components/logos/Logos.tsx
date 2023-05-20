import LogosGrid from "$store/components/logos/LogosGrid.tsx";
import LogosMarquee from "$store/components/logos/LogosMarquee.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
export interface Logo {
  /** @description Logo image */
  image: LiveImage;
  /** @description Image's alt text */
  alt?: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
  };
}

export interface Props {
  title: string;
  description: string;
  scroll?: boolean;
  logos?: Array<Logo>;
}

function Logos({ title, description, logos, scroll }: Props) {
  return (
    <section>
      <div className="p-4 my-12 flex flex-col gap-4 text-center">
        <h1 className="text-3xl text-base-content leading-9 md:text-5xl md:leading-[48px]">
          {title}
        </h1>
        <h4 className="text-lg text-base-content leading-7 ">{description}</h4>
      </div>

      {scroll ? <LogosMarquee logos={logos} /> : <LogosGrid logos={logos} />}
    </section>
  );
}

export default Logos;
