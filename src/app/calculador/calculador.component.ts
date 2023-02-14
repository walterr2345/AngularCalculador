import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.scss']
})
export class CalculadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
