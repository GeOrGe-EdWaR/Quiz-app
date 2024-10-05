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

  constructor(
    private groupService: GroupService,
    public dialog: MatDialog,
    private _toastr: ToastrService
  ) {}

  ngOnInit() {
    this.AllGroups();
  }

  AllGroups() {
    this.groupService.getAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
        console.log(res);
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

  deleteGroupDialog(group: Group) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px',
      data: {
        title: 'Delete Group',
        message: 'Are you sure you want to delete this group?',
        _id: group._id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed deletion
        console.log('Delete confirmed');
        this.deleteGroup(result._id);
      } else {
        // User canceled deletion
        console.log('Delete canceled');
      }
    });
  }
  deleteItem(_id: string) {
    // Logic to delete the item
    console.log('Item deleted');
  }
  deleteGroup(id: string) {
    this.groupService.deleteGroup(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this._toastr.success('Group deleted successfully', 'Success');
        this.AllGroups();
      },
    });
  }
}
