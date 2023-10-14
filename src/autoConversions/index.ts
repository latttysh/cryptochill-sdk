import { CryptochillBase } from "src/base";
import { AutoConversionT, CreateAutoConversionPayloadT, UpdateAutoConversionPayloadT } from "./types";
import { AxiosResponse } from "axios";
import { InvoiceT } from "src/invoices/invoicesTypes";
import { ResultT } from "src/types";

const endpoint = "automatic-conversions"


export class AutoConversions extends CryptochillBase {


    listAutoConversions(): Promise<AxiosResponse<ResultT<AutoConversionT[]>>> {
        return this.cryptochillApiRequest(endpoint)
    }

    getAutoConversions(id: string) {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createAutoConversions(payload: CreateAutoConversionPayloadT): Promise<AxiosResponse<ResultT<AutoConversionT>>> {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateAutoConversions(id: string, payload: UpdateAutoConversionPayloadT): Promise<AxiosResponse<ResultT<AutoConversionT>>> {
        return this.cryptochillApiRequest(endpoint + `/${id}`, payload, "PUT")
    }

    deleteAutoConversions(id: string): Promise<AxiosResponse> {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")
    }
}