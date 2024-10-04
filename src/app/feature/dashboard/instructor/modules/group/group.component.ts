import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { GroupService } from './services/group.service';

import { Group } from './interfaces/group';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  groups: Group[] = [];

  constructor(private groupService: GroupService, public dialog: MatDialog) {}

  ngOnInit() {
    this.AllGroups();
  }

  AllGroups() {
    this.groupService.getAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
      },
    });
  }

  addGroup() {
    this.dialog.open(AddEditGroupComponent, {
      minWidth: '50%',
    });
  }

  editGroup(group: Group) {}

  deleteGroup(group: Group) {}
}
