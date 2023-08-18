import { PropertyValue } from "apps/commerce/types.ts";
import { useCart } from "apps/vnda/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem" | "platform"> {
  additionalProperty: PropertyValue[];
}

function AddToCartButton(props: Props) {
  const { addItem } = useCart();
  const onAddItem = () =>
    addItem({
      quantity: 1,
      itemId: props.productID,
      attributes: Object.fromEntries(
        props.additionalProperty.map(({ name, value }) => [name, value]),
      ),
    });

  return <Button onAddItem={onAddItem} {...props} />;
}

export default AddToCartButton;
