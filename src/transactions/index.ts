import { CryptochillBase } from "src/base";

const endpoint = "transactions"


export class Transactions extends CryptochillBase {
    listTransactions = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getTransaction = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    retrieveConfirmations = (ids: string[]) => {
        return this.cryptochillApiRequest(endpoint, { id: ids }, "POST")
    }
}