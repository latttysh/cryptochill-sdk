import { CryptochillBase } from "../base";
import { CreateInvoicePayloadT, GetInvoicesParamsT, InvoiceListT, InvoiceT } from "./invoicesTypes";
export declare class Invoices extends CryptochillBase {
    listInvoices(params: GetInvoicesParamsT): Promise<InvoiceListT>;
    getInvoice(id: string): Promise<{
        result: InvoiceT;
    }>;
    createInvoice(payload: CreateInvoicePayloadT): Promise<{
        result: InvoiceT;
    }>;
}
