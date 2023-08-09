import { buildApp } from "$live/blocks/app.ts";
import { AppRuntime } from "$live/mod.ts";
import type { State } from "site/mod.ts";
import site from "site/mod.ts";
import manifest from "../manifest.gen.ts";
export const name = "deco-sites/fashion";

export default function Fashion(state: State): AppRuntime {
  return site({
    ...state,
    apps: [...(state?.apps ?? []), buildApp({ manifest, state })],
  });
}
