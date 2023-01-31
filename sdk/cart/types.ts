export interface OrderForm {
  orderFormId: string;
  salesChannel: string;
  loggedIn: boolean;
  isCheckedIn: boolean;
  storeId: null;
  checkedInPickupPointId: null;
  allowManualPrice: boolean;
  canEditData: boolean;
  userProfileId: null;
  userType: null;
  ignoreProfileData: boolean;
  value: number;
  messages: Message[];
  items: OrderFormItem[];
  selectableGifts: unknown[];
  totalizers: Totalizer[];
  shippingData: ShippingData;
  clientProfileData: null;
  paymentData: PaymentData;
  marketingData: MarketingData;
  sellers: Seller[];
  clientPreferencesData: ClientPreferencesData;
  commercialConditionData: null;
  storePreferencesData: StorePreferencesData;
  giftRegistryData: null;
  openTextField: null;
  invoiceData: null;
  customData: null;
  itemMetadata: ItemMetadata;
  hooksData: null;
  ratesAndBenefitsData: RatesAndBenefitsData;
  subscriptionData: null;
  merchantContextData: null;
  itemsOrdination: null;
}

export interface ClientPreferencesData {
  locale: string;
  optinNewsLetter: null;
}

export interface ItemMetadata {
  items: ItemMetadataItem[];
}

export interface ItemMetadataItem {
  id: string;
  seller: string;
  name: string;
  skuName: string;
  productId: string;
  refId: string;
  ean: null | string;
  imageUrl: string;
  detailUrl: string;
  assemblyOptions: AssemblyOption[];
}

export interface AssemblyOption {
  id: Name;
  name: Name;
  required: boolean;
  inputValues: Schema;
  composition: null;
}

export enum Name {
  AlternativeSubstitute = "ALTERNATIVE_SUBSTITUTE",
  Substituto = "Substituto",
}

export interface Schema {
  Sku: Ean;
  Price: Ean;
  Qtde?: Ean;
  EAN: Ean;
  Measuremt_unit: Ean;
  Unit_multiplier: Ean;
  Quantity: Ean;
}

export interface Ean {
  maximumNumberOfCharacters: number;
  domain: unknown[];
}

