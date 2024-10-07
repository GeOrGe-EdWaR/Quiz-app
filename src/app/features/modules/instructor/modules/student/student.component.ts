import { Component } from '@angular/core';
import { Student } from './interfaces/student';
import { StudentService } from './services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from './../group/services/group.service';
import { Group } from '../group/interfaces/group';
import { AddToGroupComponent } from './components/add-to-group/add-to-group.component';
import { UpdateComponent } from './components/update/update.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  students: Student[] = [];
  studentsWithoutGroup: Student[] = [];
  groups: Group[] = [];
  studentFiltrationGroup: Student[] = [];

  constructor(
    private studentService: StudentService,
    private groupService: GroupService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.AllStudents();
    this.AllStudentsWithoutGroup();
    this.AllGroup();
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

  AllGroup() {
    this.groupService.getAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
      },
    });
  }

  getGroupByID(groupID: string) {
    this.groupService.getGroupById(groupID).subscribe({
      next: (res) => {
        this.studentFiltrationGroup = res.students;
      },
    });
  }

  editStudent(student: Student, groupId?: string) {
    const addDialogRef = this.dialog.open(UpdateComponent, {
      minWidth: '50%',
      data: { student, groupId },
    });
    addDialogRef.afterClosed().subscribe((groupID) => {
      if (groupID) {
        this.studentService.updateStudentGroup(student._id, groupID).subscribe({
          next: () => {
            this.toastr.success(
              'Student group updated successfully',
              'Success'
            );
            this.getGroupByID( groupId! );
          },
        });
      }
    });
  }

  AddTOGroup(student: Student) {
    const addDialogRef = this.dialog.open(AddToGroupComponent, {
      minWidth: '50%',
    });
    addDialogRef.afterClosed().subscribe((groupID) => {
      if (groupID) {
        this.studentService.AddToGroup(student._id, groupID).subscribe({
          next: () => {
            this.toastr.success(
              'Student Added to group successfully',
              'Success'
            );
            this.AllStudentsWithoutGroup();
          },
        });
      }
    });
  }

  deleteStudentDialog(student: Student) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      minWidth: '50%',
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
