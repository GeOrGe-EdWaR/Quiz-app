import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterFormModel } from '../interfaces/register-form-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  url = 'auth/';

  register(formData: RegisterFormModel): Observable<any> {
    return this.httpClient.post(this.url + 'register', formData);
  }
}
