import { IncomingDocumentRow } from "./incoming-document-row";
import { Contragent } from "./contragent";
import { Contract } from "./contract";
import { Warehouse } from "./warehouse";

export interface IncomingDocument {
  id?: number;
  documentDate: string;
  documentNumber: string;
  posted: boolean;
  contragent?: Contragent;
  contract?: Contract;
  warehouse?: Warehouse;
  rows: IncomingDocumentRow[];
}