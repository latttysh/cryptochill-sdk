export declare type AutoFundingT = {
    id: string
    from_wallet: {
        id: string
        name: string
    }
    from_kind: string
    to_wallet: {
        id: string
        name: string
    }
    to_kind: string
    keep_amount: string
    min_amount: string
    max_amount: string
    exchange: {
        id: string
        title: string
    }
    is_enabled: boolean
}