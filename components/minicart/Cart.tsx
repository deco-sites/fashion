// import { platform } from "$store/apps/storefront.ts";
import { lazy } from "preact/compat";
import { usePlatform } from "$store/sdk/usePlatform.tsx";

const CartVTEX = lazy(() => import("./vtex/Cart.tsx"));
const CartVNDA = lazy(() => import("./vnda/Cart.tsx"));

export interface Props {
  platform: ReturnType<typeof usePlatform>;
}

function Cart({ platform }: Props) {
  if (platform === "vtex") {
    return <CartVTEX />;
  }

  if (platform === "vnda") {
    return <CartVNDA />;
  }

  return null;
}

export default Cart;
