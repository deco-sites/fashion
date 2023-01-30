export declare type Fetch = typeof fetch;
export interface FetchOptions {
    headers?: {
        [key: string]: string;
    };
    noResolveJson?: boolean;
}
export interface FetchParameters {
    signal?: AbortSignal;
}
export declare type RequestMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export declare function get(fetcher: Fetch, url: string, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function post(fetcher: Fetch, url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function put(fetcher: Fetch, url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function remove(fetcher: Fetch, url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
//# sourceMappingURL=fetch.d.ts.map
