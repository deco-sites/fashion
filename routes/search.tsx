import {
  createLiveHandler,
  LivePage,
  loadLiveComponents,
} from "$live/live.tsx";
import { Product } from "../components/ProductCard.tsx";
import VTEXSearchLoader from "../loaders/vtex/search.ts";
import { Installment, Product as VTEXProduct } from "../vtexTypes.d.ts";

export const mapVTEXProduct = ({
  productName: name,
  linkText,
  items,
  brand,
  nome_produto,
  Atributos_Especiais,
  categories,
  Descricao_Produto,
}: VTEXProduct): Product => {
  const [firstItem] = items;
  const installment =
    firstItem?.sellers?.[0]?.commertialOffer?.Installments.reduce(
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
    { label: "Zee.Dog", url: "https://zeedog.deco.page" },
    ...categories[0]
      .split("/")
      .filter(Boolean)
      .map((label, i) => ({
        label,
        url: `https://zeedog.deco.page/search?q=${label}`,
      })),
  ];
  return {
    name,
    id: firstItem.itemId,
    sellerId: firstItem.sellers?.[0].sellerId ?? "1",
    slug: `${linkText}/p`,
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
    price: firstItem.sellers?.[0].commertialOffer.Price ?? 0,
    brand,
    description: Descricao_Produto[0] ?? "",
    nome_produto: nome_produto[0] ?? "",
    installments: installment
      ? `até ${installment.NumberOfInstallments ?? 0} ${
          installment.InterestRate >= 0.0 ? "s/ juros" : "com juros"
        }`
      : "",
    atributos: Atributos_Especiais[0] ?? "",
    breadcrumb,
  };
};

export const handler = createLiveHandler({
  loader: async (req, ctx) => {
    const url = new URL(req.url);
    const searchTerm = url.searchParams.get("q") ?? "";

    if (!url.searchParams.get("_to")) {
      url.searchParams.set("_to", "4");
    }

    if (!url.searchParams.get("_from")) {
      url.searchParams.set("_from", "0");
    }

    const [pageData, products] = await Promise.all([
      loadLiveComponents(req, ctx),
      VTEXSearchLoader({
        facets: searchTerm,
        searchParams: url.searchParams,
      }).then((products) => products.map(mapVTEXProduct)),
    ]);
    const { components: rawComponents } = pageData;

    const components = rawComponents?.map((c) => {
      if (c.component === "Header") {
        c.props = {
          ...(c.props ?? {}),
          query: new URL(req.url).searchParams.get("q"),
        };
      }

      if (c.component !== "ProductShelf") {
        return c;
      }

      return {
        component: c.component,
        props: { title: "Search for " + searchTerm, loaderData: products },
      };
    });

    return {
      ...pageData,
      components,
    };
  },
});

export default LivePage;
