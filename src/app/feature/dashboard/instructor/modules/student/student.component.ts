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

  AddStudent() {}

  editStudent(Student: Student) {}

  deleteStudentDialog(Student: Student) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '300px',
      data: {
        title: 'Delete Student',
        message: 'Are you sure you want to delete this student?',
        _id: Student._id,
        // group: this.groups.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed deletion
        console.log('Delete confirmed');
        this.deleteStudent(result._id);
      } else {
        // User canceled deletion
        console.log('Delete canceled');
      }
    });
  }

  AddTOGroup() {}
  getStudentById(id: string) {}

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
        this.toastr.success('Student deleted successfully', 'Success');
        this.AllStudents();
      },
    });
  }
}
