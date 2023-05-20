import Header, { type Props as HeaderProps } from "./Header.tsx";

export interface Props {
  header: HeaderProps;
}

function ProductList({
  header,
}: Props) {
  return (
    <div className="p-6 w-full">
      <Header {...header} />
    </div>
  );
}

export default ProductList;
