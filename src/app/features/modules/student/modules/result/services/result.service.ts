import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../interfaces/result';
import { Observable } from 'rxjs';
import { ListColumn } from 'src/app/shared/interfaces/list-column';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor(private httpClient: HttpClient) {}

  getResultList(): Observable<Result> {
    return this.httpClient.get<Result>('quiz/result');
  }

  get listColumns(): ListColumn[] {
    return [
      {
        type: 'object',
        header: 'Quiz Title',
        datafield: 'quiz',
        objectKey: 'title',
      },
      // {
      //   type: 'object',
      //   header: 'Questions Number',
      //   datafield: 'quiz',
      //   objectKey: 'questions_number',
      // },
      // {
      //   type: 'text',
      //   header: 'Type',
      //   datafield: 'quiz',
      //   objectKey: 'type',
      // },
      // {
      //   type: 'text',
      //   header: 'Difficulty',
      //   datafield: 'quiz',
      //   objectKey: 'difficulty',
      // },
      // {
      //   type: 'date',
      //   header: 'Schedule',
      //   datafield: 'quiz',
      //   objectKey: 'schadule',
      // },
      {
        type: 'actions',
        header: 'Actions',
        datafield: 'actions',
        actions: {
          isView: true,
        },
      },
    ];
  }
}
