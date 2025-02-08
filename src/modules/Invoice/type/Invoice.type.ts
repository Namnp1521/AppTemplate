export interface IInvoice {
  id?: number;
  invoice_number?: string;
  vendor_name?: string;
  credit_sale?: number;
  cash_sale?: number;
  receiving_date?: string; //'2025-01-21'
  paid_date?: string; //'2025-01-21'
}
