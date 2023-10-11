import { Account } from "./account";
import { Invoices } from "./invoices";


export class Cryptochill {
    account: Account
    invoices: Invoices

    constructor(config: {
        apiKey: string;
        apiUrl: string;
        profileId: string
        apiSecret: string
        callbackToken: string | ""
    }) {
        this.account = new Account(config)
        this.invoices = new Invoices(config)
    }
}


const test = new Cryptochill({ apiKey: "", apiSecret: "", apiUrl: "", callbackToken: "", profileId: "" })
