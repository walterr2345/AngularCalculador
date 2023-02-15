import { Action, State, createReducer, on } from '@ngrx/store'
import { back, clear, equals, press } from './calculator.actions'


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
  // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
  on(press, (state, { value }) => ({ ...state, currentValue: state.currentValue + value, toShow: state.currentValue })),

  // this.currvalue = this.currvalue + value
  // this.toShow = this.currvalue

  on(equals, (state, action) => state + eval(initialState.currentValue)),

  on(clear, () => ({ toShow: '0', currentValue: '' }))
);



export function SimpleReducer(state: string = '0', action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case 'SUMA':
      return state = ' OPERACION SUMA'
    case 'RESTA':
      return state = ' OPERACION RESTA'
    case 'MULTIPLICACION':
      return state = ' OPERACION MULTIPLICACION'
    case 'DIVISION':
      return state = ' OPERACION DIVISION'
    case 'ESPAÑOL':
      return state = ' Hi ESPAÑOL'
    case 'FRANCES':
      return state = ' Hi FRANCES'
    default:
      return state;
  }
}

// export const calcReducer = createReducer(
//     initialState,
//     on(press, (value) =>
//         currvalue + value,
//         //  toShow = currvalue
//     ),
//     on(equals, () => toShow = eval(currvalue)),

//     on(back, () => currvalue),

//     on(clear, () => toShow = '0')
// );

/*export interface CalculatorState {
displayValue: string;
operator: string;
leftOperand: number;
rightOperand: number;
}
export const initialState: CalculatorState = {
displayValue: '0',
operator: null,
leftOperand: null,
rightOperand: null,
};
const calculatorReducer = createReducer(
initialState,
on(setDisplayValue, (state, { value }) => ({
...state,
displayValue: value,
})),
on(setOperator, (state, { operator }) => ({
...state,
operator,
leftOperand: parseFloat(state.displayValue),
displayValue: '0',
})),
on(calculateResult, (state) => ({
...state,
rightOperand: parseFloat(state.displayValue),
displayValue: doCalculation(
  state.leftOperand,
  state.rightOperand,
  state.operator
),
leftOperand: null,
rightOperand: null,
operator: null,
}))
);
export function reducer(state: CalculatorState | undefined, action: Action) {
return calculatorReducer(state, action);
}
function doCalculation(
leftOperand: number,
rightOperand: number,
operator: string
) {
switch (operator) {
case '+':
  return (leftOperand + rightOperand).toString();
case '-':
  return (leftOperand - rightOperand).toString();
case '*':
  return (leftOperand * rightOperand).toString();
case '/':
  return (leftOperand / rightOperand).toString();
default:
  return '0';
}
} */