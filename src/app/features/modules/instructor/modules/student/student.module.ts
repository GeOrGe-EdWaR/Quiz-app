import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { UpdateComponent } from './components/update/update.component';
import { AddToGroupComponent } from './components/add-to-group/add-to-group.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentComponent, AddToGroupComponent, UpdateComponent],
  imports: [CommonModule, StudentRoutingModule, SharedModule],
})
export class StudentModule {}
