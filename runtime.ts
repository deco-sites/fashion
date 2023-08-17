import { forApp } from "$live/clients/withManifest.ts";
import site from "./apps/storefront.ts";

export const Runtime = forApp<ReturnType<typeof site>>();
