export declare type Provider = 'apple' | 'azure' | 'bitbucket' | 'discord' | 'facebook' | 'github' | 'gitlab' | 'google' | 'keycloak' | 'linkedin' | 'notion' | 'slack' | 'spotify' | 'twitch' | 'twitter' | 'workos';
export declare type AuthChangeEvent = 'PASSWORD_RECOVERY' | 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED' | 'USER_UPDATED' | 'USER_DELETED';
export interface ApiError {
    message: string;
    status: number;
}
export interface Session {
    provider_token?: string | null;
    provider_refresh_token?: string | null;
    access_token: string;
    /**
     * The number of seconds until the token expires (since it was issued). Returned when a login is confirmed.
     */
    expires_in?: number;
    /**
     * A timestamp of when the token will expire. Returned when a login is confirmed.
     */
    expires_at?: number;
    refresh_token?: string;
    token_type: string;
    user: User | null;
}
export interface UserIdentity {
    id: string;
    user_id: string;
    identity_data: {
        [key: string]: any;
    };
    provider: string;
    created_at: string;
    last_sign_in_at: string;
    updated_at?: string;
}
export interface UserAppMetadata {
    provider?: string;
    [key: string]: any;
}
export interface UserMetadata {
    [key: string]: any;
}
export interface User {
    id: string;
    app_metadata: UserAppMetadata;
    user_metadata: UserMetadata;
    aud: string;
    confirmation_sent_at?: string;
    recovery_sent_at?: string;
    email_change_sent_at?: string;
    new_email?: string;
    invited_at?: string;
    action_link?: string;
    email?: string;
    phone?: string;
    created_at: string;
    confirmed_at?: string;
    email_confirmed_at?: string;
    phone_confirmed_at?: string;
    last_sign_in_at?: string;
    role?: string;
    updated_at?: string;
    identities?: UserIdentity[];
}
export interface UserAttributes {
    /**
     * The user's email.
     */
    email?: string;
    /**
     * The user's phone.
     */
    phone?: string;
    /**
     * The user's password.
     */
    password?: string;
    /**
     * An email change token.
     */
    email_change_token?: string;
    /**
     * A custom data object for user_metadata that a user can modify. Can be any JSON.
     */
    data?: object;
}
export interface AdminUserAttributes extends UserAttributes {
    /**
     * A custom data object for user_metadata.
     *
     * Can be any JSON.
     *
     * Only a service role can modify.
     *
     * Note: When using the GoTrueAdminApi and wanting to modify a user's user_metadata,
     * this attribute is used instead of UserAttributes data.
     *
     */
    user_metadata?: object;
    /**
     * A custom data object for app_metadata that.
     *
     * Only a service role can modify.
     *
     * Can be any JSON that includes app-specific info, such as identity providers, roles, and other
     * access control information.
     */
    app_metadata?: object;
    /**
     * Sets if a user has confirmed their email address.
     *
     * Only a service role can modify.
     */
    email_confirm?: boolean;
    /**
     * Sets if a user has confirmed their phone number.
     *
     * Only a service role can modify.
     */
    phone_confirm?: boolean;
}
export interface Subscription {
    /**
     * The subscriber UUID. This will be set by the client.
     */
    id: string;
    /**
     * The function to call every time there is an event. eg: (eventName) => {}
     */
    callback: (event: AuthChangeEvent, session: Session | null) => void;
    /**
     * Call this to remove the listener.
     */
    unsubscribe: () => void;
}
export interface CookieOptions {
    name?: string;
    lifetime?: number;
    domain?: string;
    path?: string;
    sameSite?: string;
}
export interface UserCredentials {
    email?: string;
    phone?: string;
    password?: string;
    refreshToken?: string;
    provider?: Provider;
    oidc?: OpenIDConnectCredentials;
}
export declare type VerifyOTPParams = VerifyMobileOTPParams | VerifyEmailOTPParams;
export interface VerifyMobileOTPParams {
    email?: undefined;
    phone: string;
    token: string;
    type?: MobileOTPType;
}
export interface VerifyEmailOTPParams {
    email: string;
    phone?: undefined;
    token: string;
    type: EmailOTPType;
}
export declare type MobileOTPType = 'sms' | 'phone_change';
export declare type EmailOTPType = 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change';
export interface OpenIDConnectCredentials {
    id_token: string;
    nonce: string;
    provider?: Provider;
    client_id?: string;
    issuer?: string;
}
declare type AnyFunction = (...args: any[]) => any;
declare type MaybePromisify<T> = T | Promise<T>;
declare type PromisifyMethods<T> = {
    [K in keyof T]: T[K] extends AnyFunction ? (...args: Parameters<T[K]>) => MaybePromisify<ReturnType<T[K]>> : T[K];
};
export declare type SupportedStorage = PromisifyMethods<Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>>;
export {};
//# sourceMappingURL=types.d.ts.map
