import { Tmc } from "./tmc";

export interface IncomingDocumentRow {
  id?: number;
  tmc: Tmc;
  quantity: number;
  price: number;
  total?: number;
}