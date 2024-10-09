import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz, QuizResponse } from '../interfaces/quiz';
import { FormGroup } from '@angular/forms';
import { ListColumn } from 'src/app/shared/interfaces/list-column';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _HttpClient: HttpClient) {}

  addQuiz(quizForm: FormGroup): Observable<QuizResponse> {
    return this._HttpClient.post<QuizResponse>(`quiz`, quizForm.value);
  }

  updateQuiz(quizID: string, quizForm: FormGroup) {
    return this._HttpClient.put(`quiz/${quizID}`, quizForm.value);
  }

  quizDetails(quizID: string): Observable<Quiz> {
    return this._HttpClient.get<Quiz>(`quiz/${quizID}`);
  }

  get listColumns(): ListColumn[] {
    return [
      {
        type: 'text',
        header: 'Title',
        datafield: 'title',
      },
      {
        type: 'text',
        header: 'Group Name',
        datafield: 'group',
      },
      {
        type: 'date',
        header: 'Date',
        datafield: 'schadule',
      },
      {
        type: 'text',
        header: 'No. of students',
        datafield: 'participants',
      },
    ];
  }
}
