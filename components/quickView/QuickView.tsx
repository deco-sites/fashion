import { useId } from "preact/hooks";
import Modal from "$store/components/ui/Modal.tsx";
import Loading from "$store/components/ui/Loading.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import InputNumber from "$store/components/ui/InputNumber.tsx";
import Button from "$store/components/ui/Button.tsx";
import SliderJS from "$store/components/ui/SliderJS.tsx";
import { Suspense } from "preact/compat";
import { useSignal } from "@preact/signals";
import ProductSelector from "$store/components/product/ProductVariantSelector.tsx";
import { priceFormatter } from "$store/sdk/formatPrice.ts";
import Avatar from "$store/components/ui/Avatar.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

export type Props = {
  imagePlaceholder?: "left" | "right";
  product: Product;
  open: boolean;
  onClose: () => void;
};

function transformColorValue(color: string) {
  return color.split(" ").join("-").toLowerCase();
}
function QuickView(
  { imagePlaceholder = "left", onClose, open, product }: Props,
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
      <Suspense fallback={<Loading />}>
        <div class="flex flex-wrap max-h-[632px] max-w-[1000px] overflow-hidden">
          <div
            class={`w-8/12 ${imagePlaceholder === "right" ? "order-2" : ""}`}
          >
            <div class="relative" id={id}>
              <Slider class="carousel carousel-center w-full h-full col-span-full row-span-full scrollbar-none gap-6">
                {product.image?.map((image, index) => (
                  <Slider.Item
                    index={index}
                    class="carousel-item w-full h-full"
                  >
                    <img
                      class="w-full h-full object-cover"
                      src={image.url}
                      alt={image.alternateName}
                    />
                    <Slider.PrevButton class="absolute left-8 top-[35vh]">
                      <Icon size={20} id="ChevronLeft" strokeWidth={2} />
                    </Slider.PrevButton>
                    <Slider.NextButton class="absolute right-8 top-[35vh]">
                      <Icon size={20} id="ChevronRight" strokeWidth={2} />
                    </Slider.NextButton>
                  </Slider.Item>
                ))}
              </Slider>
            </div>
          </div>

          <div
            class={`w-4/12 ${
              imagePlaceholder === "right" ? " pl-6 pr-4" : "pr-6 pl-4"
            }`}
          >
            <div class="mt-4 md:mt-20">
              <p class="text-base text-info-content">
                {product.brand}
              </p>
              <h1>
                <span class="text-2xl text-base-500 mt-2 block">
                  {product.name}
                </span>
              </h1>
              <span class="text-sm text-base-400 mt-2 block">
                {product.description}
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
              {/* Como podemos selecionar o sku com o product selector sem linkar para um produto na PDP? apenas selecionando o skuId? */}
              <ProductSelector
                product={product}
                variant="ghost"
                shouldLink={false}
              />
              {/* Isso está assim pq a API não me pareceu muito amigavél para o seletor de cor e não ia dar tempo de alterar o componente product Selector para otimizar isso, mas decidi montar pelo menos o UI*/}
              {productColorVariants
                ? (
                  <div class="mt-7 flex flex-col">
                    <span class="text-sm mb-1">Cor</span>
                    {productColorVariants.map((property) => (
                      <Avatar
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
              <a href="#" class="text-base mt-3 block text-center">
                Product details
              </a>
            </div>
          </div>
        </div>
      </Suspense>
      <SliderJS rootId={id}></SliderJS>
    </Modal>
  );
}

export default QuickView;
