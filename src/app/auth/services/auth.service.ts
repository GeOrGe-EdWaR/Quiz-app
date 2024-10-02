import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IforgetPass, IresetPass } from '../interfaces/decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }
  url = 'auth/';


  onForgetPass(forgetPassForm: IforgetPass): Observable<any> {
    return this.httpClient.post(`${this.url}forgot-password`, forgetPassForm)
  }


  onResetPass(resetPassForm: IresetPass): Observable<any> {
    return this.httpClient.post(`${this.url}reset-password`, resetPassForm)
  }

}
