import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { back, clear, equals, press } from '../reduces/calculator.actions';
import { stringify } from 'querystring';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent {
  currvalue = ''
  toShow: any
  toShow$: any
  currvalue$: Observable<string>;
  toShow2: any

  constructor(
    private calc: Store<any>
  ) {
    this.currvalue$ = calc.select('calculator');
    this.currvalue$.subscribe((pop) => {
      console.log(pop);
    })
    // console.log(this.currvalue$);
  }
  press(value: string) {

    this.calc.dispatch(press({ value: value }))
    // this.toShow = this.currvalue$
    // this.toShow = JSON.stringify(this.currvalue$)

  }

  equals() {
    this.calc.dispatch(equals())
    // this.toShow2 = this.calc.dispatch(equals())
    // console.log(this.toShow2);

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
