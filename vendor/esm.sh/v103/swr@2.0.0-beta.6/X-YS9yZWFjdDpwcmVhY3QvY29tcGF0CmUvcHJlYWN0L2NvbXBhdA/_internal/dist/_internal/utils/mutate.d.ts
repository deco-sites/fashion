import type {
  Arguments,
  Cache,
  MutatorCallback,
  MutatorOptions,
} from "../types.d.ts";
declare type KeyFilter = (key?: Arguments) => boolean;
export declare function internalMutate<Data>(
  cache: Cache,
  _key: KeyFilter,
  _data?: Data | Promise<Data | undefined> | MutatorCallback<Data>,
  _opts?: boolean | MutatorOptions<Data>,
): Promise<Array<Data | undefined>>;
export declare function internalMutate<Data>(
  cache: Cache,
  _key: Arguments,
  _data?: Data | Promise<Data | undefined> | MutatorCallback<Data>,
  _opts?: boolean | MutatorOptions<Data>,
): Promise<Data | undefined>;
export {};
