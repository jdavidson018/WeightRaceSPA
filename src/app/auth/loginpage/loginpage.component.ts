import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { AlertifyService } from '../../Services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  model: any = {};
  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }
  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/progress']);
    });
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
   logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/pages']);
  }

  register() {
    this.router.navigate(['/auth/register']);
  }
}
