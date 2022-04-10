import { ActionReducerMap } from '@ngrx/store';
import { issueReducer } from './issue/issue.reducers';
import { IssueState } from './issue/issue.state';

export interface RootState {
  issue: IssueState;
}

export const reducers: ActionReducerMap<RootState> = {
  issue: issueReducer,
};
