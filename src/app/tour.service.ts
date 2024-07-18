import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  [x: string]: any;
  private apiUrl = 'http://localhost:8080/api/v1/students'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getTourList(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  getTourById(id: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${id}`);
  }

  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, tour);
  }

  updateTour(id: number, tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${id}`, tour);
  }

  deleteTour(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
