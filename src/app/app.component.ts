import { Component ,EventEmitter,Output} from '@angular/core';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { HttpClient } from '@angular/common/http';
import { WeatherReportService } from '../services/weather-report.service';

@Component({
  selector: 'app-root',
  imports: [WeatherReportComponent,SearchComponent,FooterComponent],
  providers: [WeatherReportService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WeatherApp';
  emitEvent:boolean=true;

  WeatherData:any={
    Humidity:'',
    Temperature:'',
    WindSpeed:'',
    pressure:'',
    WindDirection:'',
    image:'',
    SunRise:'',
    SunSet:'',
    CityName:'',
    Weather:'',
    Description:''
  };
  constructor(private WeatherReport:WeatherReportService){}

  



  RecieveWeatherReport($event: string): void {
    try{
      this.WeatherReport.fetchData($event).subscribe((data:any)=>{
        this.WeatherData.Humidity=data.main.humidity;
        this.WeatherData.Temperature=data.main.temp.toFixed(1);
        this.WeatherData.WindSpeed=data.wind.speed.toFixed(1);
        this.WeatherData.WindDirection=data.wind.deg;
        this.WeatherData.SunRise=new Date(data.sys.sunrise*1000);
        this.WeatherData.SunSet=new Date(data.sys.sunset*1000);
        this.WeatherData.image='http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        this.WeatherData.pressure=data.main.pressure;
        this.WeatherData.CityName=data.name;
        this.WeatherData.Weather=data.weather[0].main;
        this.WeatherData.Description=data.weather[0].description;
    });
      this.emitEvent=false;

    }
    catch(err){
      console.log(err);
    }

    
    
}}
