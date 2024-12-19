import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
  private readonly API_KEY = "f27327486870e0e42a5dc3d6b4819b57";

  constructor(private http: HttpClient) { }
  
  fetchData(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`, { responseType: 'json' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching weather data', error);
          const errorResponse = {
            message: error.error.message || error.message,
            status: error.status,
            error: error.error
          };
          return throwError(() => errorResponse);
        })
      );
  }
}