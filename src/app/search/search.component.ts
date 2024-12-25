import { Component, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public cityName: string = '';
  Units: string[]=["metric","imperial","standard"];
  selectedUnit='metric';
  @Output()
  emmiter = new EventEmitter<string[]>();
  @Input()
  error: boolean = false;
  @Input()
  messageError: any = {
    message: '',
    code: ''
  };
  constructor() { }
  // This function validates the city name with length of the cityName variable and sends it to the parent component
  Validation() {
    if (this.cityName.length > 3) {
      this.SendCityName();
    } else {
      this.error = true;
      this.messageError.message = 'Please enter a valid city name';
    }
  }

  SendCityName(): void {
    this.emmiter.emit([this.cityName, this.selectedUnit]);
    
  }

}