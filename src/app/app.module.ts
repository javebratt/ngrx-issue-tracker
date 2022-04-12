import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { modules } from './modules/modules';
import { IssuesComponent } from './components/issues/issues/issues.component';
import { NewIssueComponent } from './components/issues/new-issue/new-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueListComponent } from './components/issues/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issues/issue-detail/issue-detail.component';

@NgModule({
  declarations: [AppComponent, IssuesComponent, NewIssueComponent, IssueListComponent, IssueDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    ...modules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
