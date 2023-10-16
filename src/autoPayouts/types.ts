import { WalletT } from "src/types"

export declare type AutoPayoutT = {
    id: string
    wallet: WalletT
    kind: string
    recipient_address: string
    is_enabled: boolean
    is_api_editable: boolean
    min_amount: string
    keep_amount: string
    interval: number
}