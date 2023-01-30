import type { FullConfiguration, ScopedMutator, Cache } from '../types.d.ts';
declare const compare: (currentData: any, newData: any) => boolean;
declare const cache: Cache<any>, mutate: ScopedMutator<any>;
export { cache, mutate, compare };
export declare const defaultConfig: FullConfiguration;
