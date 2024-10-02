import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';
import { jwtDecode } from 'jwt-decode';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterFormModel } from '../interfaces/register-form-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private httpClient: HttpClient) {}
  url = 'auth/';

  onLogin(data: LoginRequest): Observable<LoginRequest> {
    return this.httpClient.post<LoginRequest>('Login', data);
  }

  getUserData() {
    //get the token from the local storage
    let encodeToken: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encodeToken); //token is decoded
    console.log(decoded);
    localStorage.setItem('userEmail', decoded.userEmail);
    localStorage.setItem('userName', decoded.userName);
    localStorage.setItem('role', decoded.userGroup);
    this.getRole();
  }

  getRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role') !== null
    ) {
      this.role = localStorage.getItem('role');
    }
  }

  register(formData: RegisterFormModel): Observable<any> {
    return this.httpClient.post(this.url + 'register', formData);
  }
}
