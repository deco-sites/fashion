import { Product } from "../../components/ProductCard.tsx";
import { Installment, Product as VTEXProduct } from "../../vtexTypes.d.ts";

export default async function VTEXSearch(
  { facets = "", searchParams }: {
    facets?: string;
    searchParams?: URLSearchParams;
  },
): Promise<VTEXProduct[]> {
  const _res = await fetch(
    `https://vtex-search-proxy.global.ssl.fastly.net/zeedog/${facets}?${
      searchParams?.toString() ?? ""
    }`,
  );
  return await _res.json();
}

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
      .map((label) => ({
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
