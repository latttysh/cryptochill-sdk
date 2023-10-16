import { AxiosResponse } from "axios";
import { CryptochillBase } from "src/base";
import { ResultT } from "src/types";
import { PayoutConfirmationsT } from "./types";

const endpoint = "payouts"


export class Payouts extends CryptochillBase {
    listPayouts = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getPayout = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createPayout = (payload: any) => {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }

    approveOrRejectPayout = (id: string, isApprove: boolean) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`, { approve: isApprove }, "PUT")

    }

    payoutConfirmations = (ids: string[]): Promise<AxiosResponse<ResultT<PayoutConfirmationsT[]>>> => {
        return this.cryptochillApiRequest(endpoint + "/confirmations/", { id: ids }, "POST")
    }
}