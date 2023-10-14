import { AxiosResponse } from "axios";
import { CryptochillBase } from "src/base";
import { ResultT } from "src/types";
import { ConversionT } from "./types";

const endpoint = "conversions"


export class Conversions extends CryptochillBase {
    listConversions = (): Promise<AxiosResponse<ResultT<ConversionT[]>>> => {
        return this.cryptochillApiRequest(endpoint)
    }

    getConversion = (id: string): Promise<AxiosResponse<ResultT<ConversionT>>> => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)

    }

    createConversion = (payload: any): Promise<AxiosResponse<ResultT<ConversionT>>> => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateConversion = (id: string, payload: any): Promise<AxiosResponse<ResultT<ConversionT[]>>> => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, payload, "PUT")
    }

    deleteConversion = (id: string): Promise<AxiosResponse> => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")

    }
}