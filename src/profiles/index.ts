import { CryptochillBase } from "src/base";

const endpoint = "profiles"


export class Profiles extends CryptochillBase {
    listProfiles = () => {
        return this.cryptochillApiRequest(endpoint)
    }

    getProfile = (id: string) => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)

    }
}