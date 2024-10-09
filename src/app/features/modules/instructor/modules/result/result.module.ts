import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { CompletedQuizesListComponent } from './components/completed-quizes-list/completed-quizes-list.component';
import { QuizResultsListComponent } from './components/quiz-results-list/quiz-results-list.component';


@NgModule({
  declarations: [
    ResultComponent,
    CompletedQuizesListComponent,
    QuizResultsListComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
