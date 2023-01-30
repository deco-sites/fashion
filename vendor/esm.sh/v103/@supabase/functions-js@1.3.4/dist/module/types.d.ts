export declare type Fetch = typeof fetch;
export declare enum ResponseType {
    json = 0,
    text = 1,
    arrayBuffer = 2,
    blob = 3
}
export declare type FunctionInvokeOptions = {
    headers?: {
        [key: string]: string;
    };
    body?: Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;
    responseType?: keyof typeof ResponseType;
};
//# sourceMappingURL=types.d.ts.map
