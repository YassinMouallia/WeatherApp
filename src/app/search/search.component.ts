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
  @Output()
  emmiter = new EventEmitter<string>();
  @Input()
  error: boolean = false;
  @Input()
  messageError: any = {
    message: '',
    code: ''
  };
  constructor() { }

  Validation() {
    if (this.cityName.length > 4) {
      this.SendCityName();
    } else {
      this.error = true;
      this.messageError.message = 'Please enter a valid city name';
    }
  }

  SendCityName(): void {
    this.emmiter.emit(this.cityName);
  }
}