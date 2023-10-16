export declare type WalletT = {
    id: string
    name: string
    balances: BalanceT
    token_balances: BalanceT[]

}

export declare type BalanceT = {
    available: string
    pending: string
    currency: string
    to_consolidate?: string
}