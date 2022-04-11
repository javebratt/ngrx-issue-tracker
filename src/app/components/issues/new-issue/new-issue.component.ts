import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as IssueActions from '../../../store/issue/issue.actions';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss'],
})
export class NewIssueComponent {
  form: FormGroup;
  constructor(
    private readonly store: Store<RootState>,
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['low', Validators.required],
    });
  }

  submit(): void {
    const issue = this.form.value;
    this.store.dispatch(IssueActions.submit(issue));
  }
}
