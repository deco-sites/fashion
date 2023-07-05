import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";
import SliderJS from "$store/islands/SliderJS.tsx";
import Container, { HeaderContent, Layout, Style } from "$store/components/ui/Container.tsx"
import { getButtonClasses } from "$store/components/ui/Types.tsx"

export interface Category {
  tag?: string;
  label: string;
  description?: string;
  href?: string;
  image?: LiveImage;
  buttonText?: string;
}

export interface Props {
  header?: HeaderContent;
  list?: Category[];
  layout?: Layout;
  style?: Style;
  cardStyle?: {
    textPosition?: "Top" | "Bottom";
    textAlignment?: "Center" | "Left";
  };
}

function CardText(
  { tag, label, description, alignment }: {
    tag?: string;
    label?: string;
    description?: string;
    alignment?: "Center" | "Left";
  },
) {
  return (
    <div
      class={`flex flex-col ${
        alignment === "Center" ? "text-center" : "text-left"
      }`}
    >
      {tag && <div class="text-sm text-primary">{tag}</div>}
      {label && <h3 class="text-lg text-base-content">{label}</h3>}
      {description && <div class="text-sm text-neutral">{description}</div>}
    </div>
  );
}

function CategoryList(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "10% off",
        href: "/masculino",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/5a8edfec-400f-421f-b436-4ce23d2b13e7",
        label: "Dresses",
        description: "Amazing",
        buttonText: "Ver produtos",
      },
      {
        tag: "10% off",
        href: "/feminino",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7363da7a-8530-4e19-8b76-6f92c4da3f1e",
        label: "Bags",
        description: "Bags",
        buttonText: "Ver produtos",
      },
      {
        tag: "10% off",
        href: "/",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/33755494-9104-410e-9e48-256aef7fc113",
        label: "Shoes",
        description: "New deals",
        buttonText: "Ver produtos",
      },
      {
        tag: "10% off",
        href: "/",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/2d507523-6f5a-4bb5-98d5-d9c944b35845",
        label: "Jackets",
        description: "New colors",
        buttonText: "Ver produtos",
      },
      {
        tag: "10% off",
        href: "/",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/907b5510-d4a0-4d75-b2bf-c0c9e9b0ba68",
        label: "Jeans",
        description: "Amazing",
        buttonText: "Ver produtos",
      },
      {
        href: "/",
        image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/40eb7c93-59a7-4963-9917-32508c56e4cc",
        label: "Shorts",
        description: "Summer",
        buttonText: "Ver produtos",
      }
    ],
    layout,
    style,
    cardStyle,
  } = props;

  return (
    <Container header={header} layout={layout} style={style}>
      <div id={id} class="w-full relative grid">
        <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5">
          {list.map((
            { tag, label, description, href, image, buttonText },
            index,
          ) => (
            <Slider.Item
              index={index}
              class="flex flex-col gap-4 carousel-item"
            >
              <a
                href={href}
                class="flex flex-col gap-4 lg:w-[280px] w-40 lg:h-auto"
              >
                {cardStyle?.textPosition === "Top" &&
                  (
                    <CardText
                      tag={tag}
                      label={label}
                      description={description}
                      alignment={cardStyle?.textAlignment}
                    />
                  )}
                {image &&
                  (
                    <figure>
                      <Image
                        class="card w-full"
                        src={image}
                        alt={description || label || tag}
                        width={160}
                        height={195}
                        loading="lazy"
                      />
                    </figure>
                  )}
                {cardStyle?.textPosition === "Bottom" &&
                  (
                    <CardText
                      tag={tag}
                      label={label}
                      description={description}
                      alignment={cardStyle?.textAlignment}
                    />
                  )}
              </a>
              {buttonText &&
                <a href={href} class={getButtonClasses(style?.button || {})}>{buttonText}</a>}
            </Slider.Item>
          ))}
        </Slider>
        <>
          <div class="z-10 absolute -left-2 lg:-left-8 top-1/3">
            <Slider.PrevButton class="btn btn-circle btn-outline">
              <Icon size={20} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="z-10 absolute -right-2 lg:-right-8 top-1/3">
            <Slider.NextButton class="btn btn-circle btn-outline">
              <Icon size={20} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>

        <SliderJS rootId={id} />
      </div>
    </Container>
  );
}

export default CategoryList;
