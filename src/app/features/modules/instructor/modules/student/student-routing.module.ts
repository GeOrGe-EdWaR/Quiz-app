import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'viewStudent/:id', component: ViewStudentComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
