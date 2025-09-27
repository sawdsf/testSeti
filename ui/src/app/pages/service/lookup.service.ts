 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contragent } from 'src/interfaces/contragent';
import { Warehouse } from 'src/interfaces/warehouse';
import { Tmc } from 'src/interfaces/tmc';
import { Contract } from 'src/interfaces/contract';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  constructor(private http: HttpClient) {}

  getContragents(): Observable<Contragent[]> {
    return this.http.get<Contragent[]>('/api/contragents');
  }

  getWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>('/api/warehouses');
  }

  getTmcs(): Observable<Tmc[]> {
    return this.http.get<Tmc[]>('/api/tmcs');
  }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>('/api/contracts');
  }
}