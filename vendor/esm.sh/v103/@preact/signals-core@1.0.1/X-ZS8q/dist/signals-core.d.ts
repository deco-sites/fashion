export declare class Signal<T = any> {
  constructor(value: T);
  toString(): string;
  peek(): T;
  get value(): T;
  set value(value: T);
}
export declare function signal<T>(value: T): Signal<T>;
export declare type ReadonlySignal<T = any> = Omit<Signal<T>, "value"> & {
  readonly value: T;
};
export declare function computed<T>(compute: () => T): ReadonlySignal<T>;
export declare function effect(callback: () => void): () => void;
export declare function batch<T>(cb: () => T): T;
