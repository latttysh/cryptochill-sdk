import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import { AccountT } from "./types";
import { ResultT } from "src/types";

const endpoint = "account"

export class Account extends CryptochillBase {

    getAccount(): Promise<AxiosResponse<ResultT<AccountT>>> {
        return this.cryptochillApiRequest(endpoint + '/settings/')
    }
}