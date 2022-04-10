export interface State {
  count: number;
}

import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props,
} from '@ngrx/store';

export const increment = createAction('[Counter] Increment');

export const multiply = createAction(
  '[Counter] Multiply',
  props<{ factor: number }>()
);

export const countReducer = createReducer(
  0,
  on(increment, (count) => count + 1),
  on(multiply, (count, { factor }) => count * factor)
);

export const reducers: ActionReducerMap<State> = {
  count: countReducer,
};
