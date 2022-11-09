import { useCallback, useRef } from "preact/hooks";

export const useDebouncedCallback = <T>(
  callback: (...args: T[]) => void,
  delay: number,
  dependencies?: unknown[],
) => {
  const timeout = useRef<number>();

  // Avoid error about spreading non-iterable (undefined)
  const comboDeps = dependencies
    ? [callback, delay, ...dependencies]
    : [callback, delay];

  return useCallback((...args: T[]) => {
    if (timeout.current != null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, comboDeps);
};
