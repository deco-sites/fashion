import {
  itemToAnalyticsItem,
  useCart,
} from "deco-sites/std/packs/vtex/hooks/useCart.ts";
import BaseCart from "../common/Cart.tsx";

function Cart() {
  const { cart, loading, updateItems, addCouponsToCart } = useCart();
  const { items, totalizers } = cart.value ?? { items: [] };
  const total = totalizers?.find((item) => item.id === "Items")?.value || 0;
  const discounts =
    totalizers?.find((item) => item.id === "Discounts")?.value || 0;
  const locale = cart.value?.clientPreferencesData.locale ?? "pt-BR";
  const currency = cart.value?.storePreferencesData.currencyCode ?? "BRL";
  const coupon = cart.value?.marketingData?.coupon ?? undefined;

  return (
    <BaseCart
      items={items.map((item) => ({
        image: { src: item.imageUrl, alt: item.skuName },
        quantity: item.quantity,
        name: item.name,
        price: {
          sale: item.sellingPrice / 100,
          list: item.listPrice / 100,
        },
      }))}
      total={(total - discounts) / 100}
      subtotal={total / 100}
      discounts={discounts / 100}
      locale={locale}
      currency={currency}
      loading={loading.value}
      freeShippingTarget={1000}
      coupon={coupon}
      onAddCoupon={(text) => addCouponsToCart({ text })}
      onUpdateQuantity={(quantity, index) =>
        updateItems({ orderItems: [{ index, quantity }] })}
      itemToAnalyticsItem={(index) => {
        const item = items[index];

        return item && itemToAnalyticsItem({ ...item, coupon }, index);
      }}
    />
  );
}

export default Cart;
