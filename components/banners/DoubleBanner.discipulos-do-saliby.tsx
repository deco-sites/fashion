import type { Props as SingleBannerProps } from "$store/components/banners/SingleBanner.tsx";
import SingleBanner from "$store/components/banners/SingleBanner.tsx";
import { cva } from "class-variance-authority";

export interface Props {
  /**
   * @title First banner configuration
   */
  first: SingleBannerProps;
  /**
   * @title Second banner configuration
   */
  second: SingleBannerProps;
  /**
   * @title Banners layout
   */
  layout: "50% 50%" | "66% 33%" | "33% 66%";
}

const containerCVA = cva(["flex flex-col md:flex-row gap-2"]);

const firstContainerCVA = cva(["flex"], {
  variants: {
    layout: {
      "50% 50%": "md:w-1/2",
      "66% 33%": "md:w-2/3",
      "33% 66%": "md:w-1/3",
    },
  },
});

const secondContainerCVA = cva(["flex"], {
  variants: {
    layout: {
      "50% 50%": "md:w-1/2",
      "66% 33%": "md:w-1/3",
      "33% 66%": "md:w-2/3",
    },
  },
});

function DoubleBanner({ first, second, layout }: Props) {
  const containerClass = containerCVA();
  const firstContainerClass = firstContainerCVA({ layout });
  const secondContainerClass = secondContainerCVA({ layout });

  return (
    <div className={containerClass}>
      <div className={firstContainerClass}>
        <SingleBanner {...first} />
      </div>
      <div className={secondContainerClass}>
        <SingleBanner {...second} />
      </div>
    </div>
  );
}

export default DoubleBanner;
