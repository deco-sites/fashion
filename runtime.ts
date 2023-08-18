import { forApp } from "$live/clients/withManifest.ts";
import type site from "./apps/storefront.ts";
import type vnda from "apps/vnda/mod.ts";
import type vtex from "apps/vtex/mod.ts";

export const Runtime = {
  "storefront": forApp<ReturnType<typeof site>>(),
  "vnda": forApp<ReturnType<typeof vnda>>(),
  "vtex": forApp<ReturnType<typeof vtex>>(),
};
