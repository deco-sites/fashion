import { CHANNEL_EVENTS, CHANNEL_STATES } from './lib/constants.d.ts';
import Push from './lib/push.d.ts';
import RealtimeClient from './RealtimeClient.d.ts';
import Timer from './lib/timer.d.ts';
export default class RealtimeSubscription {
    topic: string;
    params: {
        [key: string]: unknown;
    };
    socket: RealtimeClient;
    bindings: any[];
    timeout: number;
    state: CHANNEL_STATES;
    joinedOnce: boolean;
    joinPush: Push;
    rejoinTimer: Timer;
    pushBuffer: Push[];
    constructor(topic: string, params: {
        [key: string]: unknown;
    }, socket: RealtimeClient);
    rejoinUntilConnected(): void;
    subscribe(timeout?: number): Push;
    onClose(callback: Function): void;
    onError(callback: Function): void;
    on(event: string, callback: Function): void;
    off(event: string): void;
    canPush(): boolean;
    push(event: CHANNEL_EVENTS, payload: any, timeout?: number): Push;
    updateJoinPayload(payload: {
        [key: string]: unknown;
    }): void;
    /**
     * Leaves the channel
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
    unsubscribe(timeout?: number): Push;
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     */
    onMessage(event: string, payload: any, ref?: string): any;
    isMember(topic: string): boolean;
    joinRef(): string;
    rejoin(timeout?: number): void;
    trigger(event: string, payload?: any, ref?: string): void;
    replyEventName(ref: string): string;
    isClosed(): boolean;
    isErrored(): boolean;
    isJoined(): boolean;
    isJoining(): boolean;
    isLeaving(): boolean;
}
//# sourceMappingURL=RealtimeSubscription.d.ts.map
