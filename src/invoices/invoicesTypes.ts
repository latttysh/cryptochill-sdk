import { PaginationT } from "../pagination/paginationTypes"

export declare type GetInvoicesParamsT = {
    p?: number
    txid?: string
    address?: string
    status: "new" | "pending" | "complete" | "expired"
}

export declare type AmountT = {
    amount: string
    currency: string
}

export declare type InvoiceT = {
    id: string
    kind: string
    created_at: string
    profile_id: string
    address: string
    lightning: null | string
    network: string
    status: string
    amount: {
        requested: AmountT
        invoiced: AmountT
        paid: AmountT
        paid_total?: AmountT
    },
    custom_fee: null | AmountT
    min_confirmations: number | null
    zero_conf_enabled: boolean | null
    notes: string | null,
    passthrough: string
    transactions?: InvoiceTransactionT[]
}

export declare type InvoiceTransactionT = {
    id: string
    kind: string
    txid: string
    confirmations: number
    amount: string
    created_at: string
}


export declare type InvoiceListT = {
    pagination: PaginationT
    result: InvoiceT[]
}

export declare type CreateInvoicePayloadT = {
    profile_id: string
    amount?: number
    currency: "BTC" | "LTC" | "ETH" | "TRX" | "XRP" | "DOGE" | "USDT" | "TUSD" | "USDC" | "PAX" | "GUSD" | "BUSD" | "WBNB" | "SAND" | "DAI" | "SHIB" | "L-BTC" | "L-USDT" | "USD" | "EUR" | "GBP" | "AUD" | "CHF"
    kind?: string
    passthrough?: string
    fee_amount?: number
    min_confirmations?: number
    notes?: string
    zero_conf_enabled?: boolean
    exchange_rate_limit?: any
}

export declare type InvoiceQueryT = {
    p: number
    txid: string
    address: string
    status: "new" | "pending" | "complete" | "expired"
}