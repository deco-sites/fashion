import Image from "./ui/Image.tsx";

function convertImageSrc(imgUrl: string) {
  const url = new URL(imgUrl);
  const pathnameList = url.pathname.split("/");
  pathnameList.pop();

  url.pathname = pathnameList.join("/");
  url.searchParams.delete("v");

  return url.toString();
}

interface Image {
  src: string;
  alt?: string;
}

// TODO: Schema.org
// TODO: Split between product/sku
export interface Product {
  id: string;
  name: string;
  sellerId: string;
  price: number;
  installments: string;
  image: Image;
  imageHover?: Image;
  slug: string;
  brand: string;
  description: string;
// atributos: string;
  // nome_produto: string;
  breadcrumb: Array<{ label: string; url: string }>;
}

export default function ProductCard({
  name,
  price,
  installments,
  image,
  imageHover,
  slug,
  // nome_produto,
}: Product) {
  const imgSrc = convertImageSrc(image.src);
  const imgHoverSrc = imageHover ? convertImageSrc(imageHover?.src) : "";
  return (
    <div class="bg-custom-brown rounded-lg h-full">
      {/** todo hover img with group */}
      <a class="block mb-2 group" href={slug}>
        <Image
          class={`mb-4 mx-auto w-[21rem] md:w-full object-contain rounded-t-lg ${
            imgHoverSrc ? "group-hover:hidden" : ""
          }`}
          src={imgSrc}
          alt={image.alt}
          height={360}
          width={360}
          sizes="(max-width: 640px) 50vw, 25vw"
          loading="lazy"
        />
        {imgHoverSrc && (
          <Image
            class="mb-4 mx-auto w-[21rem] md:w-full object-contain rounded-t-lg hidden group-hover:block"
            src={imgHoverSrc}
            alt={imageHover?.alt}
            height={360}
            width={360}
            sizes="(max-width: 640px) 50vw, 25vw"
            loading="lazy"
          />
        )}
      </a>
      <div class="text-[#777] p-4">
        <h3
          class="text-xs max-h-[80px] overflow-hidden whitespace-nowrap"
          style={{ textOverflow: "ellipsis" }}
        >
          {name.replace(/(.*)(\-).*$/, "$1$2")}
        </h3>
        {/* <h4 class="text-xs mb-6 max-h-[80px] font-bold overflow-hidden whitespace-nowrap" style={{ textOverflow: "ellipsis"}}> */}
        {/* {nome_produto} */}
        {/* </h4> */}
        <div class="fold-medium">
          R$ {typeof price === "number" ? price.toFixed(2) : price}
        </div>
        <div class="text-xs fold-bold text-gray-400">({installments})</div>
      </div>
    </div>
  );
}
