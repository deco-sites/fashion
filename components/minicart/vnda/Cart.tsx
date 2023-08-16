import {
  itemToAnalyticsItem,
  useCart,
} from "deco-sites/std/packs/vnda/hooks/useCart.ts";
import BaseCart from "../common/Cart.tsx";

const normalizeUrl = (url: string) =>
  url.startsWith("//") ? `https:${url}` : url;

function Cart() {
  const { cart, loading, updateItem, updateCoupon } = useCart();
  const items = cart.value?.orderForm?.items ?? [];

  const total = cart.value?.orderForm?.total ?? 0;
  const subtotal = cart.value?.orderForm?.subtotal ?? 0;
  const discounts = cart.value?.orderForm?.subtotal_discount ?? 0;
  const locale = "pt-BR";
  const currency = "BRL";
  const coupon = cart.value?.orderForm?.coupon_code ?? undefined;

  return (
    <BaseCart
      items={items.map((item) => ({
        image: { src: normalizeUrl(item.image_url), alt: item.product_name },
        quantity: item.quantity,
        name: item.variant_name,
        price: {
          sale: item.variant_price,
          list: item.variant_price,
        },
      }))}
      total={total}
      subtotal={subtotal}
      discounts={discounts}
      locale={locale}
      currency={currency}
      loading={loading.value}
      freeShippingTarget={1000}
      coupon={coupon}
      onAddCoupon={(code) => updateCoupon({ code })}
      onUpdateQuantity={(quantity: number, index: number) =>
        updateItem({ quantity, itemId: items[index].id })}
      itemToAnalyticsItem={(index) => {
        const item = items[index];

        return item && itemToAnalyticsItem(item, index);
      }}
    />
  );
}

export default Cart;
