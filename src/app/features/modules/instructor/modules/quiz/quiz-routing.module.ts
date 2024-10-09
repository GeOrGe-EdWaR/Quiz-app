import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { MaintainQuizComponent } from './components/maintainQuiz/maintain-quiz.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'editQuiz/:id', component: MaintainQuizComponent },
  { path: 'details/:id', component: MaintainQuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
