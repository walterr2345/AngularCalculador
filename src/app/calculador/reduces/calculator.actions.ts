import { createAction } from '@ngrx/store'

export const equals = createAction('[Calc Component] equals')
export const back = createAction('[Calc Component] back')
export const press = createAction('[Calculator] Press');
export const clear = createAction('[Calculator] Clear');