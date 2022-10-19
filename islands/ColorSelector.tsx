import useSWR from "swr";
import { Product } from "../components/ProductCard.tsx";
import { RelatedProductsAsVariations } from "../routes/api/similarProducts.ts";

interface Props {
  product: Product;
}

export default function ColorSelector({ product }: Props) {
  const cartFetcher = () => {
    return fetch(`/api/similarProducts?productId=${product.productId}`).then(
      (r) => r.json()
    );
  };

  // Condition copied from original implementation
  const colorImage = product.images?.find(({ label }) => label === "10");

  const showColorsSelector = Boolean(colorImage);

  const currentOption: RelatedProductsAsVariations = {
    color: product.color ?? "",
    link: window?.location?.href,
    image: {
      src: colorImage?.src ?? "",
      alt: colorImage?.alt ?? "",
    },
  };

  const { data: options } = useSWR<RelatedProductsAsVariations[], Error>(
    `variations-${product.id}`,
    cartFetcher,
    {}
  );

  return (
    showColorsSelector && (
      <div class="flex flex-row items-center">
        <span class="mr-3">Cor: </span>
        <img
          alt={currentOption.image?.alt}
          src={currentOption.image.src}
          width="30"
          height="30"
          class="rounded-1/2 border border-black border-2"
        />
        {options?.map((option) => (
          <a href={option.link}>
            <img
              alt={option.image?.alt}
              src={option.image.src}
              width="30"
              height="30"
              class="rounded-1/2 ml-2"
            />
          </a>
        ))}
      </div>
    )
  );
}
