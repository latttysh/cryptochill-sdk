import { CryptochillBase } from "../base";
import { AccountT } from "./accountTypes";
export declare class Account extends CryptochillBase {
    getAccount(): Promise<AccountT>;
}
