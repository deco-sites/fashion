import { Handlers } from "$fresh/server.ts";
import { VTEXCatalogClient } from "../../clients/vtex/catalog.ts";
import { isSellerAvailable } from "$live/std/commerce/clients/vtex.ts";
import { Product } from "../../vtexTypes.d.ts";

export interface RelatedProductsAsVariations {
  link: string;
  color: string;
  image: {
    src: string;
    alt: string;
  };
}

export const handler: Handlers = {
  async GET(req) {
    const catalog = new VTEXCatalogClient();
    const url = new URL(req.url);
    const productId = url.searchParams.get("productId");

    if (typeof productId !== "string") {
      return Response.json(
        { error: "Informe um 'productId' para buscar produtos similares" },
        { status: 400 },
      );
    }

    const products = await catalog.similarProducts(productId);

    const availableProducts = products.filter(({ items }) =>
      items.some(({ sellers }) => sellers.some(isSellerAvailable))
    );

    const accumulateByColor = availableProducts.reduce((acc, cur) => {
      const currentColor = cur?.["Cor"]?.[0];

      if (!currentColor) {
        return acc;
      }

      if (!acc[currentColor]) {
        acc[currentColor] = [];
      }

      acc[currentColor].push(cur);

      return acc;
    }, {} as Record<string, Product[]>);

    const variationsByColor = Object.keys(accumulateByColor).map((color) => {
      /**
       * TODO: Receive current selected variations (a.k.a Tamanho) and select the best product based on that.
       *
       * Problem: In the current store, if you have selected a specific size but switches the color,
       * the size will return to the default one because it's not taken into account when selecting
       * the best products to show for that color.
       */
      const bestMatchProduct = accumulateByColor[color][0];

      const bestMatchSku = bestMatchProduct.items.find(({ sellers }) =>
        sellers.some(isSellerAvailable)
      );

      // TODO: Current implementation gets the last one. I don't know why.
      const bestMatchImage =
        bestMatchSku?.images[bestMatchSku?.images.length - 1];

      return {
        // TODO: We should be generating this in only one place
        link: `/${bestMatchProduct.linkText}-${bestMatchSku?.itemId}/p`,
        color,
        image: {
          alt: bestMatchProduct.productName,
          src: bestMatchImage?.imageUrl,
        },
      } as RelatedProductsAsVariations;
    });

    return Response.json(variationsByColor);
  },
};
