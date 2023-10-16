import { Account } from "./account";
import { AutoConversions } from "./autoConversions";
import { AutoFunding } from "./autoFunding";
import { AutomaticPayouts } from "./autoPayouts";
import { Callbacks } from "./callbacks";
import { Conversions } from "./conversions";
import { ExchangeRates } from "./exchangeRates";
import { Invoices } from "./invoices";
import { Payouts } from "./payouts";
import { Profiles } from "./profiles";
import { Transactions } from "./transactions";
import { Wallets } from "./wallets";


export class Cryptochill {
    account: Account
    invoices: Invoices
    autoConversions: AutoConversions
    autoFunding: AutoFunding
    autoPayouts: AutomaticPayouts
    callbacks: Callbacks
    conversions: Conversions
    exchangeRates: ExchangeRates
    payouts: Payouts
    profiles: Profiles
    transactions: Transactions
    wallets: Wallets

    constructor(config: {
        apiKey: string;
        apiUrl: string;
        profileId: string
        apiSecret: string
        callbackToken: string | ""
    }) {
        this.account = new Account(config)
        this.invoices = new Invoices(config)
        this.autoConversions = new AutoConversions(config)
        this.autoFunding = new AutoFunding(config)
        this.autoPayouts = new AutomaticPayouts(config)
        this.callbacks = new Callbacks(config)
        this.conversions = new Conversions(config)
        this.exchangeRates = new ExchangeRates(config)
        this.payouts = new Payouts(config)
        this.profiles = new Profiles(config)
        this.transactions = new Transactions(config)
        this.wallets = new Wallets(config)

    }
}


const test = new Cryptochill({ apiKey: "", apiSecret: "", apiUrl: "", callbackToken: "", profileId: "" })
