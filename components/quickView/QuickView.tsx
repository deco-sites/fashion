import { useId } from "preact/hooks";
import Modal from "./QuickViewModal.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import InputNumber from "./QuickViewInputNumber.tsx";
import Button from "./QuickViewButton.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { useSignal } from "@preact/signals";
import QuickViewSelector from "./QuickViewSelector.tsx";
import { priceFormatter } from "$store/sdk/formatPrice.ts";
import QuickViewAvatar from "./QuickViewAvatar.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

export type Props = {
  imagePlaceholder?: "left" | "right";
  product: Product;
  open: boolean;
  onClose: () => void;
  seeMoreButton?: {
    href: string;
    target: string;
    label: string;
  };
};

const HEIGHT = 632;
const WIDTH = 600;

function transformColorValue(color: string) {
  return color.split(" ").join("-").toLowerCase();
}
function QuickView(
  { imagePlaceholder = "left", onClose, open, product, seeMoreButton }: Props,
) {
  const id = `product-image-gallery:${useId()}`;

  // Acredito que o correto seria usar o additionalProperty para pegar a cor do produto dentro do productSelector

  const productColorVariants = (product.isVariantOf || {})?.additionalProperty
    ?.filter((
      property,
    ) => property.name === "Cor");

  const colorSelected = useSignal(
    productColorVariants?.[0]?.value || "",
  );

  return (
    <Modal
      mode="center"
      headerBorder="borderless"
      headerPosition="absolute-right"
      loading="lazy"
      open={open}
      onClose={onClose}
    >
      <div class="flex max-h-full md:max-h-[632px] max-w-[1000px] md:min-w-[700px] lg:min-w-[1000px] md:overflow-hidden flex-col md:flex-row">
        <div
          class={`w-full md:w-8/12 ${
            imagePlaceholder === "right" ? "order-2" : ""
          } md:max-h-[632px] md:max-w-[600px] md:min-h-[632px] md:min-w-[600px]`}
        >
          <div class="relative" id={id}>
            <div className="absolute top-7 right-7 left-auto">
              {/* Não temos o ícone do figma disponível */}
              <Icon
                class="text-base-400"
                width={20}
                height={20}
                id="Heart"
                strokeWidth={1}
              />
            </div>
            <div className="absolute top-4 left-4 right-auto bg-accent py-1 px-2">
              <p className="text-sm">40% OFF</p>
            </div>
            <Slider class="carousel carousel-center w-full h-full col-span-full row-span-full scrollbar-none gap-6">
              {product.image?.map((image, index) => (
                <Slider.Item
                  index={index}
                  class="carousel-item w-full h-full"
                  key={image.alternateName}
                >
                  <img
                    class="w-full h-full object-cover"
                    src={image.url}
                    alt={image.alternateName}
                    height={HEIGHT}
                    width={WIDTH}
                  />
                  <Slider.PrevButton class="absolute left-8 top-1/2 disabled:opacity-30">
                    <Icon size={20} id="ChevronLeft" strokeWidth={2} />
                  </Slider.PrevButton>
                  <Slider.NextButton class="absolute right-8 top-1/2 disabled:opacity-30">
                    <Icon size={20} id="ChevronRight" strokeWidth={2} />
                  </Slider.NextButton>
                </Slider.Item>
              ))}
            </Slider>
          </div>
        </div>

        <div
          class={`w-full md:w-4/12 flex-1 ${
            imagePlaceholder === "right" ? " pl-6 pr-4" : "pr-6 pl-4"
          }`}
        >
          <div class="mt-4 md:mt-20">
            <p class="text-base text-info-content">
              {product.brand || "Marca"}
            </p>
            <h1>
              <span class="text-2xl text-base-500 mt-2 block">
                {product.name || "Nome do produto"}
              </span>
            </h1>
            <span class="text-sm text-base-400 mt-2 block truncate">
              {product.description || "Descrição do produto"}
            </span>
            <div class="flex flex-col my-6">
              <span class="line-through text-base-300 text-xs">
                {priceFormatter(product?.offers?.priceCurrency || "pt-br")
                  .format(
                    product?.offers?.highPrice || 0,
                  )}
              </span>
              <span class="text-2xl text-accent">
                {priceFormatter(product?.offers?.priceCurrency || "pt-br")
                  .format(
                    product?.offers?.lowPrice || 0,
                  )}
              </span>
            </div>
            {/* TODO: Como podemos selecionar o sku com o product selector sem linkar para um produto na PDP? apenas selecionando o skuId? */}
            <QuickViewSelector
              product={product}
              variant="ghost"
              shouldLink={false}
            />
            {/* TODO: Isso está assim pq a API não me pareceu muito amigavél para o seletor de cor e não ia dar tempo de alterar o componente product Selector para otimizar isso, mas decidi montar pelo menos o UI*/}
            {productColorVariants
              ? (
                <div class="mt-7 flex flex-col">
                  <span class="text-sm mb-1">Cor</span>
                  {productColorVariants.map((property) => (
                    <QuickViewAvatar
                      key={property.value}
                      content={transformColorValue(property?.value || "")}
                      variant={colorSelected.value === property.value
                        ? "active"
                        : "default"}
                    />
                  ))}
                </div>
              )
              : null}

            <div class="mt-7">
              <InputNumber />
            </div>
            <Button
              wide
              square
              class="mt-7"
            >
              <span class="text-base-500">Comprar</span>
            </Button>
            <a
              href={seeMoreButton?.href}
              target={seeMoreButton?.target}
              class="text-base mt-3 block text-center"
            >
              {seeMoreButton?.label}
            </a>
          </div>
        </div>
      </div>

      <SliderJS rootId={id}></SliderJS>
    </Modal>
  );
}

export default QuickView;
