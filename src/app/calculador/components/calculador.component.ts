import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { press, back, clear, equals } from '../reduces/calculator.actions';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent {
  currvalue = ''
  toShow = '0'
  // currvalue$: Observable<string>;
  // toShow$: Observable<string>;
  constructor(
    private calc: Store<{ currvalue: string }>
  ) {
    // this.currvalue$ = Store.pipe(select(state => state.calculator.currvalue));
    // this.toShow$ = Store.pipe(select(state => state.calculator.toShow));

   }




  press(value: string) {
    this.calc.dispatch(press())
    // this.store.dispatch(new press(value));

    // this.currvalue = this.currvalue + value
    // this.toShow = this.currvalue
  }

  equals() {
    this.toShow = eval(this.currvalue)
    this.currvalue = this.toShow
  }

  clear() {
    this.calc.dispatch(clear())

    // this.currvalue = ''
    // this.toShow = '0'
  }

  back() {

    this.currvalue = this.currvalue.slice(0, -1)
    this.toShow = this.currvalue
    if (this.toShow === '') {
      this.toShow = '0'
    }
  }

}
