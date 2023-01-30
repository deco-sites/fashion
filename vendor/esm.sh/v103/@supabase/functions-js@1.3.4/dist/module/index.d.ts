import { Fetch, FunctionInvokeOptions } from './types.d.ts';
export declare class FunctionsClient {
    protected url: string;
    protected headers: Record<string, string>;
    protected fetch: Fetch;
    constructor(url: string, { headers, customFetch, }?: {
        headers?: Record<string, string>;
        customFetch?: Fetch;
    });
    /**
     * Updates the authorization header
     * @params token - the new jwt token sent in the authorisation header
     */
    setAuth(token: string): void;
    /**
     * Invokes a function
     * @param functionName - the name of the function to invoke
     * @param invokeOptions - object with the following properties
     * `headers`: object representing the headers to send with the request
     * `body`: the body of the request
     * `responseType`: how the response should be parsed. The default is `json`
     */
    invoke<T = any>(functionName: string, invokeOptions?: FunctionInvokeOptions): Promise<{
        data: T;
        error: null;
    } | {
        data: null;
        error: Error;
    }>;
}
//# sourceMappingURL=index.d.ts.map
