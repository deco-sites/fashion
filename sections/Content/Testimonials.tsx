import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";

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
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
  layout?: {
    variation?: "Grid" | "Slider";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS: Props = {
  "title": "",
  "description": "",
  "testimonials": [{
    "text":
      "Fashion Store is my go-to online destination for all things stylish. Their vast collection of trendy clothes and accessories never disappoints. The quality is exceptional, and the prices are affordable. The website is easy to navigate, and their customer service team is friendly and responsive. I always feel like a fashionista when I shop here!",
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
      "I can't praise Fashion Store enough! Their commitment to staying ahead of the fashion curve is evident in their diverse and up-to-date inventory. Whether I need a casual outfit or a glamorous dress, they have it all. The shopping experience is seamless, and my orders always arrive promptly. Fashion Store is a true fashion lover's paradise!",
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
      "Fashion Store has transformed my wardrobe. Their curated collection of clothing and accessories has helped me discover my personal style. The quality of their products is outstanding, and the prices are unbeatable. The website is visually appealing and easy to navigate. Fashion Store is my trusted companion for staying fashionable and feeling confident!",
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
  "layout": {
    "variation": "Grid",
    "headerAlignment": "center",
  },
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
    <h3 class="text-xl lg:text-2xl">
      {text}
    </h3>
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
  const { title, description, testimonials, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-14 lg:gap-20 lg:py-10 lg:px-0">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />

      {layout?.variation === "Grid" && (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials?.map(({ image, text, user }) => (
            <Testimonal image={image} text={text} user={user} />
          ))}
        </div>
      )}

      {layout?.variation !== "Grid" && (
        <div
          class="relative w-full px-8"
          id={id}
        >
          <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
            {testimonials?.map(({ image, text, user }, index) => (
              <Slider.Item
                index={index}
                class="flex flex-col gap-4 carousel-item w-full"
              >
                <Testimonal image={image} text={text} user={user} />
              </Slider.Item>
            ))}
          </Slider>
          <>
            <div class="z-10 absolute -left-2 lg:-left-8 top-1/2">
              <Slider.PrevButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="z-10 absolute -right-2 lg:-right-8 top-1/2">
              <Slider.NextButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
        </div>
      )}
    </div>
  );
}
