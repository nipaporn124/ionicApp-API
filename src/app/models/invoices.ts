
export class invoice {
    id: number;
    invoiceNo: string;
    invoiceDate: Date;
    customerId: number;
    remark: string;
    subtotal: number;
    vat: number;
    discount: number;
    grandTotal: number;
    invoiceItems: invoiceItem[];
}

export class invoiceItem {
    id: number;
    invoiceId: number;
    productId: number;
    description: string;
    unitPrice: number;
    qty: number;
    discount: number;
    lineTotal: number;
}
