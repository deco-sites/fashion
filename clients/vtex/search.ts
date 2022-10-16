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

export default async function VTEXSearch(
  {
    page,
    query = "",
    count,
    type,
    sort = "",
    selectedFacets = [],
    fuzzy = "auto",
    hideUnavailableItems,
  }: SearchArgs,
): Promise<{ products: VTEXProduct[] }> {
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

  const pathname = addDefaultFacets(selectedFacets).map(({ key, value }) =>
    `${key}/${value}`
  )
    .join("/");

  const _res = await fetch(
    `https://vtex-search-proxy.global.ssl.fastly.net/${ACCOUNT_NAME}/intelligent-search/${type}/${pathname}?${
      params.toString() ?? ""
    }`,
  );

  return await _res.json();
}

const isSellerAvailable = (seller: Item["sellers"][0]) =>
  seller.commertialOffer.Price > 0;

export const mapVTEXProduct = ({
  productName: name,
  linkText,
  items,
  brand,
  categories,
  description,
}: VTEXProduct): Product => {
  const firstItem = items.find((item) =>
    item.sellers?.find(isSellerAvailable)
  ) as Item;
  const seller = firstItem.sellers?.find(isSellerAvailable)!;
  const installment = seller.commertialOffer?.Installments
    .reduce(
      (result, installment) =>
        installment.Value <= result.Value &&
          installment.NumberOfInstallments >= result.NumberOfInstallments
          ? installment
          : result,
      {
        interestRate: 100.0,
        NumberOfInstallments: 0,
        Value: Infinity,
      } as Installment,
    );
  const breadcrumb = [
    { label: "Zee.Dog", url: "https://zeedog.deco.page" },
    ...categories[0]
      .split("/")
      .filter(Boolean)
      .map((label) => ({
        label,
        url: `https://zeedog.deco.page/search?q=${label}`,
      })),
  ];

  return {
    name,
    id: firstItem.itemId,
    sellerId: seller.sellerId ?? "1",
    slug: `${linkText}-${firstItem.itemId}/p`,
    image: {
      src: firstItem.images[0].imageUrl,
      alt: firstItem.images[0].imageLabel,
    },
    imageHover: firstItem.images[1]
      ? {
        src: firstItem.images[1].imageUrl,
        alt: firstItem.images[1].imageLabel,
      }
      : undefined,
    price: seller.commertialOffer.Price ?? 0,
    brand,
    description,
    installments: installment
      ? `até ${installment.NumberOfInstallments ?? 0} ${
        installment.InterestRate >= 0.0 ? "s/ juros" : "com juros"
      }`
      : "",
    breadcrumb,
  };
};
