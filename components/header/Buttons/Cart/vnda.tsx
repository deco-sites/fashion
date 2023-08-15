import { useCart } from "deco-sites/std/packs/vnda/hooks/useCart.ts";
import Button from "./common.tsx";

function CartButton() {
  const { loading, cart } = useCart();
  const total = cart.value?.orderForm?.total ?? 0;

  return (
    <Button
      items={[]}
      currency="BRL"
      total={total}
      loading={loading.value}
    />
  );
}

export default CartButton;
