import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent {
  calc$: Observable<string>

  /*
    count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  */
  constructor(
    private calc: Store<{ calc: string }>
  ) {
    this.calc$ = calc.select('calc')
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
