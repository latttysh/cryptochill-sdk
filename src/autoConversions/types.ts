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
    min_amount: string
    max_amount: string
    exchange: {
        id: string
        title: string
    }
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
