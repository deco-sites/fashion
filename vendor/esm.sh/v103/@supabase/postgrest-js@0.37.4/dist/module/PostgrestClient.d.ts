import PostgrestQueryBuilder from './lib/PostgrestQueryBuilder.d.ts';
import PostgrestFilterBuilder from './lib/PostgrestFilterBuilder.d.ts';
import { Fetch } from './lib/types.d.ts';
export default class PostgrestClient {
    url: string;
    headers: {
        [key: string]: string;
    };
    schema?: string;
    fetch?: Fetch;
    shouldThrowOnError?: boolean;
    /**
     * Creates a PostgREST client.
     *
     * @param url  URL of the PostgREST endpoint.
     * @param headers  Custom headers.
     * @param schema  Postgres schema to switch to.
     */
    constructor(url: string, { headers, schema, fetch, throwOnError, }?: {
        headers?: {
            [key: string]: string;
        };
        schema?: string;
        fetch?: Fetch;
        throwOnError?: boolean;
    });
    /**
     * Authenticates the request with JWT.
     *
     * @param token  The JWT token to use.
     */
    auth(token: string): this;
    /**
     * Perform a table operation.
     *
     * @param table  The table name to operate on.
     */
    from<T = any>(table: string): PostgrestQueryBuilder<T>;
    /**
     * Perform a function call.
     *
     * @param fn  The function name to call.
     * @param params  The parameters to pass to the function call.
     * @param head  When set to true, no data will be returned.
     * @param count  Count algorithm to use to count rows in a table.
     */
    rpc<T = any>(fn: string, params?: object, { head, count, }?: {
        head?: boolean;
        count?: null | 'exact' | 'planned' | 'estimated';
    }): PostgrestFilterBuilder<T>;
}
//# sourceMappingURL=PostgrestClient.d.ts.map
