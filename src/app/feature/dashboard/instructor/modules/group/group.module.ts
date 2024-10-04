import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';


@NgModule({
  declarations: [
    GroupComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule
  ]
})
export class GroupModule { }
