import { CryptochillBase } from "src/base";

const endpoint = "exchange-rates"

export class ExchangeRates extends CryptochillBase {
    listRates = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getRate = (symbol: string) => {
        return this.cryptochillApiRequest(endpoint + `/${symbol}`)
    }
}