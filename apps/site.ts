import { App } from "$live/mod.ts";
import type { State } from "site/mod.ts";
import site from "site/mod.ts";
import manifest, { Manifest, name } from "../manifest.gen.ts";
export { onBeforeResolveProps } from "site/mod.ts";

export default function Fashion(
  state: State,
): App<Manifest, State, [ReturnType<typeof site>]> {
  return {
    state,
    manifest,
    name,
    dependencies: [site(state)],
  };
}
