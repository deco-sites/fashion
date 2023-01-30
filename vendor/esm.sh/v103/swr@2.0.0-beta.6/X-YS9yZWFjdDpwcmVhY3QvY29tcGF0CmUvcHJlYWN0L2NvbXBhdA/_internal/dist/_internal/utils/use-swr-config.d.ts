import type { Cache, FullConfiguration, State } from "../types.d.ts";
export declare const useSWRConfig: <
  T extends Cache<any> = Map<string, State<any, any>>,
>() => FullConfiguration<T>;
