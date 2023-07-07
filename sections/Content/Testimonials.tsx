import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import Container, { HeaderContent, Layout, ExtendedStyle as Style } from "$store/components/ui/Container.tsx"
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import { ButtonColor, buttonClasses } from "$store/components/ui/Types.tsx"

export interface Testimonial {
  text?: string;
  image?: {
    src?: ImageType;
    alt?: string;
  };
  user?: {
    avatar?: ImageType;
    name?: string;
    position?: string;
    company?: string;
  };
}

export interface Props {
  header?: HeaderContent;
  testimonials?: Testimonial[];
  layout?: Layout;
  style?: Style;
  itemsLayout?: {
    variation?: "Grid" | "Slider";
  };
  sliderStyle?: {
    controlsColor?: ButtonColor;
    controlsOutline?: boolean;
  }
}

const DEFAULT_PROPS: Props = {
  header: {
    "title": "",
    "description": "",
  },
  "testimonials": [{
    "text":
      "Fashion Store is my go-to online destination for all things stylish. Their vast collection of trendy clothes and accessories never disappoints. The quality is exceptional, and the prices are affordable.",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Robert Johnson",
      "position": "Founder",
      "company": "RJ Agency",
    },
  }, {
    "text":
      "I can't praise Fashion Store enough! Their commitment to staying ahead of the fashion curve is evident in their diverse and up-to-date inventory. Whether I need a casual outfit or a glamorous dress, they have it all.",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Mary Bush",
      "position": "Director",
      "company": "MB & Co",
    },
  }, {
    "text":
      "Fashion Store has transformed my wardrobe. Their curated collection of clothing and accessories has helped me discover my personal style. The quality of their products is outstanding, and the prices are unbeatable.",
    "image": {
      "src":
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
      "alt": "Testimonal",
    },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Sandra Bullock",
      "position": "Founder",
      "company": "Sanlock",
    },
  }],
};

const Testimonal = ({ image, text, user }: Testimonial) => (
  <div class="flex flex-col items-center gap-9 text-center">
    {image?.src && (
      <Image
        src={image.src}
        alt={image?.alt}
        width={100}
        height={100}
      />
    )}
    <div class="text-xl lg:text-2xl">
      {text}
    </div>
    <div class="flex flex-col items-center gap-4">
      {user?.avatar && (
        <Image
          src={user.avatar}
          alt={user?.name}
          width={60}
          height={60}
          class="rounded-full"
        />
      )}
      <div class="flex flex-col">
        {user?.name &&
          (
            <p class="text-lg">
              {user?.name}
            </p>
          )}
        {(user?.position || user?.company) &&
          (
            <p class="text-lg">
              {user?.position}, {user?.company}
            </p>
          )}
      </div>
    </div>
  </div>
);

export default function Testimonials(
  props: Props,
) {
  const id = useId();
  const { header, testimonials, layout, style, itemsLayout, sliderStyle } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const variation = itemsLayout?.variation || "Grid"
  const controlsClasses = `${buttonClasses[sliderStyle?.controlsColor || "Default"]} ${sliderStyle?.controlsOutline ? "btn-outline" : ""}`
  
  return (
    <Container header={header} layout={layout} style={style}>
      <>
        {variation === "Grid" && (
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {testimonials?.map(({ image, text, user }) => (
              <Testimonal image={image} text={text} user={user} />
            ))}
          </div>
        )}

        {variation !== "Grid" && (
          <div
            class="relative w-full lg:px-8"
            id={id}
          >
            <Slider class="carousel carousel-start lg:gap-8 row-start-2 row-end-5 w-full">
              {testimonials?.map(({ image, text, user }, index) => (
                <Slider.Item
                  index={index}
                  class="flex carousel-item w-full"
                >
                  <Testimonal image={image} text={text} user={user} />
                </Slider.Item>
              ))}
            </Slider>
            <>
              <div class="z-10 absolute -left-3 lg:-left-8 top-1/3">
                <Slider.PrevButton class={`${controlsClasses} btn btn-circle btn-sm lg:btn-md`}>
                  <Icon size={24} id="ChevronLeft" />
                </Slider.PrevButton>
              </div>
              <div class="z-10 absolute -right-3 lg:-right-8 top-1/3">
                <Slider.NextButton class={`${controlsClasses} btn btn-circle btn-sm lg:btn-md`}>
                  <Icon size={24} id="ChevronRight" />
                </Slider.NextButton>
              </div>
            </>
            <SliderJS rootId={id} />
          </div>
        )}
      </>
    </Container>
  );
}
