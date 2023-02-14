import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent {
  public calc$: any
  constructor(
    // public currvalue = '',
    // public toShow = '0',
    // private calc = Store<{ calc: string }>
  ) {
    this.calc$
  }

  currvalue = ''
  toShow = '0'


  press(value: string) {
    this.currvalue = this.currvalue + value
    this.toShow = this.currvalue
  }

  equals() {
    this.toShow = eval(this.currvalue)
    this.currvalue = this.toShow
  }

  clear() {
    this.currvalue = ''
    this.toShow = '0'
  }

  back() {
    this.currvalue = this.currvalue.slice(0, -1)
    this.toShow = this.currvalue
    if (this.toShow === '') {
      this.toShow = '0'
    }
  }
}
