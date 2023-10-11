import axios from "axios"
import * as crypto from "crypto"
import { Base64 } from "js-base64"

type Config = {
    apiUrl?: string
    apiKey: string
    profileId: string
    apiSecret: string
    callbackToken: string
}

export abstract class CryptochillBase {
    private apiKey: string;
    private apiUrl: string;
    private profileId: string
    private apiSecret: string
    private callbackToken: string | ""

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.apiUrl = config.apiUrl ? config.apiUrl : "https://api.cryptochill.com"
        this.profileId = config.profileId
        this.apiSecret = config.apiSecret
        this.callbackToken = config.callbackToken
    }

    public encodeHmac(key: string, message: string): string {
        return crypto.createHmac('sha256', key).update(message).digest('hex')
    }

    protected cryptochillApiRequest<T>(endpoint: string, payload = {}, method = "GET"): Promise<T> {
        const request_path = '/v1/' + endpoint + '/';
        //@ts-ignore
        payload.request = request_path
        //@ts-ignore
        payload.nonce = new Date().getTime()
        const encoded_payload = JSON.stringify(payload)
        const b64 = Base64.encode(encoded_payload)
        const signature = this.encodeHmac(this.apiSecret, b64)

        return axios({
            method: method,
            url: this.apiUrl + request_path,
            headers: {
                'X-CC-KEY': this.apiKey,
                'X-CC-PAYLOAD': b64,
                'X-CC-SIGNATURE': signature,
            }
        })
    }
}