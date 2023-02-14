import { State, createReducer, on } from '@ngrx/store'
import { back, clear, equals, press } from './calculator.actions'

export let toShow = '0'
export let currvalue = ''

export const calcReducer = createReducer(
    toShow,
    // currvalue,
    // on(press, (value) => currvalue = currvalue + value),
    // on(equals, () => toShow = eval(currvalue)),
    on(clear, () => '0'),
    // on(back, ())

)