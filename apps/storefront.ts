import { Section } from "$live/blocks/section.ts";
import { App } from "$live/mod.ts";
import vnda, { Props as VNDAProps } from "apps/vnda/mod.ts";
import vtex, { Props as VTEXProps } from "apps/vtex/mod.ts";
import shopify, { Props as ShopifyProps } from "apps/shopify/mod.ts";
import website, { Props as WebsiteProps } from "apps/website/mod.ts";
import type { ComponentProps } from "preact";
import manifest, { Manifest } from "../manifest.gen.ts";

export type State = WebsiteProps & {
  theme: Section;
  commerce: VNDAProps | VTEXProps | ShopifyProps;
};

type WebsiteApp = ReturnType<typeof website>;
type CommerceApp =
  | ReturnType<typeof vnda>
  | ReturnType<typeof vtex>
  | ReturnType<typeof shopify>;

const PLATFORMS = { vnda, vtex, shopify };

// Uncomment for testing and specific platform
const DEBUG_TEST: null | keyof typeof PLATFORMS = null; // "shopify";

export let _platform: null | keyof typeof PLATFORMS = null;

export default function Storefront(
  state: State,
): App<Manifest, State, [WebsiteApp, CommerceApp]> {
  if (!state.commerce.platform) throw new Error("Missing platform");
  if (DEBUG_TEST !== state.commerce.platform) {
    return { state, manifest, dependencies: [] as any };
  }

  _platform = state.commerce.platform;

  // @ts-expect-error Trust me, I'm an engineer
  const ecommerce = PLATFORMS[_platform]?.(state.commerce);
  const site = website(state);

  // Add theme to Page
  const LivePageTSX = site.manifest.pages["apps/website/pages/LivePage.tsx"];
  const { default: LivePage } = LivePageTSX;
  site.manifest.pages["apps/website/pages/LivePage.tsx"] = {
    ...site.manifest.pages["apps/website/pages/LivePage.tsx"],
    default: (props: ComponentProps<typeof LivePage>) => {
      return LivePage({ ...props, sections: [state.theme, ...props.sections] });
    },
  };

  return { state, manifest, dependencies: [site, ecommerce] };
}

export { onBeforeResolveProps } from "apps/website/mod.ts";
