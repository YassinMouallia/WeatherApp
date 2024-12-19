import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  imports: [],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.scss'
})
export class WeatherReportComponent {
  @Input()
  WeatherData: any = {};
  @Input()
  hidetable: boolean = true;
  

  constructor() { }

  toggletablevisibility($event: boolean): void {
    this.hidetable = $event;
  }



}
