import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {env}

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {

  /*use your own api key 
    *for more informations, visit this link:https://openweathermap.org/api
    *Under the Current & Forecast weather data collection pick Current Weather Data option to get The API KEY
    * 
  */
  //IMPORTANT: ADD API KEY HERE
  private readonly API_KEY = "";

  constructor(private http: HttpClient) { }
  
fetchData(request: string[]):Observable<any> {
  const city = request[0];
  const unit = request[1];
  
  if (!this.API_KEY) {
    throw new Error("ERROR: INVALID API KEY");
  }
  

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=${unit}`, { responseType: 'json' })
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