import { PostgrestQueryBuilder } from "https://esm.sh/v103/@supabase/postgrest-js@0.37.4/dist/module/index.d.ts";
import { SupabaseRealtimeClient } from "./SupabaseRealtimeClient.d.ts";
import { RealtimeClient } from "https://esm.sh/v103/@supabase/realtime-js@1.7.5/dist/module/index.d.ts";
import {
  Fetch,
  GenericObject,
  SupabaseEventTypes,
  SupabaseRealtimePayload,
} from "./types.d.ts";
export declare class SupabaseQueryBuilder<T> extends PostgrestQueryBuilder<T> {
  private _subscription;
  private _realtime;
  private _headers;
  private _schema;
  private _table;
  constructor(
    url: string,
    { headers, schema, realtime, table, fetch, shouldThrowOnError }: {
      headers?: GenericObject;
      schema: string;
      realtime: RealtimeClient;
      table: string;
      fetch?: Fetch;
      shouldThrowOnError?: boolean;
    },
  );
  /**
   * Subscribe to realtime changes in your database.
   * @param event The database event which you would like to receive updates for, or you can use the special wildcard `*` to listen to all changes.
   * @param callback A callback that will handle the payload that is sent whenever your database changes.
   */
  on(
    event: SupabaseEventTypes,
    callback: (payload: SupabaseRealtimePayload<T>) => void,
  ): SupabaseRealtimeClient;
}
//# sourceMappingURL=SupabaseQueryBuilder.d.ts.map
