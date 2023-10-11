import { Account } from "./account";
import { Invoices } from "./invoices";
export declare class Cryptochill {
    account: Account;
    invoices: Invoices;
    constructor(config: {
        apiKey: string;
        apiUrl: string;
        profileId: string;
        apiSecret: string;
        callbackToken: string | "";
    });
}
