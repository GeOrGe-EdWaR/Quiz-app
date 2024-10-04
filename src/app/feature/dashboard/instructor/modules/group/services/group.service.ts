import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../interfaces/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private url = 'group';

  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.url);
  }
}
