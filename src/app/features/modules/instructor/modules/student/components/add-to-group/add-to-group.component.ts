import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-to-group',
  templateUrl: './add-to-group.component.html',
  styleUrls: ['./add-to-group.component.scss']
})
export class AddToGroupComponent {

  selectValue: string = '';
  groups: any[] = [];

  constructor(
    private _StudentService: StudentService,
    public dialogRef: MatDialogRef<AddToGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { studentId: string }
  ) {
    this.getAllGroups();
  }


  onClose(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    this.dialogRef.close({
      studentId: this.data.studentId,
      groupId: this.selectValue
    });
  }

  getAllGroups() {
    this._StudentService.onGetAllGroups().subscribe({
      next: (resp) => {
        this.groups = resp;
      },

    });
  }


}
