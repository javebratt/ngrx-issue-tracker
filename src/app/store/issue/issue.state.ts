import { Issue } from 'src/app/models/issue';

export interface Filter {
  text: string;
}

export interface Issues {
  [id: string]: Issue;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
  loaded: boolean;
}

export const initialState: IssueState = {
  entities: {},
  filter: { text: '' },
  loaded: false,
};
