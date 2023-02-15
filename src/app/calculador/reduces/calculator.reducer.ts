import { State, createReducer, on } from '@ngrx/store'
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
    on(press, (state,) => ({
        ...state,
    }))
)

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