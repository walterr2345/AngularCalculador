import { Action, State, createReducer, on } from '@ngrx/store'
import { back, clear, equals, press} from './calculator.actions'


export interface calculadorState {
  toShow: string,
  currentValue: string
}

export const initialState: calculadorState = {
  toShow: '0',
  currentValue: ' '
}

export const calculatorReducer = createReducer(

  initialState,
  on(press, (state, { value }) => ({ ...state,  currentValue: state.currentValue + value, toShow: state.currentValue + value })),

  on(equals, (state) =>({...state, currentValue: eval(state.currentValue) }) ),

  on(clear, () => ({ toShow: '0', currentValue: '' }))
);
