import { IS_BROWSER } from "$fresh/runtime.ts";
import { _platform } from "$store/apps/storefront.ts";

if (IS_BROWSER) {
  throw new Error("Cannot use this on the browser");
}

export const usePlatform = () => _platform;
