import { AxiosResponse } from "axios";
import { CryptochillBase } from "src/base";
import { ResultT } from "src/types";
import { AutoPayoutT } from "./types";

const endpoint = "automatic-payouts"

export class AutomaticPayouts extends CryptochillBase {
    listAutoPayouts = (): Promise<AxiosResponse<ResultT<AutoPayoutT[]>>> => {
        return this.cryptochillApiRequest(endpoint)
    }

    getAutoPayout = (id: string): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createAutoPayout = (payload: any): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateAutoPayout = (payload: any): Promise<AxiosResponse<ResultT<AutoPayoutT>>> => {
        return this.cryptochillApiRequest(endpoint, payload, "PUT")
    }

    deleteAutoPayout = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")
    }
}