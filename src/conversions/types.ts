import { ExchangeT, WalletT } from "src/types"

export declare type ConversionT = {
    id: string
    from_wallet: WalletT
    from_kind: string
    to_wallet: WalletT
    to_kind: string
    amount: string
    exchange: ExchangeT
    status: string
    is_approved: boolean
}