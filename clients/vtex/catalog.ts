import { Product as VTEXProduct } from "../../vtexTypes.d.ts";

export const VTEXT_ACCOUNT = "lojaoffpremium";

export class VTEXCatalogClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `https://${VTEXT_ACCOUNT}.vtexcommercestable.com.br/api/catalog_system`;
  }

  public async similarProducts(productId: string) {
    const similarProducts = await fetch(
      `${this.baseUrl}/pub/products/crossselling/similars/${productId}`
    ).then((r) => r.json());

    return similarProducts as VTEXProduct[];
  }
}
