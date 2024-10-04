import { Component } from '@angular/core';
import { Student } from './interfaces/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  students: Student[] = [];
  studentsWithoutGroup: Student[] = [];

  constructor(private studentService: StudentService) {}

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

  deleteStudent(Student: Student) {}

  AddTOGroup() {}
}
