import { CryptochillBase } from "src/base";

const endpoint = "wallets"


export class Wallets extends CryptochillBase {
    listWallets = (query: any) => {
        return this.cryptochillApiRequest(endpoint)
    }

    getWallet = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }
}