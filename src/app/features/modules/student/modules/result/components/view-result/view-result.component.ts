import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss'],
})
export class ViewResultComponent {
  userName: string = '';
  percentage: number | undefined = undefined;

  constructor(
    public dialogRef: MatDialogRef<ViewResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Result
  ) {}

  ngOnInit(): void {
    const { quiz, result } = this.data;

    this.userName =
      result.participant.first_name + ' ' + result.participant.last_name;

    this.percentage =
      (result.score / (quiz.questions_number * quiz.score_per_question)) * 100;
  }

  close(): void {
    this.dialogRef.close();
  }
}
