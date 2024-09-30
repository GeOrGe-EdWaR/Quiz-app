import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { instructorGuard } from 'src/app/core/guards/instructor/instructor.guard';
import { studentGuard } from 'src/app/core/guards/student/student.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'instructor',
        canActivate:[instructorGuard],
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },
      {
        path: 'student',
        canActivate:[studentGuard],
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
