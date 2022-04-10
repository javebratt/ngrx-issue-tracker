import { createAction } from '@ngrx/store';
import { Issue } from 'src/app/models/issue';
import { randomId } from 'src/app/utils/id.helper';

export const submit = createAction('[Issue] Submit', (issue: Issue) => {
  return {
    issue: { ...issue, id: randomId() },
  };
});
