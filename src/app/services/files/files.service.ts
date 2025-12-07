import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private baseUrl = '/api-efact-ose/v1';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`
    });
  }

  getXml(ticket: string): Observable<Blob> {
    return this.http.get(
      `${this.baseUrl}/xml/${ticket}`,
      { headers: this.getHeaders(), responseType: 'blob' }
    );
  }

  getCdr(ticket: string): Observable<Blob> {
    return this.http.get(
      `${this.baseUrl}/cdr/${ticket}`,
      { headers: this.getHeaders(), responseType: 'blob' }
    );
  }

  getPdf(ticket: string): Observable<Blob> {
    return this.http.get(
      `${this.baseUrl}/pdf/${ticket}`,
      { headers: this.getHeaders(), responseType: 'blob' }
    );
  }
}
