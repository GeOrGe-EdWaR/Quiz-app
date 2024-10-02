import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  rolesList = [
    { value: 'Student', label: 'Student' },
    { value: 'Student', label: 'Instructor' },
  ];

  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  showPassword = false;

  constructor(private _auth: AuthService, private _toastr: ToastrService) {}

  submit(): void {
    if (this.registerForm.valid) {
      this._auth
        .register(this.registerForm)
        .subscribe({
          next: (data) => {
            this._toastr.success( 'Account is created successfully' );
            console.log(data);
            
          },
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
