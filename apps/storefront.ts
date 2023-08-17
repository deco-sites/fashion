import { App } from "$live/mod.ts";
import vnda, { Props as VNDAProps } from "apps/vnda/mod.ts";
import website, { Props as WebsiteProps } from "apps/website/mod.ts";
import manifest, { Manifest, name } from "../manifest.gen.ts";

export type State = WebsiteProps & {
  commerce: VNDAProps;
};

export default function (state: State): App<
  Manifest,
  State,
  [ReturnType<typeof website>, ReturnType<typeof vnda>]
> {
  return {
    state,
    manifest,
    name,
    dependencies: [website(state), vnda(state.commerce)],
  };
}

export { onBeforeResolveProps } from "apps/website/mod.ts";
