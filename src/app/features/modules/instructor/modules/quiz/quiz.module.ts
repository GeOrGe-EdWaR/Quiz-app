import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaintainQuizComponent } from './components/maintainQuiz/maintain-quiz.component';
import { CodeSuccessComponent } from './components/code-success/code-success.component';

@NgModule({
  declarations: [QuizComponent, MaintainQuizComponent, CodeSuccessComponent],
  imports: [CommonModule, QuizRoutingModule, SharedModule],
})
export class QuizModule {}
