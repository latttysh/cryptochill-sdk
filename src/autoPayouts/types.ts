export declare type AutoPayoutT = {
    id: string
    wallet: {
        id: string
        name: string
    }
    kind: string
    recipient_address: string
    is_enabled: boolean
    is_api_editable: boolean
    min_amount: string
    keep_amount: string
    interval: number
}