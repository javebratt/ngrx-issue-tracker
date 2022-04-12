import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailComponent } from './components/issues/issue-detail/issue-detail.component';
import { IssuesComponent } from './components/issues/issues/issues.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'issues' },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssueDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
