import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashlistService {

  constructor(private _HttpClient:HttpClient) { }
  topstudents():Observable<any>{
  return this._HttpClient.get('student/top-five')
  }

topquiz():Observable<any>{
  return this._HttpClient.get('quiz/incomming')
  }
}
