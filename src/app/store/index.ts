import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { issueReducer } from './issue/issue.reducers';
import { IssueState } from './issue/issue.state';
import { resettingMetaReducer } from './meta-reducers';

export interface RootState {
  issue: IssueState;
}

export const reducers: ActionReducerMap<RootState> = {
  issue: issueReducer,
};

export const metaReducers: MetaReducer[] = [resettingMetaReducer];
