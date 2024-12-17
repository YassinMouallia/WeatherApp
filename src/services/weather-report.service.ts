import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
  private readonly API_KEY = "f27327486870e0e42a5dc3d6b4819b57";

  constructor(private http:HttpClient) { }
  fetchData(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+this.API_KEY+'&units=metric');

  }
}
