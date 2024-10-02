import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginRequest } from '../../interfaces/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;


  matcher = new ErrorStateMatcher();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9@_]{6,20}$/),
    ]),
  });

  constructor(
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){

  }

  submit(){

    if (this.loginForm.valid) {
      this._auth.onLogin(this.loginForm.value as LoginRequest).subscribe({
        next: (res) => {
          console.log(res);
          localStorage.setItem('userToken', res.token);
          this._auth.getUserData();
        },
        error: (err) => {
          this.toastr.error(err.error.message);
        },
        complete: () => {
          // here we will add instance from the toaster success
          this.toastr.success('Success', 'Login succesfully');
          this.router.navigate(['/dashboard']); // go to dashboard
        },
      });
    }
  }
}
