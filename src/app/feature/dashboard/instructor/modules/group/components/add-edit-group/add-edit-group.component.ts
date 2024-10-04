import { Component, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { GroupService } from '../../services/group.service';
import { ToastrService } from 'ngx-toastr';

import { GroupStudent } from '../../interfaces/group-student';
import { AddEditGroupRequest } from '../../interfaces/add-edit-group-request';
import { Group } from '../../interfaces/group';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss'],
})
export class AddEditGroupComponent {
  groupId: string = '';

  studentsDropDown: GroupStudent[] = [];

  groupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    students: new FormControl([], [Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<AddEditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { group: any },
    private _group: GroupService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getStudentsDropDown();

    this.groupId = this.data?.group?._id;
  }

  getStudentsDropDown(): void {
    this._group.getStudentsWithoutGroups().subscribe({
      next: (data) => {
        this.studentsDropDown = data;

        if (this.groupId) {
          this.initGroup();
        }
      },
    });
  }

  initGroup(): void {
    console.log('this.data.group', this.data.group);
    this.groupForm.patchValue({
      name: this.data.group.name,
      students: this.data.group.students,
    });
  }

  handleSubmit(): void {
    this.groupForm.markAllAsTouched();

    if (this.groupForm.valid) {
      if (this.groupId) {
        this.editGroup();
      } else {
        this.addGroup();
      }
    }
  }

  handleClose(): void {
    this.dialogRef.close();
  }

  addGroup(): void {
    this._group
      .addGroup(this.groupForm.value as AddEditGroupRequest)
      .subscribe({
        next: () => {
          this._toastr.success('Group is added successfully', 'success');
          this.dialogRef.close();
        },
      });
  }

  editGroup(): void {
    this._group
      .editGroup(this.groupId, this.groupForm.value as AddEditGroupRequest)
      .subscribe({
        next: () => {
          this._toastr.success('Group is updated successfully', 'success');
          this.dialogRef.close();
        },
      });
  }
}