export interface OrderFormItem {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId: string;
  refId: string;
  ean: null | string;
  name: string;
  skuName: string;
  modalType: null | string;
  parentItemIndex: null;
  parentAssemblyBinding: null;
  assemblies: unknown[];
  priceValidUntil: Date;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice: null;
  manualPriceAppliedBy: null;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate: null;
  productCategoryIds: string;
  productCategories: { [key: string]: string };
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: Component[];
  bundleItems: unknown[];
  attachments: unknown[];
  attachmentOfferings: AttachmentOffering[];
  offerings: unknown[];
  priceTags: PriceTag[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: null;
  priceDefinition: PriceDefinition;
}

export interface AdditionalInfo {
  dimension: null;
  brandName: null | string;
  brandId: null | string;
  offeringInfo: null;
  offeringType: null;
  offeringTypeId: null;
}

export interface AttachmentOffering {
  name: Name;
  required: boolean;
  schema: Schema;
}

export interface Component {
  uniqueId: string;
  id: string;
  productId: null;
  productRefId: null;
  refId: string;
  ean: string;
  name: string;
  skuName: null;
  modalType: null;
  parentItemIndex: null;
  parentAssemblyBinding: null;
  assemblies: unknown[];
  priceValidUntil: null;
  tax: number;
  price: number;
  listPrice: null;
  manualPrice: null;
  manualPriceAppliedBy: null;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate: null;
  productCategoryIds: null;
  productCategories: AvailableAssociations;
  quantity: number;
  seller: null;
  sellerChain: null[];
  imageUrl: null;
  detailUrl: null;
  components: unknown[];
  bundleItems: unknown[];
  attachments: unknown[];
  attachmentOfferings: unknown[];
  offerings: unknown[];
  priceTags: PriceTag[];
  availability: null;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: null;
  priceDefinition: PriceDefinition;
}

export interface PriceDefinition {
  calculatedSellingPrice: number;
  total: number;
  sellingPrices: SellingPrice[];
}

export interface SellingPrice {
  value: number;
  quantity: number;
}

export interface PriceTag {
  name: string;
  value: number;
  rawValue: number;
  isPercentual: boolean;
  identifier: string;
  owner: string;
}

export type AvailableAssociations = Record<string, string>;

export interface MarketingData {
  utmSource: string;
  utmMedium: null;
  utmCampaign: string;
  utmipage: null;
  utmiPart: null;
  utmiCampaign: null;
  coupon: null;
  marketingTags: string[];
}

export interface Message {
  code: null | string;
  text: string;
  status: string;
  fields: Fields;
}

export interface Fields {
  ean?: string;
  itemIndex?: string;
  skuName?: string;
}

export interface PaymentData {
  updateStatus: string;
  installmentOptions: InstallmentOption[];
  paymentSystems: PaymentSystem[];
  payments: unknown[];
  giftCards: unknown[];
  giftCardMessages: unknown[];
  availableAccounts: unknown[];
  availableTokens: unknown[];
  availableAssociations: AvailableAssociations;
}

export interface InstallmentOption {
  paymentSystem: string;
  bin: null;
  paymentName: null;
  paymentGroupName: null;
  value: number;
  installments: Installment[];
}

export interface Installment {
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  sellerMerchantInstallments?: Installment[];
  id?: ID;
}

export enum ID {
  Carrefourbrfood = "CARREFOURBRFOOD",
}

export interface PaymentSystem {
  id: number;
  name: string;
  groupName: string;
  validator: Validator;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  displayDocument: boolean;
  isCustom: boolean;
  description: null | string;
  requiresAuthentication: boolean;
  dueDate: Date;
  availablePayments: null;
}

export interface Validator {
  regex: null | string;
  mask: null | string;
  cardCodeRegex: CardCodeRegex | null;
  cardCodeMask: null | string;
  weights: number[] | null;
  useCvv: boolean;
  useExpirationDate: boolean;
  useCardHolderName: boolean;
  useBillingAddress: boolean;
}

export enum CardCodeRegex {
  The093$ = "^[0-9]{3}$",
  The094$ = "^[0-9]{4}$",
}

export interface RatesAndBenefitsData {
  rateAndBenefitsIdentifiers: RateAndBenefitsIdentifier[];
  teaser: unknown[];
}

export interface RateAndBenefitsIdentifier {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  matchedParameters: MatchedParameters;
  additionalInfo: null;
}

export interface MatchedParameters {
  "Seller@CatalogSystem": string;
  "productCluster@CatalogSystem"?: string;
  "zipCode@Shipping"?: string;
  slaIds?: string;
}

export interface Seller {
  id: string;
  name: string;
  logo: string;
}

export interface ShippingData {
  address: Address;
  logisticsInfo: LogisticsInfo[];
  selectedAddresses: Address[];
  availableAddresses: Address[];
  pickupPoints: PickupPoint[];
}

export interface Address {
  addressType: string;
  receiverName: null;
  addressId: string;
  isDisposable: boolean;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: null | string;
  neighborhood: string;
  complement: null | string;
  reference: null;
  geoCoordinates: number[];
}

export interface LogisticsInfo {
  itemIndex: number;
  selectedSla: SelectedSla | null;
  selectedDeliveryChannel: SelectedDeliveryChannel;
  addressId: string;
  slas: Sla[];
  shipsTo: string[];
  itemId: string;
  deliveryChannels: DeliveryChannel[];
}

export interface DeliveryChannel {
  id: SelectedDeliveryChannel;
}

export enum SelectedDeliveryChannel {
  Delivery = "delivery",
  PickupInPoint = "pickup-in-point",
}

export enum SelectedSla {
  ClickRetireRJS = "Click & Retire (RJS)",
  Normal = "Normal",
}

export interface Sla {
  id: SelectedSla;
  deliveryChannel: SelectedDeliveryChannel;
  name: SelectedSla;
  deliveryIds: DeliveryID[];
  shippingEstimate: ShippingEstimate;
  shippingEstimateDate: null;
  lockTTL: null;
  availableDeliveryWindows: AvailableDeliveryWindow[];
  deliveryWindow: null;
  price: number;
  listPrice: number;
  tax: number;
  pickupStoreInfo: PickupStoreInfo;
  pickupPointId: null | string;
  pickupDistance: number | null;
  polygonName: string;
  transitTime: TransitTime;
}

export interface AvailableDeliveryWindow {
  startDateUtc: Date;
  endDateUtc: Date;
  price: number;
  lisPrice: number;
  tax: number;
}

export interface DeliveryID {
  courierId: CourierID;
  warehouseId: WarehouseID;
  dockId: DockID;
  courierName: CourierName;
  quantity: number;
  kitItemDetails: unknown[];
}

export enum CourierID {
  Normal111 = "Normal_111",
  R111 = "R_111",
}

export enum CourierName {
  NormalRJS = "Normal RJS",
  RetireRJS = "Retire RJS",
}

export enum DockID {
  D111 = "D_111",
}

export enum WarehouseID {
  The111_2 = "111_2",
}

export interface PickupStoreInfo {
  isPickupStore: boolean;
  friendlyName: null | string;
  address: Address | null;
  additionalInfo: null | string;
  dockId: null;
}

export enum ShippingEstimate {
  The0Bd = "0bd",
  The1M = "1m",
}

export enum TransitTime {
  The0Bd = "0bd",
  The198333333333333M = "1,98333333333333m",
}

export interface PickupPoint {
  friendlyName: string;
  address: Address;
  additionalInfo: string;
  id: string;
  businessHours: BusinessHour[];
}

export interface BusinessHour {
  DayOfWeek: number;
  OpeningTime: string;
  ClosingTime: string;
}

export interface StorePreferencesData {
  countryCode: string;
  saveUserData: boolean;
  timeZone: string;
  currencyCode: string;
  currencyLocale: number;
  currencySymbol: string;
  currencyFormatInfo: CurrencyFormatInfo;
}

export interface CurrencyFormatInfo {
  currencyDecimalDigits: number;
  currencyDecimalSeparator: string;
  currencyGroupSeparator: string;
  currencyGroupSize: number;
  startsWithCurrencySymbol: boolean;
}

export interface Totalizer {
  id: string;
  name: string;
  value: number;
  alternativeTotals?: Totalizer[];
}

export interface OrderFormItemInput {
  id?: number;
  index?: number;
  quantity?: number;
  seller?: string;
  uniqueId?: string;
  // options?: AssemblyOptionInput[]
}
