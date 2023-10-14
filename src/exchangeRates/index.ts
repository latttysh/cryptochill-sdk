import { AxiosResponse } from "axios";
import { CryptochillBase } from "src/base";
import { ResultT } from "src/types";
import { ExchangeRateT } from "./types";

const endpoint = "exchange-rates"

export class ExchangeRates extends CryptochillBase {
    listRates = (): Promise<AxiosResponse<ResultT<ExchangeRateT[]>>> => {
        return this.cryptochillApiRequest(endpoint)
    }

    getRate = (symbol: string): Promise<AxiosResponse<ResultT<ExchangeRateT>>> => {
        return this.cryptochillApiRequest(endpoint + `/${symbol}`)
    }
}