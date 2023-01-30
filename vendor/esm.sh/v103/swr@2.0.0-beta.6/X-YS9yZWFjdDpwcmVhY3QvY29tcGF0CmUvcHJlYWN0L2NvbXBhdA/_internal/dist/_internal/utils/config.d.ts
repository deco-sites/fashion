import type { Cache, FullConfiguration, ScopedMutator } from "../types.d.ts";
declare const compare: (currentData: any, newData: any) => boolean;
declare const cache: Cache<any>, mutate: ScopedMutator<any>;
export { cache, compare, mutate };
export declare const defaultConfig: FullConfiguration;
