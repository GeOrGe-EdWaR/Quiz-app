import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material/dialog';
DeleteComponent;
import { GroupService } from './services/group.service';

import { Group } from './interfaces/group';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  groups: Group[] = [];

  addDialogRef: any;
  editDialogRef: any;

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
    this.addDialogRef = this.dialog.open(AddEditGroupComponent, {
      minWidth: '50%',
    });

    this.addDialogRef.afterClosed().subscribe(() => {
      this.AllGroups();
    });
  }

  editGroup(group: Group) {
    this.editDialogRef = this.dialog.open(AddEditGroupComponent, {
      minWidth: '50%',
      data: { id: group._id },
    });

    this.editDialogRef.afterClosed().subscribe(() => {
      this.AllGroups();
    });
  }

  deleteGroup(group: Group) {}
}
