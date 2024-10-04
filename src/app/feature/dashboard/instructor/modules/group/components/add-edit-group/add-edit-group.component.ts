import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GroupService } from '../../services/group.service';

import { GroupStudent } from '../../interfaces/group-student';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss'],
})
export class AddEditGroupComponent {
  studentsDropDown: GroupStudent[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _group: GroupService
  ) {}

  ngOnInit(): void {
    this.getStudentsDropDown();
  }

  getStudentsDropDown(): void {
    this._group.getStudentsWithoutGroups().subscribe({
      next: (data) => {
        this.studentsDropDown = data;
      },
    });
  }

  handleSubmit(): void {}

  handleClose(): void {}
}
