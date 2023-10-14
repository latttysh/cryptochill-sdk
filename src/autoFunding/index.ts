import { CryptochillBase } from "src/base";

const endpoint = "automatic-funding"

export class AutoFunding extends CryptochillBase {
    listAutoFunding = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getAutoFunding = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createAutoFunding = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    updateAutoFunding = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "PUT")
    }

    deleteAutoFunding = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, null, "DELETE")
    }
}