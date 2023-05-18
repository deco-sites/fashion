import ProductCards from "deco-sites/fashion/components/product/ProductCard.tsx";

export type Props = {
  card: "ProductCard1" | "ProductCard2";
};

function Section({ card }: Props) {
  const Card = ProductCards[card];

  return <Card></Card>;
}

export default Section;
