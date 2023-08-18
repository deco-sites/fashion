import { Section } from "$live/blocks/section.ts";
import { App } from "$live/mod.ts";
import vnda, { Props as VNDAProps } from "apps/vnda/mod.ts";
import vtex, { Props as VTEXProps } from "apps/vtex/mod.ts";
import website, { Props as WebsiteProps } from "apps/website/mod.ts";
import type { ComponentProps } from "preact";
import manifest, { Manifest } from "../manifest.gen.ts";

export type State = WebsiteProps & {
  theme: Section;
  commerce: VNDAProps | VTEXProps;
};

type WebsiteApp = ReturnType<typeof website>;
type CommerceApp = ReturnType<typeof vnda> | ReturnType<typeof vtex>;

const PLATFORMS = { vnda, vtex };

export let _platform: null | keyof typeof PLATFORMS = null;

export default function Storefront(
  state: State,
): App<Manifest, State, [WebsiteApp, CommerceApp]> {
  // // Uncomment for testing an specific platform
  // if (state.commerce.platform !== "vtex") {
  //   // @ts-expect-error blacklist platform
  //   return { state: {}, manifest: {}, name, dependencies: [] };
  // }

  if (!state.commerce.platform) throw new Error("Missing platform");

  _platform = state.commerce.platform;

  const site = website(state);
  const LivePageTSX = site.manifest.pages["apps/website/pages/LivePage.tsx"];
  const { default: LivePage } = LivePageTSX;

  site.manifest.pages["apps/website/pages/LivePage.tsx"] = {
    ...site.manifest.pages["apps/website/pages/LivePage.tsx"],
    default: (props: ComponentProps<typeof LivePage>) => {
      return LivePage({ ...props, sections: [state.theme, ...props.sections] });
    },
  };

  return {
    state,
    manifest,
    dependencies: [
      website(state),
      // @ts-expect-error Trust me, I'm an engineer
      PLATFORMS[_platform](state.commerce),
    ],
  };
}

export { onBeforeResolveProps } from "apps/website/mod.ts";
