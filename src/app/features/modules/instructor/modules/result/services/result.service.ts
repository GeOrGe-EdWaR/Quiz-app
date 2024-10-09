import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private url = 'quiz';

  constructor(private http: HttpClient) {}

  getCompletedQuizes(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + 'completed');
  }

  // Handle list columns
  // get listColumns(): ListColumn[] {
  //   return [
  //     {
  //       type: 'text',
  //       header: 'Question Title',
  //       datafield: 'title',
  //     },
  //     {
  //       type: 'text',
  //       header: 'Question Desc',
  //       datafield: 'description',
  //     },
  //     {
  //       type: 'text',
  //       header: 'Question difficulty level',
  //       datafield: 'difficulty',
  //     },
  //     {
  //       type: 'text',
  //       header: 'Type',
  //       datafield: 'type',
  //     },
  //     {
  //       type: 'actions',
  //       header: 'Actions',
  //       datafield: 'actions',
  //       actions: {
  //         isView: true,
  //         isEdit: true,
  //         isDelete: true,
  //       },
  //     },
  //   ];
  // }
}
