import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password

    };

    // validate registeration
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.showFlashMessage({
        messages: ['please fill the forms'],
        dismissible: true,
        timeout: 1000,
        type: 'danger'
      });
      return false;
    }
    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlashMessage({
        messages: ['please fill the correct email address'],
        dismissible: true,
        timeout: 1000,
        type: 'danger'
      });
      return false;
  }

  // register User
  this.authService.registerUser(user).subscribe(data => {
    if (data.success) {
      this.flashMessage.showFlashMessage({
        messages: ['You are now registerd to sign in'],
        dismissible: true,
        timeout: 3000,
        type: 'success'
      });
      this.router.navigate(['/login']);
    } else {
      this.flashMessage.showFlashMessage({
        messages: ['Something went wrong'],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      this.router.navigate(['/register']);
    }
  });

}
}
