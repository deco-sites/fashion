import { Product } from "../../components/ProductCard.tsx";
import {
  Installment,
  Item,
  Product as VTEXProduct,
} from "../../vtexTypes.d.ts";

const ACCOUNT_NAME = "lojaoffpremium";

export interface SelectedFacet {
  key: string;
  value: string;
}

export type Sort =
  | "price:desc"
  | "price:asc"
  | "orders:desc"
  | "name:desc"
  | "name:asc"
  | "release:desc"
  | "discount:desc"
  | "";

export interface SearchArgs {
  query?: string;
  /**
   * @description any value greater than or equal to 1
   */
  page: number;
  /**
   * @description any value greater than or equal to 1
   */
  count: number;
  type: "product_search" | "facets";
  sort?: Sort;
  selectedFacets?: SelectedFacet[];
  fuzzy?: "0" | "1" | "auto";
  hideUnavailableItems?: boolean;
}

function addDefaultFacets(facets: SelectedFacet[]): SelectedFacet[] {
  return [...facets, { key: "trade-policy", value: "1" }];
}

export default async function VTEXSearch({
  page,
  query = "",
  count,
  type,
  sort = "",
  selectedFacets = [],
  fuzzy = "auto",
  hideUnavailableItems,
}: SearchArgs): Promise<{ products: VTEXProduct[] }> {
  const params = new URLSearchParams({
    page: (page + 1).toString(),
    count: count.toString(),
    query,
    sort,
    fuzzy,
  });

  if (hideUnavailableItems !== undefined) {
    params.append("hideUnavailableItems", hideUnavailableItems.toString());
  }

  const pathname = addDefaultFacets(selectedFacets)
    .map(({ key, value }) => `${key}/${value}`)
    .join("/");

  const _res = await fetch(
    `https://vtex-search-proxy.global.ssl.fastly.net/${ACCOUNT_NAME}/intelligent-search/${type}/${pathname}?${
      params.toString() ?? ""
    }`
  );

  return await _res.json();
}

const isSellerAvailable = (seller: Item["sellers"][0]) =>
  seller.commertialOffer.Price > 0;

export const mapVTEXProduct =
  (skuId?: string) =>
  ({
    productName: name,
    linkText,
    items,
    brand,
    categories,
    description,
    priceRange,
  }: VTEXProduct): Product => {
    const selectedItem = items.find((item) =>
      skuId ? item.itemId === skuId : item.sellers?.some(isSellerAvailable)
    ) as Item;
    const seller = selectedItem.sellers?.find(isSellerAvailable)!;
    const installment = seller.commertialOffer?.Installments.reduce(
      (result, installment) =>
        installment.Value <= result.Value &&
        installment.NumberOfInstallments >= result.NumberOfInstallments
          ? installment
          : result,
      {
        interestRate: 100.0,
        NumberOfInstallments: 0,
        Value: Infinity,
      } as Installment
    );

    const breadcrumb = [
      { label: brand, url: `/${brand.toLocaleLowerCase()}` },
      ...categories[0]
        .split("/")
        .filter(Boolean)
        .map((label) => ({
          label,
          url: `/search?q=${label}`,
        })),
    ];

    const specifications = selectedItem?.variations?.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur.values[0] }),
      {}
    );

    // This is hardcoded for "Tamanho" variations
    const skuOptions = items
      .filter((item) => item.sellers?.some(isSellerAvailable))
      .map((item) => ({
        variationValue: item?.["Tamanho"]?.[0],
        skuUrl: `/${linkText}-${item.itemId}/p`,
      }))
      .sort((a, z) => a.variationValue - z.variationValue);

    return {
      name,
      id: selectedItem.itemId,
      sellerId: seller.sellerId ?? "1",
      slug: `${linkText}-${selectedItem.itemId}/p`,
      image: {
        src: selectedItem.images[0].imageUrl,
        alt: selectedItem.images[0].imageLabel,
      },
      imageHover: selectedItem.images[1]
        ? {
            src: selectedItem.images[1].imageUrl,
            alt: selectedItem.images[1].imageLabel,
          }
        : undefined,
      price: priceRange.sellingPrice.lowPrice,
      listPrice: priceRange.listPrice.highPrice,
      brand,
      description,
      installments: installment
        ? `${
            installment.NumberOfInstallments ?? 0
          } de R$ ${installment.Value.toFixed(2)} ${
            installment.InterestRate >= 0.0 ? "s/ juros" : "com juros"
          }`
        : "",
      breadcrumb,
      specifications,
      skuOptions,
    };
  };
