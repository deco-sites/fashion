import { Product } from "../../components/ProductCard.tsx";
import {
  Installment,
  Item,
  Product as VTEXProduct,
} from "../../vtexTypes.d.ts";
import { VTEX_ACCOUNT } from "./checkout.ts";

export default class VTEXIntelligentSearchClient {
  private baseUrl: string;

  constructor(account?: string) {
    this.baseUrl = `https://vtex-search-proxy.global.ssl.fastly.net/${
      account ?? VTEX_ACCOUNT
    }/intelligent-search`;
  }

  private async _search<T>({
    page,
    query = "",
    count,
    type,
    sort = "",
    selectedFacets = [],
    fuzzy = "auto",
    hideUnavailableItems,
  }: SearchArgs): Promise<T> {
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

    console.log(
      `${this.baseUrl}/${type}/${pathname}?${params.toString() ?? ""}`
    );

    const data = await fetch(
      `${this.baseUrl}/${type}/${pathname}?${params.toString() ?? ""}`
    ).then((r) => r.json());

    return data as T;
  }

  public search(args: Omit<SearchArgs, "type">) {
    return this._search<ProductsResponse>({ ...args, type: "product_search" });
  }

  public facets(args: Omit<SearchArgs, "type">) {
    return this._search<FacetsResponse>({ ...args, type: "facets" });
  }
}

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

export const isSellerAvailable = (seller: Item["sellers"][0]) =>
  seller.commertialOffer.Price > 0;

export const mapVTEXIntelligentSearchProduct =
  (skuId?: string) =>
  ({
    productId,
    productName: name,
    linkText,
    items,
    brand,
    categories,
    description,
    priceRange,
    Cor,
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
      ...categories?.[0]
        .split("/")
        .filter(Boolean)
        .map((label) => ({
          label,
          url: `/search?ft=${label}`,
        })),
    ];

    const specifications = selectedItem?.variations?.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur.values?.[0] }),
      {}
    );

    // This is hardcoded for "Tamanho" variations
    const skuOptions = items
      .filter((item) => item.sellers?.some(isSellerAvailable))
      .map((item) => ({
        variationValue: item?.["Tamanho"]?.[0],
        skuUrl: `/${linkText}-${item.itemId}/p`,
      }))
      .sort(
        (a, z) => parseInt(a.variationValue, 10) - parseInt(z.variationValue)
      );

    const prices = priceRange
      ? {
          price: priceRange?.sellingPrice?.lowPrice,
          listPrice: priceRange?.listPrice?.highPrice,
        }
      : {
          price: seller.commertialOffer.Price,
          listPrice: seller.commertialOffer.ListPrice,
        };

    return {
      name,
      // TODO: This is itemId/skuId. Solve this ambiguity.
      id: selectedItem.itemId,
      productId,
      sellerId: seller.sellerId ?? "1",
      slug: `${linkText}-${selectedItem.itemId}/p`,
      image: {
        src: selectedItem.images[0].imageUrl,
        alt: selectedItem.images[0].imageLabel,
      },
      images: selectedItem.images.map(
        ({ imageUrl, imageLabel, imageText }) => ({
          src: imageUrl,
          alt: imageText,
          label: imageLabel,
        })
      ),
      imageHover: selectedItem.images[1]
        ? {
            src: selectedItem.images[1].imageUrl,
            alt: selectedItem.images[1].imageLabel,
          }
        : undefined,
      ...prices,
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
      color: Cor?.[0],
    };
  };

export interface ProductsResponse {
  products: VTEXProduct[];
}
export interface FacetsResponse {
  facets: Facet[];
  sampling: boolean;
  breadcrumb: Breadcrumb[];
  queryArgs: QueryArgs;
  translated: boolean;
}

export interface Breadcrumb {
  name: string;
  href: string;
}

export interface Facet {
  values: Value[];
  type: Type;
  name: string;
  hidden: boolean;
  key: Key;
  quantity: number;
}

export enum Key {
  Brand = "brand",
  Category1 = "category-1",
  Category2 = "category-2",
  Category3 = "category-3",
  Colecao = "colecao",
  Cor = "cor",
  CoresFiltraveis = "cores-filtraveis",
  Genero = "genero",
  IDColecao = "id-colecao",
  Marca = "marca",
  Price = "price",
  Sale = "sale",
  Tamanho = "tamanho",
}

export enum Type {
  Pricerange = "PRICERANGE",
  Text = "TEXT",
}

export interface Value {
  quantity: number;
  name: string;
  key: Key;
  selected: boolean;
  range?: Range;
  id?: string;
  value?: string;
  href?: string;
}

export interface Range {
  from: number;
  to: number;
}

export interface QueryArgs {
  query: string;
  selectedFacets: SelectedFacet[];
}

export interface SelectedFacet {
  key: string;
  value: string;
}
