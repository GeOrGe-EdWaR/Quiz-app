import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListColumn } from 'src/app/shared/interfaces/list-column';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private url = 'quiz';

  constructor(private http: HttpClient) {}

  getCompletedQuizesresult(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + 'result');
  }

  get listColumns(): ListColumn[] {
    return [
      {
        type: 'text',
        header: ' Title',
        datafield: 'title',
      },
      {
        type: 'text',
        header: 'Group name',
        datafield: 'group',
      },
      {
        type: 'text',
        header: 'Category type',
        datafield: 'difficulty',
      },
      {
        type: 'length',
        header: 'Participants',
        datafield: 'participants',
      },
      {
        type: 'actions',
        header: 'Actions',
        datafield: 'actions',
        actions: {
          isView: true,
          isEdit: false,
          isDelete: false,
        },
      },
    ];
  }
}
