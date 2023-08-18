import { itemToAnalyticsItem, useCart } from "apps/vnda/hooks/useCart.ts";
import Button from "./common.tsx";

function CartButton() {
  const { loading, cart } = useCart();
  const total = cart.value?.orderForm?.total ?? 0;
  const items = cart.value?.orderForm?.items ?? [];

  return (
    <Button
      items={items.map(itemToAnalyticsItem)}
      currency="BRL"
      total={total}
      loading={loading.value}
    />
  );
}

export default CartButton;
