import { Action, createReducer, on } from '@ngrx/store';
import { initialState, IssueState } from './issue.state';
import * as IssueActions from './issue.actions';
import produce from 'immer';

export const reducer = createReducer(
  initialState,
  on(IssueActions.submit, (state, { issue }) =>
    produce(state, (draft) => {
      draft.entities[issue.id] = {
        ...issue,
        resolved: false,
      };
    })
  ),
  on(IssueActions.search, (state, { text }) => ({
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  })),
  on(IssueActions.resolve, (state, { issueId }) => {
    const issue = state.entities[issueId];
    return {
      ...state,
      entities: {
        ...state.entities,
        [issueId]: {
          ...issue,
          resolved: true,
        },
      },
    };
  })
);

export const issueReducer = (state: IssueState, action: Action): IssueState => {
  try {
    return reducer(state, action);
  } catch (error) {
    console.error(error);
    return state;
  }
};
