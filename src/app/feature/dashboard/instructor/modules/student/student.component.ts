import { Component } from '@angular/core';
import { Student } from './interfaces/student';
import { StudentService } from './services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  openDialog() {
    throw new Error('Method not implemented.');
  }
  students: Student[] = [];
  studentsWithoutGroup: Student[] = [];

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.AllStudents();
    this.AllStudentsWithoutGroup();
  }

  AllStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (res) => {
        this.students = res;
      },
    });
  }

  AllStudentsWithoutGroup() {
    this.studentService.getAllStudentsWithoutGroup().subscribe({
      next: (res) => {
        this.studentsWithoutGroup = res;
      },
    });
  }

  editStudent(student: Student) {}

  AddTOGroup() {}

  getStudentById(id: string) {}

  deleteStudentDialog(student: Student) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: 'w-50',
      data: {
        title: 'Delete Student',
        message: `Are you sure you want to delete student ${student.first_name}?`,
        _id: student._id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteStudent(result._id);
      } else {
        console.log('Delete canceled');
      }
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe({
      next: () => {
        this.toastr.success('Student deleted successfully', 'Success');
        this.AllStudents();
      },
    });
  }
}
