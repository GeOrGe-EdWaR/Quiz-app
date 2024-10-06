import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { QuestionService } from './services/question.service';
import { ToastrService } from 'ngx-toastr';

import { ListColumn } from './../../../../../shared/interfaces/list-column';
import { QuestionItem } from './interfaces/question-item';
import { MaintainQuestionResponse } from './interfaces/maintain-question-response';

import { MaintainQuestionComponent } from './components/maintain-question/maintain-question.component';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  questionsList: QuestionItem[] = [];

  columns: ListColumn[] = [];

  addDialogRef!: MatDialogRef<MaintainQuestionComponent>;
  editDialogRef!: MatDialogRef<MaintainQuestionComponent>;
  deleteDialogRef!: MatDialogRef<DeleteComponent>;

  constructor(
    private _question: QuestionService,
    public dialog: MatDialog,
    private _toastr: ToastrService
  ) {
    this.columns = this._question.listColumns;
  }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions(): void {
    this._question.getAllQuestions().subscribe({
      next: (data) => {
        this.questionsList = data;
      },
    });
  }

  onAddAction(): void {
    this.addDialogRef = this.dialog.open(MaintainQuestionComponent, {
      width: '60%',
    });

    this.addDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.getAllQuestions();
      }
    });
  }

  onViewAction(question: MaintainQuestionResponse): void {
    this.dialog.open(MaintainQuestionComponent, {
      minWidth: '50%',
      data: {
        question,
        isView: true,
      },
    });
  }

  onEditAction(question: MaintainQuestionResponse): void {
    this.editDialogRef = this.dialog.open(MaintainQuestionComponent, {
      minWidth: '50%',
      data: {
        question,
        isView: false,
      },
    });

    this.editDialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.getAllQuestions();
      }
    });
  }

  onDeleteAction(_id: string): void {
    this.deleteDialogRef = this.dialog.open(DeleteComponent, {
      minWidth: '50%',
      data: {
        title: 'Delete Question',
        message: `Are you sure you want to delete this question  ?`,
        _id,
      },
    });

    this.deleteDialogRef.afterClosed().subscribe((result) => {
      if (result._id) {
        this.deleteQuestion(result._id);
      }
    });
  }

  deleteQuestion(_id: string): void {
    this._question.deleteQuestion(_id).subscribe({
      next: () => {
        this._toastr.success('Question is deleted successfully', 'Success');

        this.getAllQuestions();
      },
    });
  }
}
