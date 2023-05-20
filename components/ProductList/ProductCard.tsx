import Image from "deco-sites/std/components/Image.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  product: Product;
}

function StarIcon({ fill = "none", stroke }: {
  fill?: string;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={stroke ?? fill}
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function ProductCard({
  product,
}: Props) {
  console.log("🚀 ~ file: ProductCard.tsx:23 ~ product:", product);
  const image = product.image ? product.image[0].url : "";

  return (
    <div className="h-[504px] w-[316px] flex flex-col p-2 gap-4">
      <div className="w-full h-[276px]">
        <Image
          src={image || ""}
          alt={"image.alt"}
          width={276}
          height={276}
          loading="lazy"
        />
      </div>
      <div>
        <p className="text-sm text-info-content text-info-content">
          Label
        </p>
        <h4 className="text-lg text-base-500">
          Product Name
        </h4>
        <p className="text-sm text-base-400">Description of the product</p>
      </div>
      <div>
        <p className="text-xs text-base-400">$ 999,00--</p>
        <div className="text-sm text-light">
          <span className="text-xl text-accent mr-2">$ 999,00</span>ou 8x de
          R$57,30
        </div>
      </div>
      <div className="flex gap-1 ">
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="#FFC240" />
        <StarIcon fill="none" stroke="#FFC240" />
        <p className="text-base-400">(10)</p>
      </div>
    </div>
  );
}

export default ProductCard;
