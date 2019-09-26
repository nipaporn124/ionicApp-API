import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { invoice } from '../models/invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addinvoices(_Invoices): Observable<invoice> {
    return this.http.post<invoice>(this.baseUrl + '/invoices', _Invoices);
  }

  updateinvoices(_Invoices): Observable<invoice> {
    return this.http.put<invoice>(`${this.baseUrl}/invoices/${_Invoices.id}`, _Invoices);
  }

  getinvoices(): Observable<invoice[]> {
    return this.http.get<invoice[]>(this.baseUrl + '/invoices');
  }

  getQuotationById(id: number): Observable<invoice> {
    return this.http.get<invoice>(`${this.baseUrl}/invoices/${id}`);
  }
}
