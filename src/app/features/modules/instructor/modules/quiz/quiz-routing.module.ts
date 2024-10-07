import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';

const routes: Routes = [{ path: '', component: QuizComponent}, 
  {path:'details/:id',component:QuizdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {
 
 }
