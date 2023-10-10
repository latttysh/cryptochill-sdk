import { CryptochillBase } from "../base";

const endpoint = "account"

export class Account extends CryptochillBase {

    getAccount(): Promise<Account> {
        return this.cryptochillApiRequest(endpoint + '/stettings/')
    }
}