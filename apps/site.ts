import { App, AppContext as AC } from "$live/mod.ts";
import std, { Props } from "apps/compat/std/mod.ts";

import manifest, { Manifest } from "../manifest.gen.ts";

type StdApp = ReturnType<typeof std>;
export default function Site(
  state: Props,
): App<Manifest, Props, [
  StdApp,
]> {
  return {
    state,
    manifest,
    dependencies: [
      std(state),
    ],
  };
}

export type Storefront = ReturnType<typeof Site>;
export type AppContext = AC<Storefront>;
export { onBeforeResolveProps } from "apps/compat/$live/mod.ts";
