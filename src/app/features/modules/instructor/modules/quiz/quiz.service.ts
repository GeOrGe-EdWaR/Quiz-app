import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _HttpClient:HttpClient) { }
  
  quizDetails(id:string):Observable<any>{
    return this._HttpClient.get(`quiz/${id}`)
  }
}
