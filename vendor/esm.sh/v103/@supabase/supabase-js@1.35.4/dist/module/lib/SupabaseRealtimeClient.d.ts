import { RealtimeSubscription, RealtimeClient } from 'https://esm.sh/v103/@supabase/realtime-js@1.7.5/dist/module/index.d.ts';
import { GenericObject, SupabaseEventTypes, SupabaseRealtimePayload } from './types.d.ts';
export declare class SupabaseRealtimeClient {
    subscription: RealtimeSubscription;
    constructor(socket: RealtimeClient, headers: GenericObject, schema: string, tableName: string);
    private getPayloadRecords;
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */
    on(event: SupabaseEventTypes, callback: (payload: SupabaseRealtimePayload<any>) => void): this;
    /**
     * Enables the subscription.
     */
    subscribe(callback?: Function): RealtimeSubscription;
}
//# sourceMappingURL=SupabaseRealtimeClient.d.ts.map
