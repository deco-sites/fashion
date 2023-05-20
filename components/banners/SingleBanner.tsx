import { cva } from "class-variance-authority";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  /**
   * @title Container alignment
   * @description Alignment of the container and texts inside
   */
  position: "left" | "middle" | "right";

  tag: string;
  title: string;
  description: string;

  /**
   * @title Desktop background image
   */
  desktop?: LiveImage;

  /**
   * @title Mobile background image
   */
  mobile?: LiveImage;

  /**
   * @title Theme
   */
  theme: "light" | "dark";

  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

const bannerCVA = cva([
  "p-4 md:p-10 flex flex-col w-full relative overflow-hidden",
], {
  variants: {
    position: {
      left: "items-start text-left",
      middle: "items-center text-center",
      right: "items-end text-right",
    },
    theme: {
      light: "bg-base-200 text-base-content",
      dark: "bg-base-content text-white",
    },
  },
});

const containerCVA = cva([
  "max-w-[144px] md:max-w-[420px] flex flex-col relative z-10",
], {
  variants: {
    position: {
      left: "items-start",
      middle: "items-center",
      right: "items-end",
    },
  },
});

const primaryButtonCVA = cva(["px-3 py-2"], {
  variants: {
    theme: {
      light: "bg-primary text-white hover:bg-primary-focus hover:text-white",
      dark: "bg-white text-base-content hover:bg-white hover:text-base-content",
    },
  },
});

const secondaryButtonCVA = cva(["px-3 py-2"], {
  variants: {
    theme: {
      light:
        "bg-transparent border border-secondary-focus text-secondary-focus hover:border-secondary-focus hover:text-secondary-focus hover:bg-transparent",
      dark:
        "bg-transparent border border-white text-white hover:border-white hover:text-white",
    },
  },
});

function SingleBanner(
  {
    tag,
    title,
    description,
    primaryButton,
    secondaryButton,
    theme,
    position,
    mobile,
    desktop,
  }: Props,
) {
  const bannerClass = bannerCVA({ theme, position });
  const containerClass = containerCVA({ position });
  const primaryButtonClass = primaryButtonCVA({ theme });
  const secondaryButtonClass = secondaryButtonCVA({ theme });

  return (
    <div className={bannerClass}>
      <Picture className="absolute inset-0 object-cover z-0">
        {mobile && (
          <Source
            media="(max-width: 767px)"
            src={mobile}
            width={360}
            height={600}
          />
        )}
        {desktop && (
          <Source
            media="(min-width: 768px)"
            src={desktop}
            width={1440}
            height={600}
          />
        )}
        <img class="object-cover w-full h-full" />
      </Picture>

      <div className={containerClass}>
        <span className="text-xs mb-1 md:mb-4 md:text-base">{tag}</span>
        <h2 className="text-xl mb-3 md:mb-6 md:text-5xl">{title}</h2>
        <h4 className="text-sm mb-4 md:mb-6 md:text-lg">{description}</h4>

        <div className="flex flex-col md:flex-row gap-2">
          {primaryButton && (
            <button href={primaryButton.href} className={primaryButtonClass}>
              {primaryButton.label}
            </button>
          )}

          {secondaryButton && (
            <button href={secondaryButton.href} className={secondaryButtonClass}>
              {secondaryButton.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleBanner;
