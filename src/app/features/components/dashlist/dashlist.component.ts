import { DashlistService } from '../../services/dashlist.service';
import { Component } from '@angular/core';
import { Quiz } from '../../interfaces/quiz';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ListColumn } from 'src/app/shared/interfaces/list-column';
import { QuizService } from '../../modules/instructor/modules/quiz/services/quiz.service';

@Component({
  selector: 'app-dashlist',
  templateUrl: './dashlist.component.html',
  styleUrls: ['./dashlist.component.scss'],
})
export class DashlistComponent {
  role: string = '';
  students: any;
  quizzes: Quiz[] = [];
  images: string[] = [
    '../../../../../assets/images/user img.svg',
    '../../../../../assets/images/user img.png',
    '../../../../../assets/images/2.svg',
    '../../../../../assets/images/4.png',
    '../../../../../assets/images/user img.svg',
  ];
  columns: ListColumn[] = [];
  completedQuizzes: Quiz[] = [];

  constructor(
    private _DashlistService: DashlistService,
    private _AuthService: AuthService,
    private quizService: QuizService,
  ) {
    this.columns = this.quizService.listColumns;
  }

  ngOnInit(): void {
    this.role = this._AuthService.role;
    if (this.role === 'Instructor') {
      this.getStudentsTop();
    }
    this.getComingQuiz();
    this.getCompletedQuiz();
  }

  getStudentsTop() {
    this._DashlistService.topstudents().subscribe({
      next: (res) => {
        this.students = res;
        console.log(res);
      },
    });
  }

  getComingQuiz() {
    this._DashlistService.topquiz().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzes = res;
      },
    });
  }

  getCompletedQuiz() {
    this._DashlistService.topLastQuizzes().subscribe({
      next: (res) => {
        this.completedQuizzes = res;
      },
    });
  }
}
