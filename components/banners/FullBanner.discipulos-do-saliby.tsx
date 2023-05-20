import type { Props as SingleBannerProps } from "$store/components/banners/SingleBanner.tsx";
import SingleBanner from "$store/components/banners/SingleBanner.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { cva } from "class-variance-authority";
import { useId } from "preact/hooks";

export interface Props {
  banners: SingleBannerProps[];
  interval?: number;
  style: "dots" | "lines";
}

function BannerItem(banner: SingleBannerProps) {
  return <SingleBanner {...banner} />;
}

const dotsCVA = cva([], {
  variants: {
    style: {
      dots: "rounded-full w-2 h-2 bg-base-content group-disabled:bg-base-300",
      lines:
        "w-16 sm:w-20 h-0.5 rounded  group-disabled:animate-progress bg-gradient-to-r from-base-content from-[length:var(--dot-progress)] to-base-300 to-[length:var(--dot-progress)]",
    },
  },
});

function Dots({ banners, interval, style }: Props) {
  const dotsClass = dotsCVA({ style });

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />

      <ul class="carousel justify-center absolute bottom-0 left-0 right-0 gap-2">
        {banners?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div
                className={dotsClass}
                style={{ animationDuration: `${interval}s` }}
              >
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3 md:px-10 pb-4">
      <div class="flex items-center justify-center z-10">
        <Slider.PrevButton class="rounded-full w-6 h-6 md:w-10 md:h-10 bg-white border border-base-300 grid place-items-center">
          <Icon
            class="text-base-content"
            size={16}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10">
        <Slider.NextButton class="rounded-full w-6 h-6 md:w-10 md:h-10 bg-white border border-base-300 grid place-items-center">
          <Icon
            class="text-base-content"
            size={16}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function FullBanner({ banners, interval, style }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="relative pb-4"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full scrollbar-none gap-6">
        {banners?.map((banner, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItem {...banner} />
          </Slider.Item>
        ))}
      </Slider>

      <Buttons />

      <Dots banners={banners} interval={interval} style={style} />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default FullBanner;
