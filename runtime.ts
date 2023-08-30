import { forApp } from "$live/clients/withManifest.ts";
import type { Fashion } from "./apps/site.ts";

export const Runtime = forApp<Fashion>();
