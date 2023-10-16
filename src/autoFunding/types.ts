import { ExchangeT, WalletT } from "src/types"

export declare type AutoFundingT = {
    id: string
    from_wallet: WalletT
    from_kind: string
    to_wallet: WalletT
    to_kind: string
    keep_amount: string
    min_amount: string
    max_amount: string
    exchange: ExchangeT
    is_enabled: boolean
}