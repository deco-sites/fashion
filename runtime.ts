import { forApp } from "$live/clients/withManifest.ts";
import type { Storefront } from "./apps/site.ts";

export const Runtime = forApp<Storefront>();
