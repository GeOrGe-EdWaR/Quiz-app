import { Component } from '@angular/core';
import { DashlistService } from '../../../../services/dashlist.service';
import { Quiz } from '../../../../interfaces/quiz';
import { GroupService } from './../group/services/group.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  completedQuizzes: Quiz[] = [];
  IncomingQuizzes: Quiz[] = [];
  displayedColumns: string[] = ['title', 'group', 'schadule', 'participants'];
  dataSource: any[] = [];

  constructor(
    private _DashlistService: DashlistService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.getCompletedQuiz();
    this.getComingQuiz();
  }

  getCompletedQuiz() {
    this._DashlistService.topLastQuizzes().subscribe({
      next: (res) => {
        this.completedQuizzes = res;
        this.dataSource = this.completedQuizzes;
      },
    });
  }

  getComingQuiz() {
    this._DashlistService.topquiz().subscribe({
      next: (res) => {
        this.IncomingQuizzes = res;
      },
    });
  }

  getGroupById(groupID: string) {
    this.groupService.getGroupById(groupID).subscribe({
      next: (res) => {
        res.name;
      },
    });
  }
}
