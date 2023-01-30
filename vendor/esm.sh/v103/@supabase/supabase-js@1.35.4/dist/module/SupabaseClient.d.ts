import { Fetch, SupabaseClientOptions } from "./lib/types.d.ts";
import { SupabaseAuthClient } from "./lib/SupabaseAuthClient.d.ts";
import { SupabaseQueryBuilder } from "./lib/SupabaseQueryBuilder.d.ts";
import { SupabaseStorageClient } from "https://esm.sh/v103/@supabase/storage-js@1.7.3/dist/module/index.d.ts";
import { FunctionsClient } from "https://esm.sh/v103/@supabase/functions-js@1.3.4/dist/module/index.d.ts";
import {
  RealtimeChannel,
  RealtimeClient,
  RealtimeSubscription,
} from "https://esm.sh/v103/@supabase/realtime-js@1.7.5/dist/module/index.d.ts";
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
export default class SupabaseClient {
  protected supabaseUrl: string;
  protected supabaseKey: string;
  /**
   * Supabase Auth allows you to create and manage user sessions for access to data that is secured by access policies.
   */
  auth: SupabaseAuthClient;
  protected schema: string;
  protected restUrl: string;
  protected realtimeUrl: string;
  protected authUrl: string;
  protected storageUrl: string;
  protected functionsUrl: string;
  protected realtime: RealtimeClient;
  protected multiTab: boolean;
  protected fetch?: Fetch;
  protected changedAccessToken: string | undefined;
  protected shouldThrowOnError: boolean;
  protected headers: {
    [key: string]: string;
  };
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.headers Any additional headers to send with each network request.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
   * @param options.fetch A custom fetch implementation.
   */
  constructor(
    supabaseUrl: string,
    supabaseKey: string,
    options?: SupabaseClientOptions,
  );
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions(): FunctionsClient;
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage(): SupabaseStorageClient;
  /**
   * Perform a table operation.
   *
   * @param table The table name to operate on.
   */
  from<T = any>(table: string): SupabaseQueryBuilder<T>;
  /**
   * Perform a function call.
   *
   * @param fn  The function name to call.
   * @param params  The parameters to pass to the function call.
   * @param head   When set to true, no data will be returned.
   * @param count  Count algorithm to use to count rows in a table.
   */
  rpc<T = any>(fn: string, params?: object, { head, count }?: {
    head?: boolean;
    count?: null | "exact" | "planned" | "estimated";
  }): import("https://esm.sh/v103/@supabase/postgrest-js@0.37.4/dist/module/index.d.ts").PostgrestFilterBuilder<
    T
  >;
  /**
   * Creates a channel with Broadcast and Presence.
   * Activated when vsndate query param is present in the WebSocket URL.
   */
  channel(name: string, opts: {
    selfBroadcast: boolean;
    [key: string]: any;
  }): RealtimeChannel;
  /**
   * Closes and removes all subscriptions and returns a list of removed
   * subscriptions and their errors.
   */
  removeAllSubscriptions(): Promise<{
    data: {
      subscription: RealtimeSubscription;
    };
    error: Error | null;
  }[]>;
  /**
   * Closes and removes a channel and returns the number of open channels.
   *
   * @param channel The channel you want to close and remove.
   */
  removeChannel(channel: RealtimeChannel): Promise<{
    data: {
      openChannels: number;
    };
    error: Error | null;
  }>;
  /**
   * Closes and removes a subscription and returns the number of open subscriptions.
   *
   * @param subscription The subscription you want to close and remove.
   */
  removeSubscription(subscription: RealtimeSubscription): Promise<{
    data: {
      openSubscriptions: number;
    };
    error: Error | null;
  }>;
  private _closeSubscription;
  private _unsubscribeSubscription;
  /**
   * Returns an array of all your subscriptions.
   */
  getSubscriptions(): RealtimeSubscription[];
  private _initSupabaseAuthClient;
  private _initRealtimeClient;
  private _initPostgRESTClient;
  private _getAuthHeaders;
  private _listenForMultiTabEvents;
  private _listenForAuthEvents;
  private _handleTokenChanged;
}
//# sourceMappingURL=SupabaseClient.d.ts.map
