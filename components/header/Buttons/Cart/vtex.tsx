import { useCart } from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import Button from "./common.tsx";

function CartButton() {
  const { loading, cart } = useCart();
  const totalizers = cart.value?.totalizers ?? [];
  const currency = cart.value?.storePreferencesData.currencyCode ?? "BRL";
  const total = totalizers.find((item) => item.id === "Items")?.value ?? 0;
  const discounts = totalizers.find((item) => item.id === "Discounts")?.value ??
    0;

  return (
    <Button
      items={[]}
      currency={currency}
      total={(total - discounts) / 100}
      loading={loading.value}
    />
  );
}

export default CartButton;
