import { createReducer, on } from '@ngrx/store';
import { initialState } from './profile.state';

export const profileReducer = createReducer(initialState);
