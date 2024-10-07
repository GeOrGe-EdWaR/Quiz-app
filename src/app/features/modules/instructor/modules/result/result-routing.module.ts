import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './result.component';
import { CompletedQuizesListComponent } from './components/completed-quizes-list/completed-quizes-list.component';
import { QuizResultsListComponent } from './components/quiz-results-list/quiz-results-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompletedQuizesListComponent,
    children: [{ path: ':/id', component: QuizResultsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultRoutingModule {}
