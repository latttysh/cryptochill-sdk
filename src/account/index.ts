import { CryptochillBase } from "../base";
import { AccountT } from "./accountTypes";

const endpoint = "account"

export class Account extends CryptochillBase {

    getAccount(): Promise<AccountT> {
        return this.cryptochillApiRequest(endpoint + '/settings/')
    }
}