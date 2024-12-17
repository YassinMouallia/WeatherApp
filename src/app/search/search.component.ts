import { Component, Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public cityName: string = '';
  @Output()
  emmiter = new EventEmitter<string>();
  private error : boolean=false;
  constructor(){}
  





  SendCityName(){
    this.emmiter.emit(this.cityName);
  }
  

}
