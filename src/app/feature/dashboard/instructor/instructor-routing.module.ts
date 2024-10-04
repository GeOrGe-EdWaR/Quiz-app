import { DashlistComponent } from './dashlist/dashlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorComponent,
    children: [
      {
        path: 'dashlist',
      component:DashlistComponent
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./modules/group/group.module').then((m) => m.GroupModule),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./modules/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
      {
        path: 'quizzes',
        loadChildren: () =>
          import('./modules/quiz/quiz.module').then((m) => m.QuizModule),
      },
      {
        path: 'results',
        loadChildren: () =>
          import('./modules/result/result.module').then((m) => m.ResultModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
