import { createAction, props } from '@ngrx/store'

export const equals = createAction('[Calc Component] equals')
export const back = createAction('[Calc Component] back')
export const clear = createAction('[Calculator] Clear')
export const press = createAction('[Calculator] Press', props<{ value: string }>())