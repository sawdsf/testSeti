import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IncomingDocument } from 'src/interfaces/incoming-document';

@Injectable({
  providedIn: 'root'
})
export class IncomingDocumentService {
  private apiUrl = '/api/incoming-documents';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IncomingDocument[]> {
    return this.http.get<IncomingDocument[]>(this.apiUrl);
  }

  getById(id: number): Observable<IncomingDocument> {
    return this.http.get<IncomingDocument>(`${this.apiUrl}/${id}`);
  }

  create(doc: IncomingDocument): Observable<IncomingDocument> {
    return this.http.post<IncomingDocument>(this.apiUrl, doc);
  }

  update(id: number, doc: IncomingDocument): Observable<IncomingDocument> {
    return this.http.put<IncomingDocument>(`${this.apiUrl}/${id}`, doc);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  post(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/post`, {});
  }

  unpost(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/unpost`, {});
  }
}