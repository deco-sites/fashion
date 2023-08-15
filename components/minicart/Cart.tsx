import { PLATFORM } from "$store/platform.ts";
import { lazy } from "preact/compat";

const CartVTEX = lazy(() => import("./vtex/Cart.tsx"));
const CartVNDA = lazy(() => import("./vnda/Cart.tsx"));

function Cart() {
  if (PLATFORM === "vtex") {
    return <CartVTEX />;
  }

  if (PLATFORM === "vnda") {
    return <CartVNDA />;
  }

  return null;
}

export default Cart;
