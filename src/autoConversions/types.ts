import { ExchangeT, WalletT } from "src/types"

export declare type CreateAutoConversionPayloadT = {
    is_enabled?: boolean,
    from_wallet: string
    from_kind: string
    to_wallet: string
    to_kind: string
    min_amount: number
    max_amount: number
    keep_amount: number
    exchange?: string
}

export declare type AutoConversionT = {
    id: string
    from_wallet: WalletT
    from_kind: string
    to_wallet: WalletT
    to_kind: string
    min_amount: string
    max_amount: string
    exchange: ExchangeT
    is_enabled: boolean
}

export declare type UpdateAutoConversionPayloadT = {
    is_enabled?: boolean,
    from_wallet?: string
    from_kind?: string
    to_wallet?: string
    to_kind?: string
    min_amount?: number
    max_amount?: number
    keep_amount?: number
    exchange?: string
}