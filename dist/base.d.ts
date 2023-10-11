type Config = {
    apiUrl?: string;
    apiKey: string;
    profileId: string;
    apiSecret: string;
    callbackToken: string;
};
export declare abstract class CryptochillBase {
    private apiKey;
    private apiUrl;
    private profileId;
    private apiSecret;
    private callbackToken;
    constructor(config: Config);
    encodeHmac(key: string, message: string): string;
    protected cryptochillApiRequest<T>(endpoint: string, payload?: any, method?: string): Promise<T>;
}
export {};
