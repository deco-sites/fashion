import GoTrueApi from './GoTrueApi.d.ts';
import { Fetch } from './lib/fetch.d.ts';
import type { ApiError, Session, User, UserAttributes, Provider, Subscription, AuthChangeEvent, CookieOptions, UserCredentials, VerifyOTPParams, SupportedStorage } from './lib/types.d.ts';
export default class GoTrueClient {
    /**
     * Namespace for the GoTrue API methods.
     * These can be used for example to get a user from a JWT in a server environment or reset a user's password.
     */
    api: GoTrueApi;
    /**
     * The currently logged in user or null.
     */
    protected currentUser: User | null;
    /**
     * The session object for the currently logged in user or null.
     */
    protected currentSession: Session | null;
    protected autoRefreshToken: boolean;
    protected persistSession: boolean;
    protected localStorage: SupportedStorage;
    protected multiTab: boolean;
    protected stateChangeEmitters: Map<string, Subscription>;
    protected refreshTokenTimer?: ReturnType<typeof setTimeout>;
    protected networkRetries: number;
    /**
     * Create a new client for use in the browser.
     * @param options.url The URL of the GoTrue server.
     * @param options.headers Any additional headers to send to the GoTrue server.
     * @param options.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.localStorage Provide your own local storage implementation to use instead of the browser's local storage.
     * @param options.multiTab Set to "false" if you want to disable multi-tab/window events.
     * @param options.cookieOptions
     * @param options.fetch A custom fetch implementation.
     */
    constructor(options: {
        url?: string;
        headers?: {
            [key: string]: string;
        };
        detectSessionInUrl?: boolean;
        autoRefreshToken?: boolean;
        persistSession?: boolean;
        localStorage?: SupportedStorage;
        multiTab?: boolean;
        cookieOptions?: CookieOptions;
        fetch?: Fetch;
    });
    /**
     * Creates a new user.
     * @type UserCredentials
     * @param email The user's email address.
     * @param password The user's password.
     * @param phone The user's phone number.
     * @param redirectTo The redirect URL attached to the signup confirmation link. Does not redirect the user if it's a mobile signup.
     * @param data Optional user metadata.
     */
    signUp({ email, password, phone }: UserCredentials, options?: {
        redirectTo?: string;
        data?: object;
        captchaToken?: string;
    }): Promise<{
        user: User | null;
        session: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Log in an existing user, or login via a third-party provider.
     * @type UserCredentials
     * @param email The user's email address.
     * @param phone The user's phone number.
     * @param password The user's password.
     * @param refreshToken A valid refresh token that was returned on login.
     * @param provider One of the providers supported by GoTrue.
     * @param redirectTo A URL to send the user to after they are confirmed (OAuth logins only).
     * @param shouldCreateUser A boolean flag to indicate whether to automatically create a user on magiclink / otp sign-ins if the user doesn't exist. Defaults to true.
     * @param scopes A space-separated list of scopes granted to the OAuth application.
     */
    signIn({ email, phone, password, refreshToken, provider, oidc }: UserCredentials, options?: {
        redirectTo?: string;
        shouldCreateUser?: boolean;
        scopes?: string;
        captchaToken?: string;
        queryParams?: {
            [key: string]: string;
        };
    }): Promise<{
        session: Session | null;
        user: User | null;
        provider?: Provider;
        url?: string | null;
        error: ApiError | null;
    }>;
    /**
     * Log in a user given a User supplied OTP received via mobile.
     * @param email The user's email address.
     * @param phone The user's phone number.
     * @param token The user's password.
     * @param type The user's verification type.
     * @param redirectTo A URL or mobile address to send the user to after they are confirmed.
     */
    verifyOTP(params: VerifyOTPParams, options?: {
        redirectTo?: string;
    }): Promise<{
        user: User | null;
        session: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Inside a browser context, `user()` will return the user data, if there is a logged in user.
     *
     * For server-side management, you can get a user through `auth.api.getUserByCookie()`
     */
    user(): User | null;
    /**
     * Returns the session data, if there is an active session.
     */
    session(): Session | null;
    /**
     * Force refreshes the session including the user data in case it was updated in a different session.
     */
    refreshSession(): Promise<{
        data: Session | null;
        user: User | null;
        error: ApiError | null;
    }>;
    /**
     * Updates user data, if there is a logged in user.
     */
    update(attributes: UserAttributes): Promise<{
        data: User | null;
        user: User | null;
        error: ApiError | null;
    }>;
    /**
     * Sets the session from the provided session information. The access_token
     * is reused if it is not expired, otherwise a new access token is fetched by
     * refreshing the session with the provided refresh_token.
     *
     * This method is useful when using in a server-side rendered context.
     *
     * @param params.refresh_token A valid refresh token (typically obtained from a cookie)
     * @param params.access_token An access token (typically obtained from a cookie)
     */
    setSession(params: {
        refresh_token: string;
        access_token: string;
    }): Promise<{
        session: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Sets the session data from refresh_token and returns current Session and Error
     * @param refresh_token a JWT token
     */
    setSession(refresh_token: string): Promise<{
        session: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Overrides the JWT on the current client. The JWT will then be sent in all subsequent network requests.
     * @param access_token a jwt access token
     */
    setAuth(access_token: string): Session;
    /**
     * Gets the session data from a URL string
     * @param options.storeSession Optionally store the session in the browser
     */
    getSessionFromUrl(options?: {
        storeSession?: boolean;
    }): Promise<{
        data: Session | null;
        error: ApiError | null;
    }>;
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a "SIGNED_OUT" event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`. There is no way to revoke a user's session JWT before it automatically expires
     */
    signOut(): Promise<{
        error: ApiError | null;
    }>;
    /**
     * Receive a notification every time an auth event happens.
     * @returns {Subscription} A subscription object which can be used to unsubscribe itself.
     */
    onAuthStateChange(callback: (event: AuthChangeEvent, session: Session | null) => void): {
        data: Subscription | null;
        error: ApiError | null;
    };
    private _handleEmailSignIn;
    private _handlePhoneSignIn;
    private _handleProviderSignIn;
    private _handleOpenIDConnectSignIn;
    /**
     * Attempts to get the session from LocalStorage
     * Note: this should never be async (even for React Native), as we need it to return immediately in the constructor.
     */
    private _recoverSession;
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
    private _recoverAndRefresh;
    private _callRefreshToken;
    private _notifyAllSubscribers;
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
    private _saveSession;
    private _persistSession;
    private _removeSession;
    /**
     * Clear and re-create refresh token timer
     * @param value time intervals in milliseconds
     */
    private _startAutoRefreshToken;
    /**
     * Listens for changes to LocalStorage and updates the current session.
     */
    private _listenForMultiTabEvents;
    private _handleVisibilityChange;
}
//# sourceMappingURL=GoTrueClient.d.ts.map
