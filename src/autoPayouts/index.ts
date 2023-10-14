import { CryptochillBase } from "src/base";

const endpoint = "automatic-payouts"

export class AutomaticPayouts extends CryptochillBase {
    listAutoPayouts = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getAutoPayout = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createAutoPayout = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateAutoPayout = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "PUT")
    }

    deleteAutoPayout = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")
    }
}