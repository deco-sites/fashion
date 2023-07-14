import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { useId } from "preact/hooks";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Container, { HeaderContent, Layout, ExtendedStyle as Style } from "$store/components/ui/Container.tsx"
import { ButtonColor, buttonClasses } from "$store/components/ui/Types.tsx"

export interface Props {
  products: LoaderReturnType<Product[] | null>;
  header?: HeaderContent;
  layout?: Layout;
  style?: Style;
  cardLayout?: cardLayout;
  sliderStyle?: {
    controlsColor?: ButtonColor;
    controlsOutline?: boolean;
  }
}

function ProductShelf({
  products,
  header,
  layout,
  style,
  cardLayout,
  sliderStyle,
}: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  const controlsClasses = `${buttonClasses[sliderStyle?.controlsColor || "Default"]} ${sliderStyle?.controlsOutline ? "btn-outline" : ""}`

  return (
    <Container header={header} layout={layout} style={style}>
      <div id={id} class="relative grid grid-flow-col">
        <Slider class="w-full carousel carousel-center sm:carousel-end gap-6 col-span-full">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[270px] sm:w-[292px] first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
            >
              <ProductCard
                product={product}
                itemListName={header?.title}
                layout={cardLayout}
                btnStyle={style?.button || {}}
              />
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
        <SendEventOnLoad
          event={{
            name: "view_item_list",
            params: {
              item_list_name: header?.title,
              items: products.map((product) =>
                mapProductToAnalyticsItem({
                  product,
                  ...(useOffer(product.offers)),
                })
              ),
            },
          }}
        />
      </div>
    </Container>
  );
}

export default ProductShelf;
