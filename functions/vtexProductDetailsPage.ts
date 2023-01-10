import { toProductPage } from "$live/std/commerce/vtex/transform.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { ProductDetailsPage } from "$live/std/commerce/types.ts";

import { vtex } from "../clients/instances.ts";

const DEFAULT_SKU = 1023372;

/**
 * @title VTEX Product Page Loader
 * @description Works on routes of type /:slug/p
 */
const productPageLoader: LoaderFunction<null, ProductDetailsPage | null> =
  async (
    _req,
    ctx,
  ) => {
    const skuId = Number(ctx.params.slug?.split("-").pop()) || DEFAULT_SKU;

    // VTEX Searc
    const slugWithoutSkuId = ctx.params.slug?.split("-").reverse().slice(1)
      .reverse().join("-");

    console.log({ slugWithoutSkuId });

    //
    const query = `sku:${skuId}`;

    // search prodcuts on VTEX. Feel free to change any of these parameters
    const { products: [product] } = await vtex.search.products({
      query,
      page: 0,
      count: 1,
    });

    const searchResponse = await fetch(
      `https://lojaoffpremium.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${slugWithoutSkuId}/p`,
    ).then((r) => r.json()) as VTEXLegacySearchResponse[];

    const legacySearchProduct = searchResponse[0];

    // Product not found, return the 404 status code
    if (!product) {
      return {
        data: null,
        status: 404,
      };
    }

    // Convert the VTEX product to schema.org format and return it
    return { data: toProductPage(product, skuId.toString()) };
  };

export default productPageLoader;

export interface VTEXLegacySearchResponse {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  brandImageUrl: null;
  linkText: string;
  productReference: string;
  productReferenceCode: string;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: Date;
  clusterHighlights: ClusterHighlights;
  productClusters: { [key: string]: string };
  searchableClusters: { [key: string]: string };
  categories: string[];
  categoriesIds: string[];
  link: string;
  Marca: string[];
  "Tipo de Produto": string[];
  SALE: string[];
  Coleção: string[];
  "ID Coleção": string[];
  "Coleção Atual": string[];
  "Tabela de Medidas": string[];
  Tamanho: string[];
  Composição: string[];
  Cor: string[];
  "Cores Filtráveis": string[];
  allSpecifications: string[];
  allSpecificationsGroups: string[];
  description: string;
  items: Item[];
  skuSpecifications: SkuSpecification[];
}

export interface ClusterHighlights {
  "1249": string;
}

export interface Item {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  referenceId: ReferenceID[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType: null;
  isKit: boolean;
  images: Image[];
  Tamanho: string[];
  variations: string[];
  sellers: Seller[];
  Videos: any[];
  estimatedDateArrival: null;
}

export interface Image {
  imageId: string;
  imageLabel: string;
  imageTag: string;
  imageUrl: string;
  imageText: ImageText;
  imageLastModified: Date;
}

export enum ImageText {
  The52104418_5361_10TopDeLinhoRosaFucsia =
    "52104418_5361_10-TOP-DE-LINHO-ROSA-FUCSIA",
  The52104418_5361_1TopDeLinhoRosaFucsia =
    "52104418_5361_1-TOP-DE-LINHO-ROSA-FUCSIA",
  The52104418_5361_2TopDeLinhoRosaFucsia =
    "52104418_5361_2-TOP-DE-LINHO-ROSA-FUCSIA",
  The52104418_5361_3TopDeLinhoRosaFucsia =
    "52104418_5361_3-TOP-DE-LINHO-ROSA-FUCSIA",
  The52104418_5361_4TopDeLinhoRosaFucsia =
    "52104418_5361_4-TOP-DE-LINHO-ROSA-FUCSIA",
}

export interface ReferenceID {
  Key: string;
  Value: string;
}

export interface Seller {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
}

export interface CommertialOffer {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments: Installment[];
  DiscountHighLight: any[];
  GiftSkuIds: any[];
  Teasers: any[];
  BuyTogether: any[];
  ItemMetadataAttachment: any[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: Date;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples: DeliverySlaSample[];
  GetInfoErrorMessage: null | string;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
}

export interface DeliverySlaSample {
  DeliverySlaPerTypes: any[];
  Region: null;
}

export interface DeliverySlaSamplesPerRegion {
  "0"?: DeliverySlaSample;
}

export interface Installment {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: Name;
  PaymentSystemGroupName: GroupName;
  Name: string;
}

export enum GroupName {
  CreditCardPaymentGroup = "creditCardPaymentGroup",
  GiftCardPaymentGroup = "giftCardPaymentGroup",
  InstantPaymentPaymentGroup = "instantPaymentPaymentGroup",
}

export enum Name {
  AmericanExpress = "American Express",
  Diners = "Diners",
  Elo = "Elo",
  Hipercard = "Hipercard",
  Mastercard = "Mastercard",
  Pix = "Pix",
  Vale = "Vale",
  Visa = "Visa",
}

export interface PaymentOptions {
  installmentOptions: InstallmentOption[];
  paymentSystems: PaymentSystem[];
  payments: any[];
  giftCards: any[];
  giftCardMessages: any[];
  availableAccounts: any[];
  availableTokens: any[];
}

export interface InstallmentOption {
  paymentSystem: string;
  bin: null;
  paymentName: Name;
  paymentGroupName: GroupName;
  value: number;
  installments: InstallmentElement[];
}

export interface InstallmentElement {
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  sellerMerchantInstallments?: InstallmentElement[];
  id?: ID;
}

export enum ID {
  Lojaoffpremium = "LOJAOFFPREMIUM",
}

export interface PaymentSystem {
  id: number;
  name: Name;
  groupName: GroupName;
  validator: null;
  stringId: string;
  template: Template;
  requiresDocument: boolean;
  isCustom: boolean;
  description: null;
  requiresAuthentication: boolean;
  dueDate: Date;
  availablePayments: null;
}

export enum Template {
  CreditCardPaymentGroupTemplate = "creditCardPaymentGroup-template",
  GiftCardPaymentGroupTemplate = "giftCardPaymentGroup-template",
  InstantPaymentPaymentGroupTemplate = "instantPaymentPaymentGroup-template",
}

export interface SkuSpecification {
  field: Field;
  values: Value[];
}

export interface Field {
  id: number;
  name: string;
  isActive: boolean;
  position: number;
  type: string;
}

export interface Value {
  id: string;
  name: string;
  position: number;
}
