import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';


@NgModule({
  declarations: [
    QuizComponent,
    QuizdetailsComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export class QuizModule { }
