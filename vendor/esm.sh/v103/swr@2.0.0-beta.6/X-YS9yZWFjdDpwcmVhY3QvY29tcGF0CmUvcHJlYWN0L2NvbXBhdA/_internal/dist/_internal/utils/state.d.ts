import type { MutableRefObject } from 'https://esm.sh/v103/@types/react@18.0.26/X-YS9yZWFjdDpwcmVhY3QvY29tcGF0CmUvcHJlYWN0L2NvbXBhdA/index.d.ts';
/**
 * An implementation of state with dependency-tracking.
 */
export declare const useStateWithDeps: <S = any>(state: any) => [MutableRefObject<any>, Record<keyof S, boolean>, (payload: Partial<S>) => void];
