import type { LoaderFunction } from "$live/std/types.ts";
import type { Product } from "$live/std/commerce/types.ts";

export interface Props {
  /** @description total number of items to display */
  count: number;
}

/**
 * @title NuvemShop Product List Loader
 * @description Uses /products API to get all products
 */
const nuvemShopListLoader: LoaderFunction<Props, Product[]> = async (
  _req,
  _ctx,
  props,
) => {
  // TODO: Use count
  const count = props.count ?? 12;

  const products = await fetch(
    "https://api.nuvemshop.com.br/v1/2734114/products",
    {
      headers: {
        // TODO: Receive this from settings
        "User-Agent": "deco.cx (lucis@deco.cx)",
      },
    },
  )
    .then((response) => response.json()) as NuvemShopProduct[];

  const mappedProducts = products.map((product) =>
    mapNuvemShopProduct(product, "pt")
  );

  console.log({ mappedProducts });

  return {
    data: mappedProducts,
  };
};

export default nuvemShopListLoader;
export interface NuvemShopProduct {
  id: number;
  name: Description;
  description: Description;
  handle: Description;
  attributes: any[];
  published: boolean;
  free_shipping: boolean;
  requires_shipping: boolean;
  canonical_url: string;
  video_url: null;
  seo_title: Description;
  seo_description: Description;
  brand: string;
  created_at: string;
  updated_at: string;
  variants: Variant[];
  tags: string;
  images: Image[];
  categories: Category[];
}

export interface Category {
  id: number;
  name: Description;
  description: Description;
  handle: Description;
  parent: null;
  subcategories: any[];
  seo_title: Description;
  seo_description: Description;
  google_shopping_category: string;
  created_at: string;
  updated_at: string;
}

export interface Description {
  pt: string;
}

export interface Image {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: any[];
  created_at: string;
  updated_at: string;
}

export interface Variant {
  id: number;
  image_id: null;
  product_id: number;
  position: number;
  price: string;
  compare_at_price: string;
  promotional_price: string;
  stock_management: boolean;
  stock: null;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: null;
  values: any[];
  barcode: null;
  mpn: null;
  age_group: string;
  gender: null;
  created_at: string;
  updated_at: string;
}

function mapNuvemShopProduct(
  product: NuvemShopProduct,
  language: "pt",
): Product {
  return {
    "@type": "Product",
    "productID": `${product.id}`,
    "name": product.name[language],
    "description": product.description[language],
    "sku": `${product.variants[0].id}`,
    "brand": product.brand,
    "offers": {
      // TODO: Check if AggregateOffer needs something else
      "@type": "AggregateOffer",
      highPrice: Number(product.variants[0].price),
      lowPrice: Number(product.variants[0].price),
      offerCount: 1,
      offers: [{
        "@type": "Offer",
        price: Number(product.variants[0].price),
        // TODO: Resolver
        availability: true
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        inventoryLevel: { value: 9999 },
        priceSpecification: [{
          "@type": "UnitPriceSpecification",
          priceType: "https://schema.org/ListPrice",
          price: Number(product.variants[0].price),
        }, {
          "@type": "UnitPriceSpecification",
          priceType: "https://schema.org/SalePrice",
          price: Number(product.variants[0].promotional_price),
        }],
      }],
    },
    "image": product.images.map((img) => ({
      "@type": "ImageObject",
      url: img.src,
    })),
    "url": product.canonical_url,
    "category": product.categories[0].name[language],
  };
}
