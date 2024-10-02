import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginResponse } from '../interfaces/login-response';
import { RegisterResponse } from '../interfaces/register-response';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private httpClient: HttpClient) {}
  url = 'auth/';

  onLogin(loginForm: FormGroup): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      this.url + 'Login',
      loginForm.value
    );
  }

  getUserData() {
    let encodeToken: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encodeToken);
    localStorage.setItem('email', decoded.email);
    localStorage.setItem('role', decoded.role);
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

  register(registerForm: FormGroup): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(
      this.url + 'register',
      registerForm.value
    );
  }
}
