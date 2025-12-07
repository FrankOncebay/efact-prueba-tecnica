import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = '/api-efact-ose/oauth/token';

  token: string | null = null;
  currentUser: string | null = null; // ← RUC/usuario

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('efact_token');
    this.currentUser = localStorage.getItem('efact_user');
  }

  async login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders({
      'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const resp = await firstValueFrom(
      this.http.post<AuthResponse>(this.authUrl, body.toString(), { headers })
    );

    this.token = resp.access_token;
    this.currentUser = username;

    localStorage.setItem('efact_token', resp.access_token);
    localStorage.setItem('efact_user', username);

    return resp;
  }

  logout() {
    this.token = null;
    this.currentUser = null;
    localStorage.removeItem('efact_token');
    localStorage.removeItem('efact_user');
  }

  get isAuthenticated(): boolean {
    return !!this.token;
  }
}
