import { CryptochillBase } from "src/base";

const endpoint = "conversions"


export class Conversions extends CryptochillBase {
    listConversions = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getConversion = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)

    }

    createConversion = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateConversion = (id: string, payload: any) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, payload, "PUT")
    }

    deleteConversion = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")

    }
}