import { AxiosResponse } from "axios";
import { CryptochillBase } from "../base";
import { CreateInvoicePayloadT, GetInvoicesParamsT, InvoiceListT, InvoiceT } from "./invoicesTypes";

const endpoint = "invoices"

export class Invoices extends CryptochillBase {

    listInvoices(params: GetInvoicesParamsT): Promise<InvoiceListT> {
        return this.cryptochillApiRequest(endpoint)
    }

    getInvoice(id: string): Promise<{ result: InvoiceT }> {
        return this.cryptochillApiRequest(endpoint + `/${id}`)
    }

    createInvoice(payload: CreateInvoicePayloadT): Promise<AxiosResponse<InvoiceT>> {
        return this.cryptochillApiRequest(endpoint, payload, "POST")
    }
}