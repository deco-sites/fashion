import SupabaseClient from "./SupabaseClient.d.ts";
import {
  SupabaseClientOptions,
  SupabaseRealtimePayload,
} from "./lib/types.d.ts";
import {
  Session as AuthSession,
  User as AuthUser,
} from "https://esm.sh/v103/@supabase/gotrue-js@1.24.0/dist/module/index.d.ts";
export * from "https://esm.sh/v103/@supabase/gotrue-js@1.24.0/dist/module/index.d.ts";
export {
  PostgrestError,
  PostgrestMaybeSingleResponse,
  PostgrestResponse,
  PostgrestSingleResponse,
} from "https://esm.sh/v103/@supabase/postgrest-js@0.37.4/dist/module/index.d.ts";
export * from "https://esm.sh/v103/@supabase/realtime-js@1.7.5/dist/module/index.d.ts";
/**
 * Creates a new Supabase Client.
 */
declare const createClient: (
  supabaseUrl: string,
  supabaseKey: string,
  options?: SupabaseClientOptions | undefined,
) => SupabaseClient;
export {
  AuthSession,
  AuthUser,
  createClient,
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
};
//# sourceMappingURL=index.d.ts.map
