import type { Middleware, SWRHook } from '../types.d.ts';
export declare const withMiddleware: (useSWR: SWRHook, middleware: Middleware) => SWRHook;
