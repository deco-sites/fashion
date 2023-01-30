import type { FullConfiguration } from "../types.d.ts";
export declare const mergeConfigs: (
  a: Partial<FullConfiguration>,
  b?:
    | Partial<FullConfiguration<import("../types.d.ts").Cache<any>>>
    | undefined,
) => Partial<FullConfiguration<import("../types.d.ts").Cache<any>>>;
