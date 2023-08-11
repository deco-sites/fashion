import { App, AppModule } from "$live/mod.ts";
import type { State } from "site/mod.ts";
import * as site from "site/mod.ts";
import manifest from "../manifest.gen.ts";
export { onBeforeResolveProps } from "site/mod.ts";
export const name = "deco-sites/candy-store";

export const dependencies = [site] satisfies AppModule[];

export default function Fashion(state: State): App<State, Manifest> {
  return {
    state, manifest
  };
}
