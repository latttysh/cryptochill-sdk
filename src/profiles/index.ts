import { AxiosResponse } from "axios";
import { CryptochillBase } from "src/base";
import { ResultT } from "src/types";
import { ProfileT } from "./types";

const endpoint = "profiles"


export class Profiles extends CryptochillBase {
    listProfiles = (): Promise<AxiosResponse<ResultT<ProfileT[]>>> => {
        return this.cryptochillApiRequest(endpoint)
    }

    getProfile = (id: string): Promise<AxiosResponse<ResultT<ProfileT>>> => {
        return this.cryptochillApiRequest(endpoint + `/${id}`)

    }
}