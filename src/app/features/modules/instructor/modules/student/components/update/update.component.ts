import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  selectValue: string = '';
  groups: any[] = [];

  constructor(
    private _StudentService: StudentService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { studentId: string, currentGroup: any }
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

        if (this.data.currentGroup && this.data.currentGroup._id) {
          this.selectValue = this.data.currentGroup._id;
        }
      },
      error: (err) => {
        console.error('Error fetching groups:', err);
      }
    });
  }
}
