import { withManifest } from "$live/clients/withManifest.ts";
import type { Manifest } from "./live.gen.ts";

export const Runtime = withManifest<Manifest>();
