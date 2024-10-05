import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Student } from 'src/app/feature/dashboard/instructor/modules/student/interfaces/student';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { StudentService } from 'src/app/feature/dashboard/instructor/modules/student/services/student.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; message: string; _id: string },
    private studentService: StudentService,
    public dialogRef: MatDialogRef<DeleteComponent>
  ) {}
  students: Student[] = [];
  studentsWithoutGroup: Student[] = [];

  close(): void {
    this.dialog.closeAll();
  }
  onSubmit() {this.dialogRef.close({
    _id: this.data._id,
  })}
}
