import type { BareFetcher, Key, Middleware } from "../types.d.ts";
export declare const preload: <Data = any>(
  key_: Key,
  fetcher: BareFetcher<Data>,
) => any;
export declare const middleware: Middleware;
