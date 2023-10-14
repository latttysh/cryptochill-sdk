import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import { CreateInvoicePayloadT, GetInvoicesParamsT, InvoiceListT, InvoiceT } from "./invoicesTypes";
import { ResultT } from "src/types";

const endpoint = "invoices"

export class Invoices extends CryptochillBase {

    listInvoices(params: GetInvoicesParamsT): Promise<AxiosResponse<ResultT<InvoiceListT[]>>> {
        return this.cryptochillApiRequest(endpoint)
    }

    getInvoice(id: string): Promise<AxiosResponse<ResultT<InvoiceListT>>> {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createInvoice(payload: CreateInvoicePayloadT): Promise<AxiosResponse<ResultT<InvoiceT>>> {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }
}