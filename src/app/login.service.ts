import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/api/v1/tour';
  
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
