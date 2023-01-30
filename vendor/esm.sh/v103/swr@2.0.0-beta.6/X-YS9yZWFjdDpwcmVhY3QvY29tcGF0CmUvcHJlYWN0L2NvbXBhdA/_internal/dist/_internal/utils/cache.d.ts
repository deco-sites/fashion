import type {
  Cache,
  ProviderConfiguration,
  ScopedMutator,
} from "../types.d.ts";
export declare const initCache: <Data = any>(
  provider: Cache<Data>,
  options?: Partial<ProviderConfiguration> | undefined,
) => [Cache<Data>, ScopedMutator<Data>, () => void, () => void] | [
  Cache<Data>,
  ScopedMutator<Data>,
] | undefined;
