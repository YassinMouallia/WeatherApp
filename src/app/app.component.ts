import { Component, EventEmitter, Output } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WeatherReportService } from '../services/weather-report.service';
import { report } from 'node:process';

@Component({
  selector: 'app-root',
  imports: [WeatherReportComponent, SearchComponent, FooterComponent],
  providers: [WeatherReportService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WeatherApp';
  emitEvent: boolean = false;
  hidetable: boolean = true;

  WeatherData: any = {
    unit: {
      TemperatureUnit: '',
      WindSpeedUnit: ''
    },
    reportdate: '',
    Humidity: '',
    Temperature: '',
    WindSpeed: '',
    pressure: '',
    WindDirection: '',
    image: '',
    SunRise: '',
    SunSet: '',
    CityName: '',
    Weather: '',
    cloudcoverage: ''
  };
  Messageerror: any = {
    message: '',
    error: ''
  };
  getUnit(unit:string):void{
    if(unit === 'metric')
      {
      this.WeatherData.unit.TemperatureUnit = '°C';
      this.WeatherData.unit.WindSpeedUnit = 'm/s';
    }
    else if(unit === 'imperial'){
      this.WeatherData.unit.TemperatureUnit = '°F';
      this.WeatherData.unit.WindSpeedUnit = 'miles/h';
    }
    else if (unit === 'standard'){
      this.WeatherData.unit.TemperatureUnit = 'K';
      this.WeatherData.unit.WindSpeedUnit='m/s';  
  }
  }
  constructor(private WeatherReport: WeatherReportService) { }

  ReceiveWeatherReport($event: string[]): void {
    this.WeatherReport.fetchData($event).subscribe(
      (data: any) => {
        this.WeatherData.reportdate = new Date(data.dt * 1000);
        this.WeatherData.Humidity = data.main.humidity;
        this.WeatherData.Temperature = data.main.temp.toFixed(1);
        this.WeatherData.WindSpeed = data.wind.speed.toFixed(1);
        this.WeatherData.WindDirection = data.wind.deg;
        this.WeatherData.SunRise = new Date(data.sys.sunrise * 1000);
        this.WeatherData.SunSet = new Date(data.sys.sunset * 1000);
        this.WeatherData.image = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        this.WeatherData.pressure = data.main.pressure;
        this.WeatherData.CityName = data.name;
        this.WeatherData.Weather = data.weather[0].main;
        this.WeatherData.cloudcoverage = data.clouds.all;
        this.getUnit($event[1]);
        this.hidetable = false;
        this.emitEvent = false;
        this.Messageerror.message = '';
        this.Messageerror.error = '';
      },
      (err) => {
        
        this.Messageerror.message = err.message;
        this.Messageerror.error = err.error;
        this.emitEvent = true;
        this.hidetable = true;
      }
    );
  }
}