import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  role: any = '';
  email: any = '';

  constructor(private router: Router) {
    this.role = localStorage.getItem('role');
    this.email = localStorage.getItem('email');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
