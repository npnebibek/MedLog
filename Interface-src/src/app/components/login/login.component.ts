import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // values from the NgModule
  username: String;
  password: String;

  constructor(
    // implement the services required for this module
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      // populating the usr object with ngmodel obtained username and password
      username: this.username,
      password: this.password
    };
    // inject authsService into the backend of the application
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.sucess) {
        this.authService.storeUserData(data.token, data.user, data.user.id); // inject the method to obtain user object, token and userid
        console.log(data.user.id);
        this.router.navigate(['/calendar']); // navigate to the calender if successful
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['Something went wrong'],
          dismissible: true,
          timeout: 1000,
          type: 'danger'
        });
        this.router.navigate(['/login']); // navigate to login
      }
    });
}
}
