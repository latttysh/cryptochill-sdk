import { InvoiceT } from "src/invoices/invoicesTypes"

export declare type TransactionT = {
    id: string
    kind: string
    txid: string
    invoice: InvoiceT
    amount: {
        paid: {
            amount: string
            currency: string
            quotes: any
        }
    }
    currency_rates: CurrencyRateT
    created_at: string;
    executed_at: string;
    confirmed_at: string;
    confirmations: number;
    status: string;
    zero_conf_status: null | string;
    network: string;
}

export declare type CurrencyRateT = {
    [key: string]: {
        [key: string]: string
    }
}

export declare type RetrieveConfirmationT = {
    id: string
    confirmations: number
}