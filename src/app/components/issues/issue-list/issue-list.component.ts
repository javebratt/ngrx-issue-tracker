import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issue';
import { RootState } from '../../../store';
import * as fromIssue from '../../../store/issue/issue.selectors';
import * as IssueActions from '../../../store/issue/issue.actions';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent implements OnInit {
  issues$: Observable<Issue[]>;
  constructor(private store: Store<RootState>) {
    this.issues$ = this.store.pipe(
      skipWhile((state: RootState) => !fromIssue.selectLoaded(state)),
      select(fromIssue.selectAll)
    );
  }

  search(text: string): void {
    this.store.dispatch(IssueActions.search({ text }));
  }

  ngOnInit(): void {}
}
